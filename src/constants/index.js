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
    csharp,
    sql,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    portfolio,
    nsr,
    ssvisa,
    socialx,
    jobit,
    tripguide,
    ow_brand,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
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
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
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
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    {
      name: "c-sharp",
      icon: csharp,
    },
    {
      name: "sql",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "SocialX",
      description:
        "SocialX is react landing page, designed for selling mobile devices and services. It features a user-friendly Hero banner, Product Features, a Subscribe section, and FAQs, all enhanced with smooth, animated scrolling for a dynamic browsing experience.",
      tags: [
        {
          name: "reactjs",
          // color: "blue-text-gradient",
        },
        {
          name: "react_icons",
          // color: "green-text-gradient",
        },
      ],
      image: socialx,
      source_code_link: "https://github.com/shamsrza/socialx_react_app",
      live_page: "https://socialx-react.vercel.app/",
      owb: undefined,
    },
    {
      name: "My Portfolio",
      description:
        "The page is built using ReactJS, Three.js, and .gltf files, offering an immersive, interactive experience. Powered by Vite for lightning-fast performance and enhanced with Framer Motion for smooth animations, the page showcases cutting-edge web technologies to create dynamic, 3D visuals that bring projects to life in a sleek, modern interface.",
      tags: [
        {
          name: "reactjs",
          // color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          // color: "green-text-gradient",
        },
        {
          name: "threeJS",
          // color: "green-text-gradient",
        },
        // {
        //   name: "vite",
        // },
        {
          name: "3D_objects",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/shamsrza/portfolio-shams-2024",
      live_page: "https://shams-rzayeva.vercel.app/",
      owb: undefined,
    },
    {
      name: "The New Silk Road",
      description:
        "Oliver Wyman’s 'The New Silk Road' webpage highlights the immense growth and evolving connectivity across Asia, the Middle East, and North Africa. ",
      tags: [
        {
          name: "javascript",
          // color: "blue-text-gradient",
        },
        {
          name: "scss",
          // color: "green-text-gradient",
        },
        {
          name: "jquery",
          // color: "green-text-gradient",
        },
        {
          name: "svg_animation",
          // color: "pink-text-gradient",
        },
      ],
      image: nsr,
      source_code_link: "https://github.com/shamsrza/new_silk_road_dummy_code",
      live_page: "https://www.oliverwyman.com/our-expertise/hubs/the-new-silk-road.html",
      owb: ow_brand,
    },
    {
      name: "Saudi Arabia's Work Visa",
      description:
        "This assessment tool is for use by the government bodies, private sector and employees to assess the visa application and to understand the rules within the work visa system in KSA.",
      tags: [
        {
          name: "javascript",
          // color: "blue-text-gradient",
        },
        {
          name: "scss",
          // color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          // color: "green-text-gradient",
        },
        {
          name: "quiz_logic",
          // color: "green-text-gradient",
        },
      ],
      image: ssvisa,
      source_code_link: "https://github.com/shamsrza/assessment-tool-for-saudi-arabia-work-visa",
      live_page: "https://impact.oliverwyman.com/ksa-skillvisa-selfassessment/",
      owb: ow_brand,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };