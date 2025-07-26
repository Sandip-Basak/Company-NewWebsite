/* eslint-disable no-unused-vars */
import {motion} from 'motion/react'
import {memo} from 'react'

const Card = memo(({text, style, containerRef}) => {
  return (
    <motion.div className="absolute px-1 py-4 text-xl text-center rounded-full
    ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
    style={style}
    whileHover={{scale: 1.05}}
    drag
    dragElastic={1}
    dragConstraints={containerRef}
    >
        {text}
    </motion.div>
  )
})

export default Card