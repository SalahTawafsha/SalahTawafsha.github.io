import SectionHeading from './SectionHeading.jsx';
import Icon from './Icons.jsx';
import { profile } from '../data/profile.js';

export default function Contact() {
  const { contact } = profile;
  const items = [
    { icon: 'mail', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: 'phone', label: 'Phone', value: contact.phone, href: contact.phoneHref },
    { icon: 'linkedin', label: 'LinkedIn', value: contact.linkedin.replace('linkedin.com/in/', ''), href: contact.linkedinHref, external: true },
    { icon: 'github', label: 'GitHub', value: contact.github.replace('github.com/', ''), href: contact.githubHref, external: true },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container-x">
        <SectionHeading index={6} title="Contact" />
        <div className="reveal card relative overflow-hidden p-8 text-center sm:p-12">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative">
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Let's build something <span className="text-gradient">great</span> together.
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
              I'm open to new opportunities, collaborations and interesting problems. Whether you have a question or
              just want to say hi, my inbox is always open.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Icon name="mapPin" className="h-4 w-4" /> {contact.location}
            </p>
            <br />
            <a href={`mailto:${contact.email}`} className="btn-primary mt-6">
              <Icon name="mail" className="h-4 w-4" /> Say hello
            </a>
          </div>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => {
            const body = (
              <>
                <span className="rounded-xl bg-gradient-to-br from-cyan-500/15 to-violet-500/15 p-2.5 text-cyan-600 dark:text-accent-cyan">
                  <Icon name={it.icon} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-400">{it.label}</p>
                  <p className="mt-1 break-words text-sm font-medium text-slate-800 dark:text-slate-200">{it.value}</p>
                </div>
              </>
            );
            return (
              <li key={it.label} className="reveal">
                {it.href ? (
                  <a
                    href={it.href}
                    {...(it.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="card card-hover flex h-full items-center gap-4 p-5"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="card flex h-full items-center gap-4 p-5">{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
