import { Link, Navigate, useParams } from 'react-router-dom'
import ProjectNav from '../components/ProjectNav'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/" replace />

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <ProjectNav slug={slug} />

      <Link
        to="/#projects"
        className="inline-flex items-center gap-1 text-sm text-[var(--color-text-soft)] hover:text-[var(--color-text)]"
      >
        <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M13 4l-6 6 6 6" />
        </svg>
        프로젝트 목록
      </Link>

      {project.coverImage && (
        <img
          src={project.coverImage}
          alt={`${project.name} 소개 이미지`}
          className="mt-6 aspect-[2.1/1] w-full rounded-2xl border border-[var(--color-border)] object-cover"
        />
      )}

      <div id="overview" className="scroll-mt-24">
        <div className="mt-6 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">{project.name}</h1>
            <p className="mt-1 text-sm text-[var(--color-text-soft)]">
              {project.period} · {project.role}
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
            {project.status}
          </span>
        </div>

        {(project.links.githubClient ||
          project.links.githubServer ||
          project.links.github ||
          project.links.demo ||
          project.links.playstore) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.links.github && (
              <LinkPill href={project.links.github} label="GitHub" icon="github" />
            )}
            {project.links.githubClient && (
              <LinkPill href={project.links.githubClient} label="GitHub (Client)" icon="github" />
            )}
            {project.links.githubServer && (
              <LinkPill href={project.links.githubServer} label="GitHub (Server)" icon="github" />
            )}
            {project.links.demo && <LinkPill href={project.links.demo} label="Live Service" icon="link" />}
            {project.links.playstore && (
              <LinkPill href={project.links.playstore} label="Play Store" icon="link" />
            )}
          </div>
        )}

        <p className="mt-8 text-[15px] leading-relaxed text-[var(--color-text-soft)]">
          {project.description}
        </p>
      </div>

      <section id="role" className="mt-10 scroll-mt-24">
        <h2 className="text-sm font-semibold text-[var(--color-text)]">담당 역할</h2>
        <ul className="mt-3 space-y-2">
          {project.myRole.map((line) => (
            <li key={line} className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-soft)]">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-soft)]" />
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section id="stack" className="mt-10 scroll-mt-24">
        <h2 className="text-sm font-semibold text-[var(--color-text)]">기술 스택</h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          {Object.entries(project.stack).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs font-medium text-[var(--color-text-soft)]">{category}</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {items.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-text-soft)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {project.gallery?.length > 0 && (
        <section id="gallery" className="mt-14 scroll-mt-24">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">프로젝트 이미지</h2>
          <div className="mt-6 space-y-8">
            {project.gallery.map((group) => (
              <div key={group.category}>
                <p className="text-xs font-medium tracking-wide text-[var(--color-text-soft)] uppercase">
                  {group.category}
                </p>
                <div
                  className={`mt-3 grid grid-cols-2 gap-3 ${
                    project.galleryAspect === 'wide' || project.galleryAspect === 'auto'
                      ? 'sm:grid-cols-2'
                      : 'sm:grid-cols-4'
                  }`}
                >
                  {group.images.map((image) => (
                    <a
                      key={image.src}
                      href={image.src}
                      target="_blank"
                      rel="noreferrer"
                      className={`block overflow-hidden rounded-xl border border-[var(--color-border)] ${
                        project.galleryAspect === 'auto' ? 'bg-[var(--color-surface)]' : ''
                      }`}
                    >
                      {project.galleryAspect === 'auto' ? (
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full object-contain transition hover:scale-[1.03]"
                        />
                      ) : (
                        <img
                          src={image.src}
                          alt={image.alt}
                          className={`w-full object-cover object-top transition hover:scale-[1.03] ${
                            project.galleryAspect === 'wide' ? 'aspect-[16/10]' : 'aspect-[9/19]'
                          }`}
                        />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.caseStudies.length > 0 && (
        <section id="case-studies" className="mt-14 scroll-mt-24">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">문제 해결 과정</h2>
          <div className="mt-6 space-y-10">
            {project.caseStudies.map((cs, i) => (
              <article key={cs.title} className="border-t border-[var(--color-border)] pt-6">
                <h3 className="text-[15px] font-semibold text-[var(--color-text)]">
                  {i + 1}. {cs.title}
                </h3>

                <div className="mt-4 space-y-4 text-sm leading-relaxed">
                  <div>
                    <p className="text-xs font-medium text-[var(--color-accent)]">문제 상황</p>
                    <p className="mt-1 text-[var(--color-text-soft)]">{cs.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[var(--color-accent)]">원인</p>
                    <p className="mt-1 text-[var(--color-text-soft)]">{cs.cause}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[var(--color-accent)]">해결</p>
                    <p className="mt-1 text-[var(--color-text-soft)]">{cs.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[var(--color-accent)]">성과</p>
                    <ul className="mt-1 space-y-1">
                      {cs.result.map((r) => (
                        <li key={r} className="flex gap-2 text-[var(--color-text-soft)]">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {project.points?.length > 0 && (
        <section id="points" className="mt-14 scroll-mt-24">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">주요 작업</h2>
          <div className="mt-6 space-y-6">
            {project.points.map((point) => (
              <div key={point.title} className="border-t border-[var(--color-border)] pt-5">
                <h3 className="text-[15px] font-semibold text-[var(--color-text)]">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-soft)]">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.65 0 8.15c0 3.6 2.29 6.65 5.47 7.73.4.08.55-.18.55-.4 0-.19-.01-.83-.01-1.51-2.01.38-2.53-.5-2.69-.96-.09-.24-.48-.96-.82-1.16-.28-.15-.68-.53-.01-.54.63-.01 1.08.59 1.23.83.72 1.359 1.87 0.98 2.33.75.07-.58.28-.98.51-1.2-1.78-.2-3.64-.91-3.64-4.02 0-.89.31-1.62.82-2.19-.08-.2-.36-1.03.08-2.15 0 0 .67-.22 2.2.84a7.42 7.42 0 0 1 4 0c1.53-1.06 2.2-.84 2.2-.84.44 1.12.16 1.95.08 2.15.51.57.82 1.29.82 2.19 0 3.12-1.87 3.81-3.65 4.02.29.26.54.76.54 1.53 0 1.11-.01 2-.01 2.27 0 .22.15.48.55.4A8.18 8.18 0 0 0 16 8.15C16 3.65 12.42 0 8 0Z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M6.5 3H3.6A1.6 1.6 0 0 0 2 4.6v7.8A1.6 1.6 0 0 0 3.6 14h7.8A1.6 1.6 0 0 0 13 12.4V9.5M9.5 2H14v4.5M13.5 2.5l-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LinkPill({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
    >
      {icon === 'link' ? <ExternalLinkIcon /> : <GithubIcon />}
      {label}
    </a>
  )
}
