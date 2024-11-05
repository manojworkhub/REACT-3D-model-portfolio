import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  material,
  bootstrap,
  firebase,
  macincode,
  javi,
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
    name: "Tailwind ",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
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
  {
    name: "Firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company_name: "Macincode — Salem",
    icon: macincode,
    iconBg: "#383E56",
    date: "September 2024 – November 2024 (3 months)",
    points: [
      "Develop and maintain fully dynamic web applications using the MERN stack, ensuring responsiveness and optimal performance.",
      "Implement CRUD functionalities and dynamic features using Firebase as a database and REST APIs.",
      "Collaborate in a fast-paced environment, working closely with senior developers and project leads to manage front-end and back-end requirements.",
      "Utilize Express and Node.js for back-end development and integrate Firebase REST APIs for efficient data management.",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company_name: "Javi Technology — Salem",
    icon: javi,
    iconBg: "#383E56",
    date: "April 2024 – September 2024 (5 months)",
    points: [
      "Produced high-quality front-end designs, creating 4 screens per day and contributing to over 108 pages each month.",
      "Utilized HTML, CSS, JavaScript, and React to build responsive interfaces, enhancing the visual appeal and usability of web applications.",
      "Coordinated with design and development teams to ensure alignment with project requirements and timely completion of deliverables.",
    ],
  },
  // {
  //   title: "Javascript",
  //   // company_name: "Shopify",
  //   icon: javascript,
  //   iconBg: "#383E56",
  //   date: "Nov 2023",
  //   points: [
  //     "Proficient in JavaScript syntax, DOM manipulation, and event handling.",
  //     "Skilled in implementing responsive design and dynamic content loading using JavaScript and APIs.",
  //     "Writes efficient and optimized JavaScript code, understands asynchronous programming (promises, async/await).",
  //     // "Enhances user experience with smooth animations, transitions, and immediate feedback mechanisms.",
  //     "Ensures all interactive elements are accessible via keyboard and screen readers using ARIA attributes.",
  //     "Experienced in using browser developer tools for debugging and writing unit tests with frameworks like Jest.",
  //   ],
  // },
  // {
  //   title: "HTML & CSS",
  //   // company_name: "Meta",
  //   icon: html,
  //   iconBg: "#E6DEDD",
  //   date: "oct 2023 ",
  //   points: [
  //     "Learn and use semantic HTML tags to structure your web pages effectively.",
  //     "Implement media queries to ensure your website looks good on all device sizes.",
  //     "Use semantic HTML tags to improve accessibility and SEO.",
  //     "Enhance accessibility of interactive elements with ARIA roles and properties.",
  //     "Use browser developer tools for debugging and testing.",
  //     "Follow blogs, tutorials, and online courses to stay current with UX trends.",
  //     "Focus on spacing, alignment, and consistency in design.",
  //     "Actively seek and incorporate feedback to improve your designs.",
  //   ],
  // },
];

const projects = [
  {
    name: "CADCENTER",
    description:
      "This project highlights my ability to create visually appealing and responsive web designs tailored for educational purposes. The site features intuitive navigation, detailed course information, and engaging visuals to attract and retain potential students. My attention to detail and expertise in front-end development ensured a seamless user experience.",
    tags: [
      {
        name: "HTML ",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/vwqyjt8/Screenshot-10.png",
    source_code_link: "https://github.com/manojworkhub/CADCENTER",
    live_code_link: "https://manojworkhub.github.io/CADCENTER/",
  },
  {
    name: "Ubinsoft Replica webpage",
    description:
      "This project showcases my ability to design visually appealing, responsive web pages with a sleek, user-friendly interface. Despite being static, I implemented interactive elements to enhance user experience. The website highlights my strong front-end development skills and attention to detail.",
    tags: [
      {
        name: "HTML ",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
      {
        name: "Splide.js",
        color: "yellow-text-gradient",
      },
      {
        name: "Jquery",
        color: "red-text-gradient",
      },
    ],
    image: "https://i.ibb.co/YbNS6QJ/Screenshot-69.png",
    source_code_link: "https://github.com/manojworkhub/mobile-ubinsoft",
    live_code_link: "https://manojworkhub.github.io/mobile-ubinsoft/",
  },
  {
    name: "Static portfolio website",
    description:
      "Welcome to my personal portfolio website, where creativity meets professionalism. Here, you'll find a curated collection of my work, showcasing my skills, projects, and accomplishments. From innovative web designs to detailed project management, each piece reflects my dedication and passion for excellence. ",
    tags: [
      {
        name: "HTML ",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "yellow-text-gradient",
      },
      {
        name: "Jquery",
        color: "red-text-gradient",
      },
    ],
    image: "https://i.ibb.co/6ZByGSq/Screenshot-83.png",
    source_code_link: "https://github.com/manojworkhub/MR.work-hub",
    live_code_link: "https://manojworkhub.github.io/MR.work-hub/index.html",
  },
];
// const Profile = [
//   {
//     title: "React",
//     // company_name: "Starbucks",
//     icon: reactjs,
//     img: "#383E56",
//     date: "Feb 2024 - Present",
//     para: [
//       "Proficient in creating reusable components and using JSX syntax.",
//       "Experienced with managing state using hooks and passing data via props.",
//       "Skilled in handling user interactions, form state, and validations.",
//       "Capable of fetching data from APIs and implementing conditional rendering.",
//       "Optimizes performance with techniques like memoization and code splitting.",
//       "Strong problem-solving skills and effective collaboration with cross-functional teams.",
//     ],
//   },]

export { services, technologies, experiences, projects };
