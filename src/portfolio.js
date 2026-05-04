/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Haidan's Portfolio",
  description:
    "A self motivated, and knowledgeable programmer who thrives on a team.",
  og: {
    title: "Haidan Nelson Portfolio",
    type: "website",
    url: "http://haidannelson.com/",
  },
};

//Home Page
const greeting = {
  title: "Haidan Nelson",
  logo_name: "HaidanNelson",
  nickname: "",
  subTitle:
    "A self motivated, and knowledgeable programmer who thrives on a team.",
  resumeLink:
    "https://docs.google.com/document/d/1TVfKbu6m2d_WfexqS8wkq-n9Mv7tYh2LLLZoLQWLX5U/edit?usp=sharing",
  portfolio_repository: "https://github.com/SwiftSeizure",
  githubProfile: "https://github.com/SwiftSeizure",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/SwiftSeizure",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/haidan-nelson-80a750299/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:haidandnelson@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Database Solutions",
      fileName: "DataScienceImg",
      skills: [
        "Design efficient and easily queryable databases",
        "Create and implement queries to extract data from databases",
        "Maintain and improve existing database solutions",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#003B57",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "Provide backend support for web applications and design efficient APIs",
        "Build striking frontends using ReactJS",
        "Design optimal database solutions to store and retrieve data",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud",
      fileName: "CloudInfraImg",
      skills: [
        "Hoste and maintaining websites on virtual machine instances along with integration of databases",
        "Provide efficiently priced solutions to cloud service needs",
        "Design and implement cloud based solutions to meet business needs",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },

        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "University of Utah",
      subtitle: "BA in Computer Science",
      logo_path: "uLogo.png",
      alt_name: "University of Utah",
      duration: "2020 - 2025",
      descriptions: [
        " Through my time at the University of Utah, I gained a strong foundation in computer science. Beyond this however I learned how to learn.",
        " I am confident not becuase I know all there is to know, but becuase I can learn to solve any problem that I encounter.",
        " AI is the future, a tool that is going to revolutionize industries everywhere. I was among the early adopters of AI, and I intend to be among the early innovators of these spaces.",
      ],
      website_link: "https://www.utah.edu/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "Through my experience I have developed excellent customer service skills and the ability to communicate effectively. I take personal responsibility for my projects and I aspire to be the best what I do.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Personal Assistant",
          company: "Tamara Lemmon",
          company_url: "",
          logo_path: "black.png",
          duration: "August 2022 - Present",
          location: "Draper, Utah, USA",
          description:
            "Provide daily transportation for minor child and manage responsibilities within the household.",
          color: "#000000",
        },

        {
          title: "Cycle Counter",
          company: "ARUP",
          company_url: "https://www.arup.com/",
          logo_path: "arupLogo.png",
          duration: "April 2021 - August 2021 ",
          location: "Salt Lake City, Utah, USA",
          description:
            "Managed inventory for 13 different labs. Collaborated with supervisors and lab techs to develop efficient inventory systems.",
        },
        {
          title: "Delivery Driver",
          company: "DoorDash",
          company_url: "https://www.doordash.com/",
          logo_path: "ddLogo.png",
          duration: "March 2020 - August 2022",
          location: "Murray, Utah, USA",
          description:
            "Developed discipline and time management by handling self-employment responsibilities during COVID-19.",
        },
        {
          title: "Sales Associate",
          company: "Best Buy",
          company_url: "https://www.bestbuy.com/",
          logo_path: "bbLogo.png",
          duration: "June 2018 - March 2020",
          location: "Murray, Utah, USA",
          description:
            "Achieved 'Leading Salesman of the Month' (June 2018) and 'Employee of the Season' (Winter 2019). Provided outstanding customer service and solutions.",
        },

        {
          title: "Cashier",
          company: "McDonald's",
          company_url: "https://www.mcdonalds.com/",
          logo_path: "mcdLogo.png",
          duration: "March 2017 - April 2018",
          location: "Loveland, Colorado, USA",
          description:
            "Maintained quality customer service and teamwork under high-stress situations.",
        },
      ],
    },

    {
      title: "Volunteerships",
      experiences: [],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am a college graduate that loves to hike, camp, ski, and generally be in the mountains. I am almost always listening to music, and I look forward to collaborating with a team to create something awesome.",
  },
  blogSection: {
    title: "",
    subtitle: "",
  },
  addressSection: {},
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
