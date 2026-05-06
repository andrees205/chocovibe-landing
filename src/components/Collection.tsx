import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Collection.module.css'

const GALLERY = [
  { id: 'hero', src: '/uploads/product-2.jpeg', cap: '01 · Principal', span: 'col1' },
  { id: 'g2', src: '/uploads/product-4.jpeg', cap: '02 · Detalle', span: '' },
  { id: 'g3', src: '/uploads/product-5.jpeg', cap: '03 · Lifestyle', span: '' },
  { id: 'g4', src: '/uploads/product-3.jpeg', cap: '04 · Textura', span: '' },
  { id: 'g5', src: '/uploads/product-1.jpeg', cap: '05 · Momento', span: '' },
]

export default function Collection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className={styles.collection} id="collection" ref={ref}>
      <div className={styles.head}>
        <div>
          <div className="eyebrow">— Nuestra galería</div>
          <motion.h2
            className={styles.h2}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Galería de productos.
          </motion.h2>
        </div>
        <motion.p
          className={styles.headP}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          Cacao real, intención visible. Un vistazo a las barras, el packaging y los momentos que hacen a Chocovibe.
        </motion.p>
      </div>

      <div className={styles.grid}>
        {GALLERY.map((item, i) => (
          <motion.div
            key={item.id}
            className={`${styles.colImg} ${item.span ? styles[item.span] : ''}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.08 }}
          >
            <img src={item.src} alt={item.cap} className={styles.colImgEl} />
            <span className={styles.cap}>{item.cap}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
