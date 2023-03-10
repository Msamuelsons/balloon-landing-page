import './styles.css'
import Balloo1 from '../../assets/img/Balloon1.png'
import Balloo2 from '../../assets/img/Balloon2.png'
import { motion } from 'framer-motion'

export default function Body() {
  return (
    <div className="container">
      <section className="content__left">
        <motion.img
          src={Balloo1}
          alt="Balão de passeio grande"
          animate={{ y: [-100, 0, 0], x: 100, scale: 1.3 }}
          transition={{ ease: 'easeOut', duration: 6 }}
        />
      </section>

      <section className="content__right">
        <motion.img
          src={Balloo2}
          alt="Balão de passeio grande"
          initial={{ x: 140 }}
          animate={{ y: [0, 40, 70], x: 360, scale: 1.3 }}
          transition={{ ease: 'easeOut', duration: 6 }}
        />
      </section>
    </div>
  )
}
