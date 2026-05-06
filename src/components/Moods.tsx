import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Moods.module.css'

const MOODS = [
  {
    num: '01 / CHILL',
    name: 'Aura',
    pillLabel: 'Modo Calma',
    pillColor: 'var(--aura)',
    desc: 'Tu momento de paz en medio del caos. Un chocolate suave que baja el ruido mental, relaja tu vibe y te envuelve en una sensación chill.',
    gradient: 'linear-gradient(135deg, #B7C2E0 0%, #9DAACD 100%)',
    ingredients: 'CACAO · LECHE · AZÚCAR · VAINILLA · MANZANILLA · LAVANDA',
    image: '/uploads/product-4.jpeg',
  },
  {
    num: '02 / ENERGÍA',
    name: 'Boost',
    pillLabel: 'Modo Activo',
    pillColor: 'var(--boost)',
    desc: 'Ese impulso instantáneo cuando andas en modo "sin batería". Un chocolate intenso que te levanta el mood, te activa y te pone en marcha sin complicaciones.',
    gradient: 'linear-gradient(135deg, #D86A3C 0%, #B8552E 100%)',
    ingredients: 'CACAO INTENSO · AZÚCAR · LECHE · VAINILLA · CAFEÍNA NATURAL',
    image: '/uploads/product-2.jpeg',
  },
  {
    num: '03 / FLOW',
    name: 'Focus',
    pillLabel: 'Modo Claro',
    pillColor: 'var(--focus)',
    desc: 'Tu modo "no molestar" en versión chocolate. Te ayuda a centrarte, ordenar ideas y entrar en flow sin distracciones.',
    gradient: 'linear-gradient(135deg, #6B7A52 0%, #4F5C3D 100%)',
    ingredients: 'CACAO OSCURO · AZÚCAR · LECHE · VAINILLA · EXTRACTO DE MATCHA',
    image: '/uploads/product-1.jpeg',
  },
]

export default function Moods() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className={styles.moods} id="moods" ref={ref}>
      <div className={styles.moodsHead}>
        <div>
          <div className="eyebrow" style={{ color: 'rgba(239,229,221,0.6)' }}>— Nuestros productos</div>
          <motion.h2
            className={styles.h2}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Tres barras.<br />Tres <em>vibes.</em>
          </motion.h2>
        </div>
        <motion.p
          className={styles.headP}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          Cada chocolate tiene una personalidad propia — pensada para ayudarte a relajarte, activarte o concentrarte de forma práctica y deliciosa.
        </motion.p>
      </div>

      <div className={styles.grid}>
        {MOODS.map((mood, i) => (
          <motion.article
            key={mood.name}
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.15 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <div className={styles.moodNum}>{mood.num}</div>
            <h3 className={styles.moodName}>{mood.name}</h3>
            <span className={styles.pill}>
              <span className={styles.swatch} style={{ background: mood.pillColor }} />
              {mood.pillLabel}
            </span>
            <p className={styles.moodDesc}>{mood.desc}</p>
            <div
              className={styles.imageSlot}
              style={{ background: mood.gradient }}
            >
              <img src={mood.image} alt={`Producto ${mood.name}`} className={styles.moodImg} />
            </div>
            <div className={styles.ingredients}>{mood.ingredients}</div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
