import SectionHeading from './SectionHeading.jsx';
import Icon from './Icons.jsx';
import { profile, education } from '../data/profile.js';

export default function About() {
  const facts = [
    { icon: 'mapPin', label: 'Location', value: profile.contact.location },
    { icon: 'briefcase', label: 'Current role', value: 'Mobile Full-Stack Developer @ VNG International' },
    { icon: 'graduation', label: 'Education', value: `B.Sc. Computer Science, ${education.school}` },
    { icon: 'globe', label: 'Languages', value: profile.languages.join(' · ') },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container-x">
        <SectionHeading index={1} title="About" />
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="reveal space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            <p>
              I'm a <span className="font-semibold text-slate-900 dark:text-white">Full-Stack Engineer</span> who
              enjoys owning features end to end — from database schema and API design to the pixels on a phone
              screen.
            </p>
            <p>
              Over the past two-plus years I've shipped production software with{' '}
              <span className="text-cyan-600 dark:text-accent-cyan">Flutter</span>,{' '}
              <span className="text-cyan-600 dark:text-accent-cyan">Python (Frappe)</span>,{' '}
              <span className="text-cyan-600 dark:text-accent-cyan">Spring Boot</span> and{' '}
              <span className="text-cyan-600 dark:text-accent-cyan">Angular</span>. Today I build cross-platform
              mobile apps with <span className="text-cyan-600 dark:text-accent-cyan">React Native</span>,{' '}
              <span className="text-cyan-600 dark:text-accent-cyan">Node.js</span>,{' '}
              <span className="text-cyan-600 dark:text-accent-cyan">PostgreSQL</span> and{' '}
              <span className="text-cyan-600 dark:text-accent-cyan">PostGIS</span> — including offline-first
              sync and geospatial features.
            </p>
            <p>I care about clean, efficient, well-tested code and about the people who use what I build.</p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {facts.map((f) => (
              <li key={f.label} className="reveal card card-hover flex items-start gap-4 p-5">
                <span className="rounded-xl bg-gradient-to-br from-cyan-500/15 to-violet-500/15 p-2.5 text-cyan-600 dark:text-accent-cyan">
                  <Icon name={f.icon} />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-400">{f.label}</p>
                  <p className="mt-1 font-medium text-slate-800 dark:text-slate-200">{f.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
