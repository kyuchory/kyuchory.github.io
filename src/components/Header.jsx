import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import ThemeToggle from './ThemeToggle'

const NAV_ITEMS = [
  { label: '소개', hash: '#about' },
  { label: '기술', hash: '#skills' },
  { label: '경력', hash: '#career' },
  { label: '프로젝트', hash: '#projects' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link to="/" className="text-sm font-semibold tracking-tight text-[var(--color-text)]">
          {profile.name}
        </Link>
        <nav className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.hash}
              to={`/${item.hash}`}
              className="rounded-full px-3 py-1.5 text-sm text-[var(--color-text-soft)] transition hover:text-[var(--color-text)]"
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
