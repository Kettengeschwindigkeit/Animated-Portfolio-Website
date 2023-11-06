import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "ReactJS",
    img: "https://blog.depositphotos.com/ru/wp-content/uploads/2019/11/Active-Theory-v4.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia omnis doloremque quia magnam fugit eius laborum molestiae voluptas id voluptate."
  },
  {
    id: 2,
    title: "NextJS",
    img: "https://inbenefit.com/wp-content/uploads/2017/12/%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D1%8B%D0%B5-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D1%8B-%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2-%D0%B4%D0%BB%D1%8F-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0-%D0%B1%D0%BB%D0%BE%D0%B3%D0%B0-%D0%B8-ecommerce-03.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia omnis doloremque quia magnam fugit eius laborum molestiae voluptas id voluptate."
  },
  {
    id: 3,
    title: "Vanilla JS",
    img: "https://static.tildacdn.com/tild3566-3031-4338-b131-356131306138/8.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia omnis doloremque quia magnam fugit eius laborum molestiae voluptas id voluptate."
  },
  {
    id: 4,
    title: "ReactJS",
    img: "https://german-web.org/wp-content/uploads/2023/03/alpin.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia omnis doloremque quia magnam fugit eius laborum molestiae voluptas id voluptate."
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="image-container" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="text-container" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref, offset: ["end end", "start start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id}  />
      ))}
    </div>
  );
};

export default Portfolio;
