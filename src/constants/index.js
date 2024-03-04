import { meta, shopify, starbucks, tesla } from "../assets/images";
import {

    css,

    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    contact,

    nextjs,
    nodejs,

    react,

    sass,


    tailwindcss,

    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },

    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },

    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Account Management",
        company_name: "Lviv Polytechnic National University(Ukraine)",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "09.2006 – 06.2011",
        points: [
            "Accounting, Analyzing financial data, Regional economy development planning."
        ],
    },
    {
        title: "Certificate telc German B2, Berlin",
        company_name: "WIPA",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "04.2019 –12.2021",
        points: [
            "Integration language course."
        ],
    },
    {
        title: "Fullstack Web Development",
        company_name: "DCI Digital Career Institute GmbH, Berlin",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "01.2022 – 08.2023",
        points: [
            "One year full time training including theoretical material and application  in practice. Performance of tasks and inter-module tests.Group and individual projects.Taking English lessons as part of the course.",
        ],
    },
    {
        title: "Interior decorations",
        company_name: "Self employed",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "05.2016 - 2023",
        points: [
            "Project development. Creation of design items. Participation in residence and exhibitions. ",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

