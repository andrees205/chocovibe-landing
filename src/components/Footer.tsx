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

        <div className={styles.col}>
          <h4 className={styles.colHead}>Tienda</h4>
          <ul className={styles.colList}>
            <li><a href="#">Aura</a></li>
            <li><a href="#">Boost</a></li>
            <li><a href="#">Focus</a></li>
            <li><a href="#">Packs</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHead}>Nosotros</h4>
          <ul className={styles.colList}>
            <li><a href="#">Nuestra historia</a></li>
            <li><a href="#">Origen del cacao</a></li>
            <li><a href="#">Prensa</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHead}>Contacto</h4>
          <ul className={styles.colList}>
            <li><a href="mailto:chocovibe@gmail.com">chocovibe@gmail.com</a></li>
            <li><a href="#">chocovibe.com</a></li>
            <li><a href="#">Stand #5</a></li>
            <li><a href="#">2203·00000</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 Chocovibe</span>
        <span>Feeling Dark · Hecho con cacao</span>
      </div>
    </footer>
  )
}
