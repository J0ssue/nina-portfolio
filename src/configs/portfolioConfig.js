import beach from "../assets/images/beach.jpg";
import nina from "../assets/images/nina.jpg";
import portrait from "../assets/images/portrait.jpg";

const portraits = [portrait, portrait, portrait];
const couples = [nina, nina, nina, nina, nina, nina];
const street = [beach, beach, beach];

const portfolio = {
  title: "portfolio",
  buttonText: "view",
  projects: [
    {
      title: "portraits",
      cover: portraits[0],
      gallery: portraits,
      path: "/portfolio/portraits",
    },
    {
      title: "couples",
      cover: couples[0],
      gallery: couples,
      path: "/portfolio/couples",
    },
    {
      title: "street",
      cover: street[0],
      gallery: street,
      path: "/portfolio/street",
    },
  ],
};

export default portfolio;
