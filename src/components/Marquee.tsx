import styles from './Marquee.module.css'

const ITEMS = [
  'Feeling Dark',
  'Elige Tu Mood',
  'Aura · Boost · Focus',
  'Cacao con Intención',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  )
}
