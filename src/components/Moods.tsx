import { useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import styles from './Moods.module.css'

const MOODS = [
  {
    num: '01 / CHILL',
    name: 'Aura',
    pillLabel: 'Modo Calma',
    pillColor: '#B7C2E0',
    pillColorVar: 'var(--aura)',
    desc: 'Tu momento de paz en medio del caos. Un chocolate suave que baja el ruido mental, relaja tu vibe y te envuelve en una sensación chill.',
    gradient: 'linear-gradient(135deg, #B7C2E0 0%, #9DAACD 100%)',
    ingredients: 'CACAO · LECHE · AZÚCAR · VAINILLA · MANZANILLA · LAVANDA',
    image: '/uploads/product-4.jpeg',
  },
  {
    num: '02 / ENERGÍA',
    name: 'Boost',
    pillLabel: 'Modo Activo',
    pillColor: '#D86A3C',
    pillColorVar: 'var(--boost)',
    desc: 'Ese impulso instantáneo cuando andas en modo "sin batería". Un chocolate intenso que te levanta el mood, te activa y te pone en marcha.',
    gradient: 'linear-gradient(135deg, #D86A3C 0%, #B8552E 100%)',
    ingredients: 'CACAO INTENSO · AZÚCAR · LECHE · VAINILLA · CAFEÍNA NATURAL',
    image: '/uploads/product-2.jpeg',
  },
  {
    num: '03 / FLOW',
    name: 'Focus',
    pillLabel: 'Modo Claro',
    pillColor: '#6B7A52',
    pillColorVar: 'var(--focus)',
    desc: 'Tu modo "no molestar" en versión chocolate. Te ayuda a centrarte, ordenar ideas y entrar en flow sin distracciones.',
    gradient: 'linear-gradient(135deg, #6B7A52 0%, #4F5C3D 100%)',
    ingredients: 'CACAO OSCURO · AZÚCAR · LECHE · VAINILLA · EXTRACTO DE MATCHA',
    image: '/uploads/product-1.jpeg',
  },
]

interface Mood {
  num: string; name: string; pillLabel: string; pillColor: string; pillColorVar: string;
  desc: string; gradient: string; ingredients: string; image: string;
}

function MoodCard({ mood, index, inView }: { mood: Mood; index: number; inView: boolean }) {
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 })
  const rotateY = useTransform(springX, [0, 1], [-7, 7])
  const rotateX = useTransform(springY, [0, 1], [5, -5])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const nx = (e.clientX - r.left) / r.width
    const ny = (e.clientY - r.top) / r.height
    mouseX.set(nx)
    mouseY.set(ny)
    e.currentTarget.style.setProperty('--mx', `${nx * 100}%`)
    e.currentTarget.style.setProperty('--my', `${ny * 100}%`)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    mouseX.set(0.5)
    mouseY.set(0.5)
    e.currentTarget.style.setProperty('--mx', '50%')
    e.currentTarget.style.setProperty('--my', '50%')
  }

  return (
    <motion.article
      className={styles.card}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1100,
        '--glow': mood.pillColor,
      } as React.CSSProperties}
      initial={{ opacity: 0, y: 70 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 + index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* spotlight layer */}
      <div className={styles.spotlight} />
      {/* glow border */}
      <div className={styles.glowBorder} />

      <div className={styles.cardInner}>
        <div className={styles.moodNum}>{mood.num}</div>
        <h3 className={styles.moodName}>{mood.name}</h3>
        <span className={styles.pill}>
          <span className={styles.swatch} style={{ background: mood.pillColorVar }} />
          {mood.pillLabel}
        </span>
        <p className={styles.moodDesc}>{mood.desc}</p>
        <div className={styles.imageSlot} style={{ background: mood.gradient }}>
          <img src={mood.image} alt={`Producto ${mood.name}`} className={styles.moodImg} />
          <div className={styles.imageGlow} />
        </div>
        <div className={styles.ingredients}>{mood.ingredients}</div>
      </div>
    </motion.article>
  )
}

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
          <MoodCard key={mood.name} mood={mood} index={i} inView={inView} />
        ))}
      </div>
    </section>
  )
}
