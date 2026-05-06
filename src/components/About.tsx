import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import styles from './About.module.css'

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 60, damping: 15 })
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (inView) motionVal.set(value)
  }, [inView, value, motionVal])

  return <motion.div ref={ref} className={styles.statNum}>{display}</motion.div>
}

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className={styles.about} id="about" ref={ref}>
      <motion.div
        className={styles.aboutImg}
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="/assets/logo-drip.jpeg"
          alt="Chocovibe behind the scenes"
          className={styles.aboutImgInner}
        />
      </motion.div>

      <div>
        <motion.div
          className="eyebrow"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Nosotros — 2203·00000
        </motion.div>

        <motion.h2
          className={styles.h2}
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Chocolate que<br />te encuentra<br />donde estés.
        </motion.h2>

        <motion.p
          className={styles.p}
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Empezamos con una idea simple: ¿y si el chocolate no fuera solo un antojo, sino una herramienta para cómo te quieres sentir? Cada barra de Chocovibe está diseñada alrededor de un mood específico — hecha con cacao real, extractos naturales y una intención clara.
        </motion.p>

        <motion.p
          className={styles.p}
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Desde la calma de una tarde tranquila hasta el empujón de un día largo, nuestros chocolates están pensados para acompañarte. Sin relleno. Solo cacao, carácter y una vibe que encaja.
        </motion.p>

        <motion.div
          className={styles.stats}
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div>
            <AnimatedNumber value={3} />
            <div className={styles.statLabel}>Moods</div>
          </div>
          <div>
            <AnimatedNumber value={100} suffix="%" />
            <div className={styles.statLabel}>Cacao real</div>
          </div>
          <div>
            <AnimatedNumber value={0} />
            <div className={styles.statLabel}>Artificial</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
