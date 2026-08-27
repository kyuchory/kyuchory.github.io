import profilePhoto from '../assets/my_face.webp'
import ProjectCard from '../components/ProjectCard'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-2xl font-semibold text-[var(--color-text)]">{title}</h2>
    </div>
  )
}

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Hero */}
      <section className="flex flex-col items-center gap-6 py-20 text-center sm:py-28">
        <img
          src={profilePhoto}
          alt={profile.name}
          className="h-28 w-28 rounded-full border border-[var(--color-border)] object-cover"
        />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-base text-[var(--color-text-soft)]">{profile.title}</p>
        </div>
        <p className="max-w-xl text-lg leading-relaxed text-[var(--color-text)]">{profile.tagline}</p>
        <div className="flex gap-3 pt-2">
          <a
            href={`mailto:${profile.contact.email}`}
            className="rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            이메일 보내기
          </a>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--color-border)] px-5 py-2 text-sm font-medium text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 py-16">
        <SectionTitle eyebrow="About" title="소개" />
        <p className="text-[15px] leading-relaxed text-[var(--color-text-soft)]">{profile.bio}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {profile.highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
            >
              <h3 className="text-[15px] font-semibold text-[var(--color-text)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-soft)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 py-16">
        <SectionTitle eyebrow="Skills" title="기술 스택" />
        <div className="grid gap-8 sm:grid-cols-2">
          {Object.entries(profile.skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-[var(--color-text)]">{category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-[var(--color-border)] px-2.5 py-1 text-sm text-[var(--color-text-soft)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Career */}
      <section id="career" className="scroll-mt-24 py-16">
        <SectionTitle eyebrow="Career" title="경력 · 학력" />

        <div className="space-y-5">
          {[...profile.career, ...profile.education].map((item) => (
            <div
              key={item.org + item.period}
              className="flex flex-col gap-1 border-b border-[var(--color-border)] pb-5 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <h3 className="text-[15px] font-semibold text-[var(--color-text)]">{item.org}</h3>
                <p className="mt-0.5 text-sm text-[var(--color-text-soft)]">{item.role}</p>
              </div>
              <p className="shrink-0 text-sm text-[var(--color-text-soft)]">{item.period}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)]">자격증 · 어학</h3>
            <ul className="mt-3 space-y-2">
              {profile.certifications.map((cert) => (
                <li key={cert.name} className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-soft)]">{cert.name}</span>
                  <span className="text-[var(--color-text-soft)]">{cert.date}</span>
                </li>
              ))}
              {profile.languages.map((lang) => (
                <li key={lang.name} className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-soft)]">
                    {lang.name} · {lang.level}
                  </span>
                  <span className="text-[var(--color-text-soft)]">{lang.date}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)]">수상 경력</h3>
            <ul className="mt-3 space-y-4">
              {profile.awards.map((award) => (
                <li key={award.title}>
                  <p className="text-sm font-medium text-[var(--color-text)]">{award.title}</p>
                  <p className="text-xs text-[var(--color-text-soft)]">
                    {award.org} · {award.date}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-soft)]">
                    {award.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 py-16">
        <SectionTitle eyebrow="Projects" title="프로젝트" />
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}
