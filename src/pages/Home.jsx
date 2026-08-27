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

        <div className="space-y-1 text-sm text-[var(--color-text-soft)]">
          <p>
            {profile.name} · {profile.englishName} · {profile.hanjaName} · {profile.birthday}
          </p>
          {profile.military && (
            <p>
              병역 · {profile.military.detail} ({profile.military.period})
            </p>
          )}
        </div>

        <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-text-soft)]">{profile.bio}</p>
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
        <SectionTitle eyebrow="Career" title="경력 · 학력 · 경험" />

        <div className="space-y-5">
          {[...profile.education, ...profile.career].map((item) => (
            <div
              key={item.org + item.period}
              className="flex flex-col gap-1 border-b border-[var(--color-border)] pb-5 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-accent)]">
                    {item.type}
                  </span>
                  <h3 className="text-[15px] font-semibold text-[var(--color-text)]">{item.org}</h3>
                </div>
                <p className="mt-1.5 text-sm text-[var(--color-text-soft)]">{item.role}</p>

                {(item.gpaOverall || item.gpaMajor) && (
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--color-text-soft)]">
                    {item.gpaOverall && <span>{item.gpaOverall}</span>}
                    {item.gpaMajor && <span>{item.gpaMajor}</span>}
                  </div>
                )}

                {item.notableCourses?.length > 0 && (
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {item.notableCourses.map((course) => (
                      <li
                        key={course}
                        className="rounded-md border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-text-soft)]"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                )}

                {item.details?.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-soft)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-soft)]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <p className="shrink-0 text-sm text-[var(--color-text-soft)]">{item.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Languages */}
      <section id="certifications" className="scroll-mt-24 py-16">
        <SectionTitle eyebrow="Certifications" title="자격증 · 어학" />
        <ul className="space-y-3">
          {profile.certifications.map((cert) => (
            <li
              key={cert.name}
              className="flex flex-col gap-1 border-b border-[var(--color-border)] pb-3 text-sm sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-accent)]">
                  자격증
                </span>
                <span className="text-[var(--color-text)]">{cert.name}</span>
                {cert.org && <span className="text-xs text-[var(--color-text-soft)]">{cert.org}</span>}
              </div>
              <span className="shrink-0 text-[var(--color-text-soft)]">{cert.date}</span>
            </li>
          ))}
          {profile.languages.map((lang) => (
            <li
              key={lang.name}
              className="flex flex-col gap-1 border-b border-[var(--color-border)] pb-3 text-sm sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-accent)]">
                  어학
                </span>
                <span className="text-[var(--color-text)]">
                  {lang.name} · {lang.level}
                </span>
              </div>
              <span className="shrink-0 text-[var(--color-text-soft)]">{lang.date}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Awards */}
      <section id="awards" className="scroll-mt-24 py-16">
        <SectionTitle eyebrow="Awards" title="수상 경력" />
        <ul className="space-y-8">
          {profile.awards.map((award) => (
            <li key={award.title} className="border-b border-[var(--color-border)] pb-8">
              <p className="text-sm font-medium text-[var(--color-text)]">{award.title}</p>
              <p className="mt-0.5 text-xs text-[var(--color-text-soft)]">
                {award.org} · {award.date}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-soft)]">{award.summary}</p>
              {award.highlights?.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {award.highlights.map((line) => (
                    <li key={line} className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-soft)]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-soft)]" />
                      {line}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 py-16">
        <SectionTitle eyebrow="Projects" title="프로젝트" />
        <p className="-mt-6 mb-8 text-sm text-[var(--color-text-soft)]">
          개별 프로젝트를 클릭하면 상세히 볼 수 있습니다.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}
