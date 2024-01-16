import ppt_img_1 from "../Images/ppt_img_1.png";
import ppt_img_2 from "../Images/ppt_img_2.png";
import ppt_img_3 from "../Images/ppt_img_3.png";
import ppt_img_4 from "../Images/ppt_img_4.png";
import House_1 from "../Images/house_img_1.png"
import House_2 from "../Images/house_img_2.png"
import House_3 from "../Images/house_img_3.png"

export const navInfo = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },

  {
    id: 2,
    name: "About Us",
    path: "/about",
  },

  {
    id: 3,
    name: "Properties",
    path: "/properties",
  },

  {
    id: 4,
    name: "Services",
    path: "/service",
  },
];

export const propertyData = [
  {
    id: 1,
    name: "Find Your Dream Home",
    img_url: ppt_img_1,
  },

  {
    id: 2,
    name: "Unlock Property Value",
    img_url: ppt_img_2,
  },

  {
    id: 3,
    name: "Effortless Property Management",
    img_url: ppt_img_3,
  },

  {
    id: 4,
    name: "Smart Investment, Informed Decisions",
    img_url: ppt_img_4,
  },
];


export const buildingData =[
  {
    id:1,
    title:"Seaside Serenity Villa",
    desc:"A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood....",
    img_url: House_1,
    bedroom:"4-Bedroom",
    bathroom:"3-Bathroom",
    price:"$550,000"
  },


  {
    id:2,
    title:"Metropolitan Haven",
    desc:"A chic and fully-furnished 2-bedroom apartment with panoramic city views....",
    img_url:House_2,
    bedroom:"2-Bedroom",
    bathroom:"2-Bathroom",
    price:"$450,000"
  },

  {
    id:3,
    title:"Rustic Retreat Cottage",
    desc:"An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community....",
    img_url:House_3,
    bedroom:"3-Bedroom",
    bathroom:"3-Bathroom",
    price:"$650,000"
  },
]
