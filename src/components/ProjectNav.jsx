import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ITEMS = [
  { id: 'overview', label: '개요' },
  { id: 'role', label: '담당 역할' },
  { id: 'stack', label: '기술 스택' },
  { id: 'gallery', label: '프로젝트 이미지' },
  { id: 'case-studies', label: '문제 해결 과정' },
  { id: 'points', label: '주요 작업' },
]

export default function ProjectNav({ slug }) {
  const [active, setActive] = useState(null)
  const [items, setItems] = useState([])

  useEffect(() => {
    const order = ITEMS.map((item) => item.id)

    const raf = requestAnimationFrame(() => {
      const sections = order.map((id) => document.getElementById(id)).filter(Boolean)
      setItems(ITEMS.filter((item) => sections.some((section) => section.id === item.id)))
    })

    const sections = order.map((id) => document.getElementById(id)).filter(Boolean)
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
    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [slug])

  if (items.length === 0) return null

  return (
    <nav className="fixed top-1/2 left-6 z-30 hidden -translate-y-1/2 lg:block">
      <div className="flex flex-col gap-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 p-1.5 shadow-sm backdrop-blur">
        <Link
          to="/#projects"
          className="mb-1 flex items-center gap-2 rounded-lg border-b border-[var(--color-border)] px-3 pt-1 pb-2.5 text-xs font-medium whitespace-nowrap text-[var(--color-text-soft)] transition hover:text-[var(--color-text)]"
        >
          <svg viewBox="0 0 20 20" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12.5 4.5l-6 5.5 6 5.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          목록으로
        </Link>
        {items.map((item) => {
          const isActive = active === item.id
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium whitespace-nowrap transition ${
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
            </a>
          )
        })}
      </div>
    </nav>
  )
}
