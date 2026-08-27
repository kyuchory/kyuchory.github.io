import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-6 py-8 text-sm text-[var(--color-text-soft)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-4">
          <a href={`mailto:${profile.contact.email}`} className="hover:text-[var(--color-text)]">
            {profile.contact.email}
          </a>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--color-text)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
