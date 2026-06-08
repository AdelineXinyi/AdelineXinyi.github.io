// src/components/About.tsx
import styles from './About.module.css'
import profile from '../data/profile'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.avatarWrap}>
              {profile.profileImage ? (
                <img src={profile.profileImage} alt={profile.name} className={styles.avatar} />
              ) : (
                <div className={styles.avatarPlaceholder}>
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>

            <h1 className={styles.name}>{profile.name}</h1>
            <p className={styles.title}>{profile.title}</p>
            <p className={styles.affiliation}>
              {profile.department}<br />
              {profile.university}
            </p>

            <div className={styles.links}>
              <a href={`mailto:${profile.email}`} className={styles.linkItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
                Email
              </a>
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
              )}
              {/* {profile.googleScholar && (
                <a href={profile.googleScholar} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>
                  Scholar
                </a>
              )} */}
              {/* {profile.cvUrl && (
                <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
                  CV / Résumé
                </a>
              )} */}
            </div>
          </aside>

          <main className={styles.bio}>
            <h2 className={styles.sectionTitle}>About</h2>
            {profile.bio.map((para, i) => (
              <p key={i} className={styles.bioPara}>{para}</p>
            ))}
          </main>
        </div>
      </div>
    </section>
  )
}
