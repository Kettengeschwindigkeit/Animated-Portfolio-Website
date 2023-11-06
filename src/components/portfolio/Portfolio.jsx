import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "ReactJS",
    img: "https://images01.nicepagecdn.com/page/48/71/ru/dizayn-sayta-48719.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia omnis doloremque quia magnam fugit eius laborum molestiae voluptas id voluptate."
  },
  {
    id: 2,
    title: "NextJS",
    img: "https://images01.nicepagecdn.com/page/11/88/ru/dizayn-sayta-118801.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia omnis doloremque quia magnam fugit eius laborum molestiae voluptas id voluptate."
  },
  {
    id: 3,
    title: "Vanilla JS",
    img: "https://images01.nicepagecdn.com/page/11/06/ru/dizayn-sayta-110615.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia omnis doloremque quia magnam fugit eius laborum molestiae voluptas id voluptate."
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images01.nicepagecdn.com/page/10/88/ru/dizayn-sayta-108822.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia omnis doloremque quia magnam fugit eius laborum molestiae voluptas id voluptate."
  }
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
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
