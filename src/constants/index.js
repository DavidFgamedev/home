import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  cpp,
  css,
  reactjs,
  azure,
  tailwind,
  blender,
  jira,
  git,
  confluence,
  docker,
  unreal,
  taketwo,
  ps,
  carrent,
  jobit,
  tripguide,
  unity,
  bl3,
  tlou,
  demons,
  gow,
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
    title: "Quality Assurance",
    icon: web,
  },
  {
    title: "Project Management",
    icon: mobile,
  },
  {
    title: "Game Design",
    icon: backend,
  },
  {
    title: "Automation Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "CPP",
    icon: cpp,
  },
  {
    name: "unreal",
    icon: unreal,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "confluence",
    icon: confluence,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "react js",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "QA Tester",
    company_name: "2k - Las Vegas",
    icon: taketwo,
    iconBg: "#FF0000",
    date: "March 2017 - April 2019",
    points: [
      "Complete routine check-in tasks with Trophies Team, TRC and Legal Compliance.",
      "Document test case results and report critical issues in accordance with studio standards.",
      "Frequent Remote Play, Languages, SKU, Network and Multiplayer checks.",
      "Train testers on latest QA practice, test tools and game engine functionality.",
    ],
  },
  {
    title: "QA Core",
    company_name: "PlayStation - San Diego",
    icon: ps,
    iconBg: "#00239c",
    date: "Oct 2019 - March 2022",
    points: [
      "Automated sections of routine bug reporting, resulting in 15% fewer duplicated issues within the first quarter.",
      "Increased deployment efficiency by integrating GCP, reducing manualintervention by 40%",
      "Conducted QA performance analysis, leading to 30% faster bug fix turn around times during peak testing periods.",
      "Solved design problems by applying constructive feedback from testers and maintaining documentation.",
    ],
  },
  {
    title: "Project Contributor",
    company_name: "PlayStation - San Diego",
    icon: ps,
    iconBg: "#00239c",
    date: "March 2022 - March 2024",
    points: [
      "Designed trophy descriptions and objectives in compliance with TRC and Legal standards.",
      "Collaborated with cross-functional teams to enhance button design layouts for PS5’s trackpad and dual-sense controllers.",
      "Improved UI and gameplay features for over 140 retro titles on original Emulation Software.",
      "Managed QA efforts for 2 full cycle projects, achieving 10% early QA deliverables by 1 month per cycle.",
      
    ],
  },
  {
    title: "Game Programmer",
    company_name: "Unreal Engine",
    icon: unreal,
    iconBg: "#FFFFFF",
    date: "Jan 2024 - Present",
    points: [
      "Designed and balanced combat systems, including freeflow hero combat and counterattacks.",
      "Created level designs and breakdowns to enhance gameplay pacing and experiences.",
      "Rigged NPC systems and designed Behavior Trees for dynamic enemy interactions.",
      "Scripted development automation tools to streamline asset imports and debugging.",
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
    name: "C++ Framework",
    description:
      "Enemies use character blueprints and separate controller classes like basic/ranged/special attacks and patrolling. ",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "Unreal",
        color: "green-text-gradient",
      },
      {
        name: "NPC",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/DavidFgamedev/DemoTitle/tree/main/UE5mix/C%2B%2BBlueprints",
  },
  {
    name: "Blueprint Editor",
    description:
      "All movement mechanics were made using a combination of C++ and Blueprints either within the player character or in separate character component classes called in the player character blueprint. The core skill abilities include Combo Attack, Special Skill, Projectiles and Dashing..",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "HacknSlash",
        color: "green-text-gradient",
      },
      {
        name: "RPG",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/DavidFgamedev/DemoTitle/trehttps://github.com/DavidFgamedev/DemoTitle/blob/main/DemoTitle/Code/CharacterCode/ThirdPerson/Chale/ChalesTributeCharacter.cppe/main/UE5mix/PythonScripts",
  },
  {
    name: "Python Scripts",
    description:
      "Uses behavior trees and bp event calls via AI.",
    tags: [
      {
        name: "A.I.",
        color: "blue-text-gradient",
      },
      {
        name: "Companion",
        color: "green-text-gradient",
      },
      {
        name: "UE5",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/DavidFgamedev/DemoTitle/tree/main/UE5mix/PythonScripts",
  },
];


const projects2 = [
  {
    name: "The Last Of Us Part II",
    
    tags: [
      
    ],
    image: tlou,
    
  },
  {
    name: "God of War: Ragnorak",
    
    tags: [
      
    ],
    image: gow,

  },
  {
    name: "Borderlands 3",

    tags: [
      
    ],
    image: bl3,
  },
  {
    name: "Demon's Souls Remake",
    
    tags: [
      
    ],
    image: demons,

  },
];

export { services, technologies, experiences, testimonials, projects, projects2, };