import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const ITEMS = [
  { id: 'about', label: '소개' },
  { id: 'skills', label: '기술' },
  { id: 'career', label: '경력' },
  { id: 'certifications', label: '자격증' },
  { id: 'awards', label: '수상' },
  { id: 'projects', label: '프로젝트' },
]

export default function FloatingNav() {
  const location = useLocation()
  const [active, setActive] = useState(null)

  useEffect(() => {
    const order = ITEMS.map((item) => item.id)
    const sections = order.map((id) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0) return

    const visible = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        })
        const current = order.filter((id) => visible.has(id)).at(-1)
        if (current) setActive(current)
      },
      { rootMargin: '-96px 0px -60% 0px', threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [location.pathname])

  const activeId = location.pathname === '/' ? active : null

  return (
    <nav className="fixed top-1/2 right-6 z-30 hidden -translate-y-1/2 lg:block">
      <div className="flex flex-col gap-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 p-1.5 shadow-sm backdrop-blur">
        {ITEMS.map((item) => {
          const isActive = activeId === item.id
          return (
            <Link
              key={item.id}
              to={`/#${item.id}`}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition ${
                isActive
                  ? 'text-[var(--color-accent)]'
                  : 'text-[var(--color-text-soft)] hover:text-[var(--color-text)]'
              }`}
            >
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full transition ${
                  isActive ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-border)]'
                }`}
              />
              {item.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
