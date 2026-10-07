import SectionHeading from './SectionHeading.jsx';
import Icon from './Icons.jsx';
import { education } from '../data/profile.js';

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container-x">
        <SectionHeading index={5} title="Education" />
        <article className="reveal card card-hover relative overflow-hidden p-6 sm:p-8">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/10 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
            <span className="w-fit rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 p-4 text-white shadow-lg shadow-cyan-500/20">
              <Icon name="graduation" className="h-8 w-8" />
            </span>
            <div className="flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{education.degree}</h3>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{education.period}</span>
              </div>
              <p className="mt-1 font-medium text-gradient">{education.school}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {education.details.map((d) => (
                  <li key={d} className="chip">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
