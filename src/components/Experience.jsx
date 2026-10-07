import SectionHeading from './SectionHeading.jsx';
import { experience } from '../data/profile.js';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container-x">
        <SectionHeading
          index={2}
          title="Experience"
          subtitle="Where I've worked and what I've built across mobile, web and backend."
        />

        <ol className="relative ml-2 border-l border-slate-200 dark:border-ink-700 sm:ml-4">
          {experience.map((job) => (
            <li key={job.company + job.period} className="reveal relative mb-10 pl-6 last:mb-0 sm:pl-10">
              <span
                className={`absolute -left-[7px] top-7 h-3.5 w-3.5 rounded-full border-2 border-slate-50 dark:border-ink-950 ${
                  job.current
                    ? 'bg-gradient-to-br from-cyan-400 to-violet-500 ring-4 ring-cyan-400/20'
                    : 'bg-slate-300 dark:bg-ink-700'
                }`}
                aria-hidden="true"
              />
              <article className="card card-hover p-6 sm:p-7">
                <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">{job.role}</h3>
                    <p className="mt-0.5 font-medium text-gradient">{job.company}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    {job.current && (
                      <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                        Current
                      </span>
                    )}
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{job.period}</span>
                  </div>
                </header>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-accent-cyan" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {job.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
