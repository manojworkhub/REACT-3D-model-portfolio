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
  carrent,
  jobit,
  tripguide,
  threejs, material,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ui / ux Designer",
    icon: web,
  },
  {
    title: "Frontend Developer",
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
    name: "React JS",
    icon: reactjs,
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
    name: "material UI",
    icon: material,
  },
];

const experiences = [
  {
    title: "React",
    // company_name: "Starbucks",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    points: [
      "Proficient in creating reusable components and using JSX syntax.",
      "Experienced with managing state using hooks and passing data via props.",
      "Skilled in handling user interactions, form state, and validations.",
      "Capable of fetching data from APIs and implementing conditional rendering.",
      "Optimizes performance with techniques like memoization and code splitting.",
      "Strong problem-solving skills and effective collaboration with cross-functional teams.",
    ],
  },
  {
    title: "CSS Framework",
    // company_name: "Tesla",
    icon: css,
    iconBg: "#E6DEDD",
    date: "Dec 2023",
    points: [
      "Skilled in creating responsive designs using Tailwind’s utility classes and Bootstrap’s grid system.",
      "Capable of customizing Tailwind and Bootstrap to fit specific project needs, ensuring unique and brand-consistent designs.",

      "Optimizes CSS for performance by purging unused styles in Tailwind and minimizing Bootstrap’s file size.",
      "Implements effective visual feedback and interactive components using both Tailwind and Bootstrap.",

      "Strong attention to detail, effective collaboration with cross-functional teams, and clear communication.",
    ],
  },
  {
    title: "Javascript",
    // company_name: "Shopify",
    icon: javascript,
    iconBg: "#383E56",
    date: "Nov 2023",
    points: [
      "Proficient in JavaScript syntax, DOM manipulation, and event handling.",
      "Skilled in implementing responsive design and dynamic content loading using JavaScript and APIs.",
      "Writes efficient and optimized JavaScript code, understands asynchronous programming (promises, async/await).",
      // "Enhances user experience with smooth animations, transitions, and immediate feedback mechanisms.",
      "Ensures all interactive elements are accessible via keyboard and screen readers using ARIA attributes.",
      "Experienced in using browser developer tools for debugging and writing unit tests with frameworks like Jest.",
    ],
  },
  {
    title: "HTML & CSS",
    // company_name: "Meta",
    icon: html,
    iconBg: "#E6DEDD",
    date: "oct 2023 ",
    points: [
      "Learn and use semantic HTML tags to structure your web pages effectively.",
      "Implement media queries to ensure your website looks good on all device sizes.",
      "Use semantic HTML tags to improve accessibility and SEO.",
      "Enhance accessibility of interactive elements with ARIA roles and properties.",
      "Use browser developer tools for debugging and testing.",
      "Follow blogs, tutorials, and online courses to stay current with UX trends.",
      "Focus on spacing, alignment, and consistency in design.",
      "Actively seek and incorporate feedback to improve your designs.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
