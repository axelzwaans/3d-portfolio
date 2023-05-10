import {
  career,
  yacht,
  mfk,
  sail,
  paws,
  python,
  postgres,
  reactbootstrap,
  django,
  flask,
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  vanlifeblog,
  houseparty,
  homerunner,
  creator
} from "../assets";

export const navLinks = [
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
  },
];

const services = [
  {
    title: "Advanced Front-End Development with React",
    icon: web,
  },
  {
    title: "Full stack development with backend frameworks",
    icon: mobile,
  },
  {
    title: "Attentive to detail in UI/UX design",
    icon: backend,
  },
  {
    title: "Collaborative and adaptable in a team environment",
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
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React Bootstrap",
    icon: reactbootstrap,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Flask",
    icon: flask,
  },
];

const experiences = [
  {
    title: "Career development",
    company_name: "Scotland",
    icon: career,
    iconBg: "#E6DEDD",
    date: "September 2022 - Current",
    points: [
      "Full-Stack Software Development Course with Code Institute.",
      "Software Engineering Course with ProgrammingExpert.io",
      "Enhancing my software development skills through learning and creating projects.",
    ],
  },
  {
    title: "Co-Founder",
    company_name: "Marcassie Farm Kitchen",
    icon: mfk,
    iconBg: "#fff",
    date: "January 2021 - September 2022",
    points: [
      "Designing and maintaining an online store using Shopify and third-party applications.",
      "Customer service.",
      "Accounting.",
      "Ingredients sourcing.",
      "Cooking/packaging/distribution.",
    ],
  },
  {
    title: "Chase Boat Captain",
    company_name: "Motoryacht 'Alicia'",
    icon: yacht,
    iconBg: "#E6DEDD",
    date: "March 2018 - October 2020",
    points: [
      "Safe navigation & operation of the vessel.",
      "Accounting.",
      "Shipyard & project management.",
      "Engine maintenance & repairs.",
      "Personnel management.",
    ],
  },
  {
    title: "First Mate",
    company_name: "Sailing Yacht 'CHE'",
    icon: sail,
    iconBg: "#383E56",
    date: "July 2014 - October 2017",
    points: [
      "Keeping solo navigational watch.",
      "Relieving the captain's duties when absent.",
      "Operating and maintaining the vessel's systems and hardware.",
      "Sailing & rig work.",
      "Customer service.",
    ],
  },
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

const projects = [
  {
    name: "Paws",
    description:
      "A photo-sharing social networking service on which users can interact with each other by following other users and commenting on or liking their posts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: paws,
    source_code_link: "https://github.com/axelzwaans/paws",
  },
  {
    name: "Vanlife Blog",
    description:
      "A web app where you can blog about your vanlife adventures. Users can create an account, write blog posts, and comment on other users' posts.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "orange-text-gradient",
      },
    ],
    image: vanlifeblog,
    source_code_link: "https://github.com/axelzwaans/vanlife-blog",
  },
  {
    name: "House Party",
    description:
      "A collaborative music playing app which integrates with Spotify. Users can create a room, join a room, and vote to skip a song.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
      {
        name: "material-ui",
        color: "orange-text-gradient",
      },
    ],
    image: houseparty,
    source_code_link: "https://github.com/axelzwaans/house-party",
  },
  {
    name: "Home Runner",
    description:
      "A mini text-based 'choose your own' adventure game. The goal of the game is to reach the destination by completing challenges in the way.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: homerunner,
    source_code_link: "https://github.com/axelzwaans/home-runner",
  },
];

export { services, technologies, experiences, testimonials, projects };
