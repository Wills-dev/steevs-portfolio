import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  linkedIn,
  x,
  email,
  github,
  nextjs,
  buyershub,
  buzzconnect,
  emilist,
  marketplace,
  pearlAsset,
  qlh,
  smartAI,
  tofapay,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "articles",
    title: "Articles",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next  JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Traders of Africa",
    iconBg: "#3c3350",
    date: "August 2022 - Present",
    points: [
      "Worked with design, product management and backend teams to create a responsive Marketplace and E-commerce web applications.",
      "Contributed to projects within Scrum project management environments.",
      "Completed full redesigns of existing websites to improve navigation, enhance visuals and strengthen search engine rankings.",
      "Enhanced user experience by optimizing web applications for maximum speed and scalability.",
      "Worked closely with UX/UI designers to translate their designs into functional web applications.      ",
      "Developed user-friendly web forms with validation and error handling.      ",
    ],
  },
  {
    title: "React Developer",
    company_name: "KellyX Global",
    iconBg: "#3c3350",
    date: "May 2021 - August 2022",
    points: [
      "Collaborated with stakeholders during all phases of project lifecycle from concept through deployment.     ",
      "Collaborated with in-house web designers to create sleek and innovative UI design.      ",
      "Refactored poorly written codes for clients, increasing the overall quality.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Optimized web applications for speed, scalability and security.      ",
      "Utilized HTML, CSS, and JavaScript to create visually appealing and responsive web pages that met client requirements.      ",
      "Collaborated with back-end developers to improve website functionality and integrate new features.      ",
      "Teamed on user-centric design strategy in translation of UX and business requirements into coded solutions.      ",
    ],
  },
  {
    title: "Frontend Developer | Program Lead",
    company_name: "Agrohive",
    iconBg: "#3c3350",
    date: "Nov 2019 - April 2021",
    points: [
      "Evaluated the structure and design of web pages.",
      "Debug errors, troubleshoot issues, and perform routine performance optimization.",
      "Attract and secure partnerships for third party programs.",
      "Contributed innovative ideas during brainstorming sessions, driving project success through creative problem solving.      ",
      "Tested programs and databases to identify issues and make necessary modifications.      ",
      "Streamlined code for faster load times and improved website performance.      ",
      "Continuously updated skills through training courses, workshops, and self-study—staying current on industry trends and emerging technologies.      ",
    ],
  },
];

const projects = [
  {
    name: "Buyer's Hub",
    description:
      "Traders of Africa company's web base and e-commerce platform specializing in bulk agricultural produce purchases for aggregators",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: buyershub,
    source_code_link: "https://www.tradersofafrica.com/",
  },
  {
    name: "Emilist",
    description:
      "An online platform where artisans and handymen can find projects, receive close monitoring until project completion, and then get paid.  Still on development.",
    tags: [
      {
        name: "Next",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
    ],
    image: emilist,
    source_code_link: "https://emilist-webapp.vercel.app/",
  },
  {
    name: "TOFA PAY",
    description:
      "A web-based platform that allows  convenient  and efficient solution to tracking payment, list and schedules.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Context API",
        color: "pink-text-gradient",
      },
    ],
    image: tofapay,
    source_code_link: "https://tofapay.tradersofafrica.com/",
  },
  {
    name: "TOFA Marketplace",
    description:
      "An online market place seamlessly facilitating trade between buyers and sellers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
    ],
    image: marketplace,
    source_code_link: "https://feat-victor.d322fqp4xeh83s.amplifyapp.com/",
  },
  {
    name: "Quick Logistic Hub",
    description:
      "A digital logistics-as-a-service platform that onboards various logistics providers, offering users the option to choose from different providers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: qlh,
    source_code_link: "https://www.quicklogisticshub.com/",
  },
  {
    name: "Smart AI",
    description:
      "An OpenAI Article Summarizer Crafting Clear and Concise Summaries from Lengthy Articles.",
    tags: [
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "openAI",
        color: "green-text-gradient",
      },
      {
        name: "Rapid API",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: smartAI,
    source_code_link: "https://smart-brief-ai.netlify.app/",
  },
  {
    name: "Pearl Assets",
    description:
      "A  fine quality gemstone traders showcasing and selling the best of gemstones all over the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: pearlAsset,
    source_code_link: "https://webbsgem.netlify.app/",
  },
  {
    name: "BUZZCONNECT",
    description:
      "A real time messaging app designed to connect everyone registered. Right now it's not responsive for mobile users",
    tags: [
      {
        name: "Zustand",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: buzzconnect,
    source_code_link: "https://buzzconnect.onrender.com/login",
  },
];

const socialHandles = [
  {
    url: "/",
    icon: email,
  },
  {
    url: "/",
    icon: linkedIn,
  },
  {
    url: "/",
    icon: github,
  },
  {
    url: "/",
    icon: x,
  },
];

const articles = [
  {
    url: "/",
    title: "Kubernates",
  },
  {
    url: "/",
    title: "How to assemble",
  },
  {
    url: "/",
    title: "AWS  for beginners",
  },
  {
    url: "/",
    title: "Azure",
  },
];

export {
  services,
  technologies,
  experiences,
  projects,
  socialHandles,
  articles,
};
