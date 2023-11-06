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
  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <div className="progress-bar"></div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id}  />
      ))}
    </div>
  );
};

export default Portfolio;
