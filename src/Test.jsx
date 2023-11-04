import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: { opacity: 1, x: 700, transition: { type: "spring", stiffness: 200, damping: 15 } },
    hidden: { opacity: 0 }
  };

  const variants1 = {
    // visible: { opacity: 1, x: 100, transition: { staggerChildren: 1 } },
    visible: (i) => (
      { opacity: 1, x: 100, transition: { delay: i * 0.3 } }
    ),
    hidden: { opacity: 0 }
  };

  const items = ["item-1", "item-2", "item-3", "item-4"];

  return (
    <div className="course">
      <motion.div
        className="box"
        // initial="hidden"
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1, x: 200, y: 500 }}
        // animate="visible"
        animate={open ? "visible" : "hidden"}
        // transition={{ duration: 2 }}
        // whileHover={{ opacity: 1, scale: 2 }}
        // whileTap={{ opacity: 1, scale: 2 }}
        // whileInView={{ opacity: 1, scale: 2 }}
        // drag
        variants={variants}
      >
      </motion.div>
      <button onClick={() => setOpen(prev => !prev)}>Click</button>
      <motion.ul initial="hidden" animate="visible" variants={variants1}>
        {items.map((item, i) => (
          <motion.li key={item} variants={variants1} custom={i}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  )
};

export default Test;
