import { motion } from 'framer-motion'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={`display ${styles.brandName}`}>
            Chocovibe
            <span className={styles.brandDot} />
          </div>
          <div className="eyebrow" style={{ color: 'rgba(239,229,221,0.5)', marginBottom: 16 }}>FEELING DARK</div>
          <p className={styles.brandDesc}>
            Chocolate diseñado alrededor de tu mood. Cacao real, intención clara, sin atajos.
          </p>
        </div>


      </div>
      <div className={styles.bottom}>
        <span>© 2026 Chocovibe</span>
        <span>Feeling Dark · Hecho con cacao</span>
      </div>
    </footer>
  )
}
