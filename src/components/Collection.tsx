import { useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import styles from './Collection.module.css'

const GALLERY = [
  { id: 'hero', src: '/uploads/product-2.jpeg', cap: '01 · Principal', span: 'col1' },
  { id: 'g2', src: '/uploads/product-4.jpeg', cap: '02 · Detalle', span: '' },
  { id: 'g3', src: '/uploads/product-5.jpeg', cap: '03 · Lifestyle', span: '' },
  { id: 'g4', src: '/uploads/product-3.jpeg', cap: '04 · Textura', span: '' },
  { id: 'g5', src: '/uploads/product-1.jpeg', cap: '05 · Momento', span: '' },
]

function GalleryTile({
  item,
  index,
  inView,
}: {
  item: typeof GALLERY[number]
  index: number
  inView: boolean
}) {
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 })
  const rotateY = useTransform(springX, [0, 1], [-5, 5])
  const rotateX = useTransform(springY, [0, 1], [4, -4])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - r.left) / r.width)
    mouseY.set((e.clientY - r.top) / r.height)
    e.currentTarget.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
    e.currentTarget.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(0.5)
    mouseY.set(0.5)
    e.currentTarget.style.setProperty('--mx', '50%')
    e.currentTarget.style.setProperty('--my', '50%')
  }

  return (
    <motion.div
      className={`${styles.colImg} ${item.span ? styles[item.span] : ''}`}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 + index * 0.09 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={item.src} alt={item.cap} className={styles.colImgEl} />
      {/* spotlight overlay */}
      <div className={styles.tileSpot} />
      {/* warm glow overlay */}
      <div className={styles.tileGlow} />
      <span className={styles.cap}>{item.cap}</span>
    </motion.div>
  )
}

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
          <GalleryTile key={item.id} item={item} index={i} inView={inView} />
        ))}
      </div>
    </section>
  )
}
