import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const lineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const visualVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 } },
}

const tagVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.7 + i * 0.15 },
  }),
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroMark} mono`}>FEELING DARK · STAND #5</div>

      <motion.div
        className={styles.heroCopy}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="eyebrow" style={{ marginBottom: 24 }} variants={lineVariants}>
          — Chocolate con mood
        </motion.div>
        <motion.h1 className={styles.h1} variants={lineVariants}>
          Elige<br />tu <em>mood.</em><br />Pruébalo.
        </motion.h1>
        <motion.p className={styles.heroSub} variants={lineVariants}>
          Chocovibe es chocolate con intención. Cada barra está pensada para acompañarte según cómo te quieras sentir — en calma, con energía o concentrado. Entra, elige tu mood y déjate llevar por el cacao.
        </motion.p>
        <motion.div className={styles.heroActions} variants={lineVariants}>
          <a href="#moods" className="btn-primary">Encuentra tu vibe →</a>
          <a href="#about" className="btn-ghost">Nuestra historia</a>
        </motion.div>
      </motion.div>

      <motion.div className={styles.heroVisual} variants={visualVariants} initial="hidden" animate="visible">
        <div className={styles.blob} />
        <img
          className={styles.heroMascot}
          src="/assets/mascot-boots-alt.jpeg"
          alt="Chocovibe mascot"
        />
        {[
          { label: 'Aura · Chill', color: 'var(--aura)', cls: styles.tag1 },
          { label: 'Boost · Energía', color: 'var(--boost)', cls: styles.tag2 },
          { label: 'Focus · Flow', color: 'var(--focus)', cls: styles.tag3 },
        ].map((tag, i) => (
          <motion.div
            key={tag.label}
            className={`${styles.floatingTag} ${tag.cls}`}
            custom={i}
            variants={tagVariants}
            initial="hidden"
            animate="visible"
          >
            <span className={styles.dotC} style={{ background: tag.color }} />
            {tag.label}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
