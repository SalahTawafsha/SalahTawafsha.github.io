import Icon from './Icons.jsx';
import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-ink-800">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.contact.linkedinHref}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 transition hover:text-cyan-600 dark:hover:text-accent-cyan"
          >
            <Icon name="linkedin" className="h-4 w-4" />
          </a>
          <a
            href={profile.contact.githubHref}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 transition hover:text-cyan-600 dark:hover:text-accent-cyan"
          >
            <Icon name="github" className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            aria-label="Email"
            className="rounded-lg p-2 transition hover:text-cyan-600 dark:hover:text-accent-cyan"
          >
            <Icon name="mail" className="h-4 w-4" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="rounded-lg p-2 transition hover:text-cyan-600 dark:hover:text-accent-cyan"
          >
            <Icon name="arrowUp" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
