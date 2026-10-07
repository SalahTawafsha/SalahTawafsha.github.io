export default function SectionHeading({ index, title, subtitle }) {
  return (
    <div className="reveal mb-12">
      <p className="font-mono text-sm text-cyan-600 dark:text-accent-cyan">
        {String(index).padStart(2, '0')}. <span className="text-slate-400">// {title.toLowerCase()}</span>
      </p>
      <h2 className="mt-2 flex items-center gap-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
        <span className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent dark:from-ink-700" />
      </h2>
      {subtitle && <p className="mt-3 max-w-2xl text-slate-500 dark:text-slate-400">{subtitle}</p>}
    </div>
  );
}
