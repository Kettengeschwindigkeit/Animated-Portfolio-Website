import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./services.scss";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      animate={isInView && "animate"}
      >
      <motion.div className="text-container" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="title-container" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="list-container" variants={variants}>
        <motion.div className="box" whileHover={{ color: "black", backgroundColor: "lightgray" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minus beatae, saepe, sit voluptate doloribus aspernatur expedita nostrum incidunt.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ color: "black", backgroundColor: "lightgray" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minus beatae, saepe, sit voluptate doloribus aspernatur expedita nostrum incidunt.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ color: "black", backgroundColor: "lightgray" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minus beatae, saepe, sit voluptate doloribus aspernatur expedita nostrum incidunt.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ color: "black", backgroundColor: "lightgray" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minus beatae, saepe, sit voluptate doloribus aspernatur expedita nostrum incidunt.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
