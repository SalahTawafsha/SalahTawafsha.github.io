import SectionHeading from './SectionHeading.jsx';
import Icon from './Icons.jsx';
import { skills } from '../data/profile.js';

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container-x">
        <SectionHeading index={4} title="Skills" subtitle="The tools and technologies I work with day to day." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="reveal card card-hover p-6">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-gradient-to-br from-cyan-500/15 to-violet-500/15 p-2.5 text-cyan-600 dark:text-accent-cyan">
                  <Icon name={group.icon} />
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.category}</h3>
                <span className="ml-auto font-mono text-xs text-slate-400">{group.items.length}</span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <li
                    key={s}
                    className="chip transition hover:border-cyan-400/60 hover:text-cyan-700 dark:hover:text-accent-cyan"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
