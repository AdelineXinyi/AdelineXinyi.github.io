// src/components/News.tsx
import styles from './News.module.css'
import profile from '../data/profile'

export default function News() {
  if (!profile.news || profile.news.length === 0) return null

  return (
    <section id="news" className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>News</h2>
        <div className={styles.newsList}>
          {profile.news.map((item, i) => (
            <div key={i} className={styles.newsItem}>
              <span className={styles.date}>{item.date}</span>
              <span className={styles.content}>{item.content}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
