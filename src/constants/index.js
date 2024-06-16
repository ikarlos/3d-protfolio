import { meta, shopify, starbucks, tesla } from "../assets/images";
import getdoc from "../assets/images/getdoc.png";
import python from "../assets/images/python.jpeg";
import fast from "../assets/images/fast.png";
import tensorflow from "../assets/images/tensorflow.png";
import gpt from "../assets/images/gpt.png";
import openai from "../assets/images/openai.png";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
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
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
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
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
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
    },
    {
        imageUrl: python,
        name: "python",
        type: "backend",
    },
    {
        imageUrl: fast,
        name: "FAST API",
        type: "backend",
    },
    {
        imageUrl: tensorflow,
        name: "tensorflow",
        type: "machine learning",
    }

];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "free lancer",
        icon: starbucks,
        iconBg: "#accbe1",
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
        company_name: "free lancer",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "python devloper",
        company_name: "free lancer",
        icon: python,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining machine learning model using sklern and other related technologies.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "get doctor",
        icon: getdoc,
        iconBg: "#a2d2ff",
        date: "feb 2024 - April 2024 ",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
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
        link: 'https://github.com/ikarlos',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/fahad-bhat-92a72723a/',
    }
];

export const projects = [
    {
        iconUrl: nextjs,
        theme: 'btn-back-black',
        name: 'Next js port folio',
        description: 'Dev loped a web app using next js and shadcn.',
        link: 'https://github.com/ikarlos/next-js-prot-folio',
    },
    {
        iconUrl: tensorflow,
        theme: 'btn-back-green',
        name: 'Appe diseases detection using Deep learning',
        description: 'traininng a model to detect diseases in apple using tensor flow resenet 50 and more',
        link: 'https://colab.research.google.com/drive/1-IZkh4fYQeD_pn0YEcaPnFAR1J0sz_9O',
    },
    {
        iconUrl: fast,
        theme: 'btn-back-black',
        name: 'api using fast api',
        description: 'creating an api using fast api to detect doseases.',
        link: 'https://replit.com/@117FAHAD/fast-1',
    },
    {
        iconUrl: gpt,
        theme: 'btn-back-green',
        name: 'chat gpt clone',
        description: 'Chat gpt clone using react js and other reuired technologies.',
        link: 'https://fzck1r.csb.app/',
    },
    {
        iconUrl: getdoc,
        theme: 'btn-back-blue',
        name: 'get doctor',
        description: 'A web app for online doctor appointment booking using node.',
        link: 'http://getdoctor.in/',
    },
    {
        iconUrl: openai,
        theme: 'btn-back-green',
        name: 'AI image generator',
        description: 'Ai image generator using open Ai and other.',
        link: 'https://replit.com/@117FAHAD/image-genrator#index.js',
    }
];