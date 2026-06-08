import styles from './Publications.module.css'
import profile from '../data/profile'

export default function Publications() {
  if (profile.publications.length === 0) return null

  const byYear = profile.publications.reduce<Record<number, typeof profile.publications>>(
    (acc, pub) => {
      ;(acc[pub.year] = acc[pub.year] || []).push(pub)
      return acc
    },
    {}
  )
  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <section id="publications" className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Publications</h2>
        {years.map(year => (
          <div key={year} className={styles.yearGroup}>
            <span className={styles.yearLabel}>{year}</span>
            <div className={styles.pubList}>
              {byYear[year].map((pub, i) => (
                <div key={i} className={styles.pubItem}>
                  <p className={styles.pubTitle}>{pub.title}</p>
                  <p className={styles.pubAuthors}>{pub.authors}</p>
                  <p className={styles.pubVenue}>{pub.venue}</p>
                  {pub.links && pub.links.length > 0 && (
                    <div className={styles.pubLinks}>
                      {pub.links.map((link, j) => (
                        <a key={j} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.pubLink}>
                          [{link.label}]
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
