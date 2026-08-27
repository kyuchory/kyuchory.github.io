import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const allStack = Object.values(project.stack).flat()

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition hover:border-[var(--color-accent)] hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text)]">{project.name}</h3>
          <p className="mt-0.5 text-xs text-[var(--color-text-soft)]">{project.period}</p>
        </div>
        <span className="shrink-0 rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--color-accent)]">
          {project.status}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-[var(--color-text-soft)]">{project.summary}</p>

      <div className="flex flex-wrap gap-1.5">
        {allStack.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-text-soft)]"
          >
            {tech}
          </span>
        ))}
        {allStack.length > 6 && (
          <span className="rounded-md px-2 py-0.5 text-xs text-[var(--color-text-soft)]">
            +{allStack.length - 6}
          </span>
        )}
      </div>

      <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]">
        자세히 보기
        <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" className="transition group-hover:translate-x-0.5">
          <path d="M7 4l6 6-6 6" />
        </svg>
      </span>
    </Link>
  )
}
