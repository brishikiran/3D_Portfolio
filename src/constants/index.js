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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  jobit,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Intro",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "DevOps",
    icon: backend,
  },
  {
    title: "Project Management",
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [

  {
    title: "Full stack Developer",
    company_name: "Option Matrix Infotech",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - present",
    points: [
      "Engineered a user-centric UI by leveraging Angular 12 and Kendo UI for Angular, showcasing expertise in crafting components, services, pipes, and directives through Angular 12 CLI",
      "Established and optimized RESTful APIs using .NET Core, ensuring a robust and secure communication channel for seamless integration of Microservices with external systems",
      "Orchestrated implementation of a high-performance SQL Server database, utilizing a combination of LINQ queries and Entity Framework for efficient data filtration from complex stored procedures, views, and entities. Resulted in a 25% reduction in data retrieval time",
      "Spearheaded the CI/CD pipeline setup using Jenkins and Azure DevOps, automating build, testing, and deployment processes. Achieved accelerated delivery and maintained elevated code quality standards.",
      "Revamped application performance by implementing caching strategies, yielding a 15% improvement. Employed Angular Guard and Lazy-Loading techniques to optimize data retrieval, ultimately enhancing the overall user experience.",
      "Employed React prowess to develop dynamic and responsive user interfaces, incorporating React Hooks, React Router, React Bootstrap, and React ChartJS. Resulted in a notable 25% enhancement in overall user engagement.",
      "Applied React Higher Order Components (HOC) and Flux/Redux architecture for Single Page Application (SPA) development, ensuring a seamless and efficient user experience.",
      "Architected a secure and scalable MongoDB database infrastructure for efficient management of sensitive health data.",
      "Leveraged AWS services, including EC2, S3, and Lambda, to deploy a highly available and fault-tolerant infrastructure, achieving a commendable 30% reduction in operational costs.",
      "Chartered implementation of real-time collaboration features using WebSockets, substantially improving communication efficiency among healthcare professionals and resulting in a 20% increase in collaboration effectiveness."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


export { services, technologies, experiences, testimonials };
