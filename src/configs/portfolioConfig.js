// const images  = require.context("../assets/images/portfolio/beach")
import brand2 from "../assets/images/portfolio/beach/IMG_8238.jpg";
import brand3 from "../assets/images/portfolio/beach/IMG_8239.jpg";
import brand4 from "../assets/images/portfolio/beach/IMG_8241.jpg";
import brand5 from "../assets/images/portfolio/beach/IMG_8242.jpg";
import brand6 from "../assets/images/portfolio/street/IMG_7567.jpg";
import brand7 from "../assets/images/portfolio/beach/IMG_7565-3.jpg";
import brand8 from "../assets/images/portfolio/beach/IMG_7616.jpg";

import street0 from "../assets/images/portfolio/street/IMG_7002.jpg";
import street1 from "../assets/images/portfolio/street/IMG_6969.jpg";
import street2 from "../assets/images/portfolio/street/IMG_6995.jpg";
import street3 from "../assets/images/portfolio/street/IMG_7533.jpg";
import street5 from "../assets/images/portfolio/street/IMG_8140.jpg";
import street6 from "../assets/images/portfolio/street/IMG_8184.jpg";
import street7 from "../assets/images/portfolio/street/IMG_8193.jpg";
import street8 from "../assets/images/portfolio/street/IMG_8235.jpg";
import street10 from "../assets/images/portfolio/street/IMG_8270.jpg";

import couples1 from "../assets/images/portfolio/couples/IMG_8315-2.jpg";
import couples2 from "../assets/images/portfolio/couples/IMG_8325.jpg";
import couples3 from "../assets/images/portfolio/couples/IMG_8373.jpg";
import couples4 from "../assets/images/portfolio/couples/IMG_8399.jpg";
import couples5 from "../assets/images/portfolio/couples/IMG_8414.jpg";

import portrait1 from "../assets/images/portfolio/portraits/IMG_2430-2.jpg";
import portrait2 from "../assets/images/portfolio/portraits/IMG_2471.jpg";
import portrait3 from "../assets/images/portfolio/portraits/IMG_2492-33.jpg";
import portrait4 from "../assets/images/portfolio/portraits/IMG_2831-2.jpg";
import portrait5 from "../assets/images/portfolio/portraits/IMG_2865.jpg";
import portrait6 from "../assets/images/portfolio/portraits/IMG_2918-2.jpg";
import portrait7 from "../assets/images/portfolio/portraits/IMG_3003-2.jpg";
import portrait8 from "../assets/images/portfolio/portraits/IMG_3048-2.jpg";
import portrait9 from "../assets/images/portfolio/portraits/IMG_4232.jpg";
import portrait10 from "../assets/images/portfolio/portraits/IMG_4241.jpg";
import portrait11 from "../assets/images/portfolio/portraits/IMG_4331.jpg";
import portrait12 from "../assets/images/portfolio/portraits/IMG_7250.jpg";
import portrait13 from "../assets/images/portfolio/portraits/IMG_7269.jpg";
import portrait14 from "../assets/images/portfolio/portraits/IMG_7295.jpg";
import portrait15 from "../assets/images/portfolio/portraits/IMG_7753.jpg";
import portrait16 from "../assets/images/portfolio/portraits/IMG_7795.jpg";
import portrait17 from "../assets/images/portfolio/portraits/IMG_7832.jpg";
import portrait18 from "../assets/images/portfolio/portraits/IMG_8484.jpg";
import portrait20 from "../assets/images/portfolio/portraits/IMG_8509-2.jpg";
import portrait21 from "../assets/images/portfolio/portraits/IMG_8534.jpg";
import portrait22 from "../assets/images/portfolio/portraits/IMG_8545.jpg";
import portrait23 from "../assets/images/portfolio/portraits/IMG_8775-2.jpg";
import portrait24 from "../assets/images/portfolio/portraits/IMG_8852.jpg";
import portrait25 from "../assets/images/portfolio/portraits/g2.jpg";

const brand = [
  brand7,
  brand6,
  brand8,
  street3,
];

const portraits = [
  portrait1,
  portrait2,
  portrait3,
  portrait4,
  portrait5,
  portrait6,
  portrait7,
  portrait8,
  portrait9,
  portrait10,
  portrait11,
  portrait12,
  portrait13,
  portrait14,
  portrait15,
  portrait16,
  portrait17,
  portrait18,
  portrait20,
  portrait21,
  portrait22,
  portrait23,
  portrait24,
  portrait25,
];
const couples = [couples5,couples1, couples2, couples3, couples4];
const street = [
  street0,
  street1,
  street2,
  street5,
  street6,
  street7,
  street8,
  street10,
brand2,
brand4,
];

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
      cover: street[8],
      gallery: street,
      path: "/portfolio/street",
    },
    {
      title: "brand",
      cover: brand[2],
      gallery: brand,
      path: "/portfolio/brand",
    },
  ],
};

export default portfolio;
