import { motion } from "framer-motion";
import "./services.scss";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="text-container">
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="title-container">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="list-container">
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
