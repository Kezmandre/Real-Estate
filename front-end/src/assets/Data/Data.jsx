import ppt_img_1 from "../Images/ppt_img_1.png";
import ppt_img_2 from "../Images/ppt_img_2.png";
import ppt_img_3 from "../Images/ppt_img_3.png";
import ppt_img_4 from "../Images/ppt_img_4.png";
import House_1 from "../Images/house_img_1.png";
import House_2 from "../Images/house_img_2.png";
import House_3 from "../Images/house_img_3.png";
import Profile_1 from "../Images/Profile_1.png";
import Profile_2 from "../Images/Profile_2.png";
import Profile_3 from "../Images/Profile_3.png";

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

export const buildingData = [
  {
    id: 1,
    title: "Seaside Serenity Villa",
    desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood....",
    img_url: House_1,
    bedroom: "4-Bedroom",
    bathroom: "3-Bathroom",
    price: "$550,000",
  },

  {
    id: 2,
    title: "Metropolitan Haven",
    desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views....",
    img_url: House_2,
    bedroom: "2-Bedroom",
    bathroom: "2-Bathroom",
    price: "$450,000",
  },

  {
    id: 3,
    title: "Rustic Retreat Cottage",
    desc: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community....",
    img_url: House_3,
    bedroom: "3-Bedroom",
    bathroom: "3-Bathroom",
    price: "$650,000",
  },
];

export const TestimonialData = [
  {
    id: 1,
    title: "Exceptional Service!",
    desc: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    img_path: Profile_1,
    name: "Wade Warren",
    country: "USA, California",
  },

  {
    id: 2,
    title: "Efficient and Reliable",
    desc: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    img_path: Profile_2,
    name: "Emelie Thomson",
    country: "USA, Florida",
  },

  {
    id: 3,
    title: "Trusted Advisors",
    desc: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    img_path: Profile_3,
    name: "John Mans",
    country: "USA, Nevada",
  },
];

export const faqData = [
  {
    id: 1,
    name: "How do I search for properties on Estatein?",
    desc: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },

  {
    id: 2,
    name: "What documents do I need to sell my property through Estatein?",
    desc: "Find out about the necessary documentation for listing your property with us.",
  },

  {
    id: 3,
    name: "How can I contact an Estatein agent?",
    desc: "Discover the different ways you can get in touch with our experienced agents.",
  },
];
