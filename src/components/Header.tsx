// src/components/Header.tsx
import styles from './Header.module.css'
import profile from '../data/profile'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <span className={styles.navName}>{profile.name}</span>
          <div className={styles.navLinks}>
            <a href="#about">About</a>
            {/* {profile.publications.length > 0 && <a href="#publications">Publications</a>} */}
            {profile.news && profile.news.length > 0 && <a href="#news">News</a>}
            <a href="#contact">Contact</a>
            {/* {profile.cvUrl && (
              <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className={styles.cvLink}>
                CV
              </a>
            )} */}
          </div>
        </nav>
      </div>
    </header>
  )
}
