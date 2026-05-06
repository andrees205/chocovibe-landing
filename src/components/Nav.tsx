import { motion } from 'framer-motion'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <motion.nav
      className={styles.nav}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#" className={styles.logo}>
        Chocovibe<span className={styles.dot} />
      </a>
      <div className={styles.links}>
        <a href="#about">Nosotros</a>
        <a href="#moods">Moods</a>
        <a href="#collection">Colección</a>
        <a href="#how">Cómo funciona</a>
        <a href="#shop" className={styles.cta}>Comprar</a>
      </div>
    </motion.nav>
  )
}
