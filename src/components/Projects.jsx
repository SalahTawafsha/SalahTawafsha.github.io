import SectionHeading from './SectionHeading.jsx';
import Icon from './Icons.jsx';
import { projects, profile } from '../data/profile.js';

export default function Projects() {
  if (!projects.length) return null;

  return (
    <section id="projects" className="py-24">
      <div className="container-x">
        <SectionHeading index={3} title="Projects" subtitle="Selected mobile and web projects — source code available on GitHub." />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p) => {
            const web = p.layout === 'web';
            return (
              <article
                key={p.name}
                className={`reveal card card-hover flex flex-col overflow-hidden ${web ? 'lg:col-span-2 lg:flex-row' : ''}`}
              >
                <div
                  className={`relative flex justify-center gap-3 overflow-hidden bg-gradient-to-br from-cyan-500/15 via-transparent to-violet-500/20 sm:gap-4 ${
                    web ? 'items-end px-6 pt-8 lg:w-[55%] lg:shrink-0 lg:items-center lg:p-8' : 'px-6 pt-8'
                  }`}
                >
                  <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
                  {web ? (
                    <BrowserFrame src={p.images[0]} alt={`${p.name} screenshot`} />
                  ) : (
                    p.images.map((src, i) => (
                      <img
                        key={src}
                        src={src}
                        alt={`${p.name} screenshot ${i + 1}`}
                        loading="lazy"
                        className={`relative w-[28%] max-w-[150px] rounded-t-2xl border border-b-0 border-slate-200 shadow-xl shadow-slate-900/10 transition duration-500 dark:border-ink-700 dark:shadow-black/40 ${
                          i === 1 ? '-mb-2 translate-y-0' : 'translate-y-6'
                        }`}
                      />
                    ))
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{p.name}</h3>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{p.platform}</span>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">{p.description}</p>

                  <ul className="mt-4 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-accent-cyan" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                    {p.tech.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2">
                        <Icon name={l.icon || 'external'} className="h-4 w-4" /> {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="reveal mt-10 text-center">
          <a href={profile.contact.githubHref} target="_blank" rel="noreferrer" className="btn-ghost">
            <Icon name="github" className="h-4 w-4" /> More on GitHub <Icon name="external" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function BrowserFrame({ src, alt }) {
  return (
    <div className="relative w-full max-w-xl overflow-hidden rounded-t-xl border border-b-0 border-slate-200 bg-white shadow-xl shadow-slate-900/10 dark:border-ink-700 dark:bg-ink-900 dark:shadow-black/40 lg:rounded-xl lg:border-b">
      <div className="flex items-center gap-1.5 border-b border-slate-200 px-3 py-2 dark:border-ink-700">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
      </div>
      <img src={src} alt={alt} loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
    </div>
  );
}
