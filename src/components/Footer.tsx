// src/components/Footer.tsx
import styles from './Footer.module.css'
import profile from '../data/profile'

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.contactText}>
          The best way to reach me is by email:{' '}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <div className={styles.divider} />
      </div>
    </footer>
  )
}
