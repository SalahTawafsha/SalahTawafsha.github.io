import { useEffect, useState } from 'react';
import Icon from './Icons.jsx';
import { profile } from '../data/profile.js';

function useTypewriter(words, { typeMs = 80, deleteMs = 40, holdMs = 1600 } = {}) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0]);
      return undefined;
    }
    const word = words[wordIdx % words.length];
    let delay = deleting ? deleteMs : typeMs;
    if (!deleting && text === word) delay = holdMs;
    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === '') {
        setDeleting(false);
        setWordIdx((i) => i + 1);
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words, typeMs, deleteMs, holdMs]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(profile.roles);
  const { contact } = profile;

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      {/* Background decoration */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl dark:bg-cyan-500/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl dark:bg-violet-500/15"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div className="min-w-0">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Based in {contact.location.split(', ').slice(-1)[0]} · {profile.workAuthorization.badge}
          </div>

          <p className="reveal mt-6 font-mono text-sm text-cyan-600 dark:text-accent-cyan">Hi, my name is</p>
          <h1 className="reveal mt-2 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            {profile.name}
          </h1>
          <p className="reveal mt-3 h-9 font-mono text-xl font-semibold sm:text-2xl" aria-label={profile.title}>
            <span className="text-gradient">{role}</span>
            <span className="ml-0.5 inline-block h-6 w-[2px] translate-y-1 animate-blink bg-cyan-500 dark:bg-accent-cyan" />
          </p>
          <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            {profile.summary}
          </p>

          <div className="reveal mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Get in touch <Icon name="arrowRight" className="h-4 w-4" />
            </a>
            <a href={profile.cv} download className="btn-ghost">
              <Icon name="download" className="h-4 w-4" /> Download CV
            </a>
            <a
              href={contact.linkedinHref}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost !px-3"
              aria-label="LinkedIn profile"
            >
              <Icon name="linkedin" />
            </a>
            <a
              href={contact.githubHref}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost !px-3"
              aria-label="GitHub profile"
            >
              <Icon name="github" />
            </a>
            <a href={`mailto:${contact.email}`} className="btn-ghost !px-3" aria-label="Send email">
              <Icon name="mail" />
            </a>
          </div>

          <dl className="reveal mt-12 grid max-w-lg grid-cols-3 gap-4">
            {profile.stats.map((s) => (
              <div key={s.label} className="flex flex-col border-l-2 border-cyan-500/50 pl-4">
                <dt className="text-xs text-slate-500 dark:text-slate-400">{s.label}</dt>
                <dd className="order-first text-3xl font-bold text-slate-900 dark:text-white">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <CodeCard />
      </div>
    </section>
  );
}

// Plain text shown in the hero code card — edit freely; colors are applied automatically.
const CODE = `// Full-Stack Engineer
const salah = {
  role: 'Full-Stack Engineer',
  location: 'Ramallah, Palestine',
  mobile: ['React Native', 'Flutter'],
  backend: ['Node.js', 'Spring Boot',
            'Django', 'Frappe'],
  web: ['Angular', 'TypeScript'],
  data: ['PostgreSQL', 'PostGIS',
         'MySQL', 'Redis']
};`;

const TOKEN_CLASSES = {
  comment: 'text-slate-400 dark:text-slate-500',
  string: 'text-emerald-600 dark:text-emerald-300',
  keyword: 'text-violet-500 dark:text-violet-400',
  name: 'text-cyan-600 dark:text-accent-cyan',
};

// Tiny highlighter: comments, 'strings', and `const name` declarations.
function highlight(code) {
  const re = /(\/\/.*$)|('[^']*')|\b(const|let|var)(\s+)(\w+)/gm;
  const out = [];
  let last = 0;
  let m;
  while ((m = re.exec(code))) {
    out.push(code.slice(last, m.index));
    const key = m.index;
    if (m[1]) out.push(<span key={key} className={TOKEN_CLASSES.comment}>{m[1]}</span>);
    else if (m[2]) out.push(<span key={key} className={TOKEN_CLASSES.string}>{m[2]}</span>);
    else
      out.push(
        <span key={key} className={TOKEN_CLASSES.keyword}>{m[3]}</span>,
        m[4],
        <span key={`${key}n`} className={TOKEN_CLASSES.name}>{m[5]}</span>
      );
    last = re.lastIndex;
  }
  out.push(code.slice(last));
  return out;
}

function CodeCard() {
  return (
    <div className="reveal min-w-0 animate-float">
      <div className="card overflow-hidden !bg-white dark:!bg-ink-900">
        <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-ink-700">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-slate-400">salah.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-slate-700 dark:text-slate-300">
          <code>{highlight(CODE)}</code>
        </pre>
      </div>
    </div>
  );
}
