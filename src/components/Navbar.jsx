import { useEffect, useState } from 'react';
import Icon from './Icons.jsx';
import { navLinks, profile } from '../data/profile.js';

export default function Navbar({ theme, onToggleTheme }) {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const linkClass = (id) =>
    `relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      active === id
        ? 'text-cyan-600 dark:text-accent-cyan'
        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-lg dark:border-ink-800 dark:bg-ink-950/80'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
        <a href="#top" className="font-mono text-lg font-bold text-slate-900 dark:text-white">
          <span className="text-gradient">&lt;</span>
          {profile.shortName}
          <span className="text-gradient"> /&gt;</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l, i) => (
            <a key={l.id} href={`#${l.id}`} className={linkClass(l.id)}>
              <span className="font-mono text-xs text-cyan-600/70 dark:text-accent-cyan/60">0{i + 1}.</span> {l.label}
            </a>
          ))}
          <ThemeButton theme={theme} onToggle={onToggleTheme} />
          <a href={profile.cv} download className="btn-ghost ml-2 !px-4 !py-2">
            <Icon name="download" className="h-4 w-4" /> CV
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeButton theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="rounded-lg p-2 text-slate-700 dark:text-slate-200"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-x pb-6 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((l, i) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className={linkClass(l.id)}>
                <span className="font-mono text-xs text-cyan-600/70 dark:text-accent-cyan/60">0{i + 1}.</span> {l.label}
              </a>
            ))}
            <a href={profile.cv} download className="btn-primary mt-3">
              <Icon name="download" className="h-4 w-4" /> Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function ThemeButton({ theme, onToggle }) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-lg p-2 text-slate-600 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-accent-cyan"
    >
      <Icon name={isDark ? 'sun' : 'moon'} />
    </button>
  );
}
