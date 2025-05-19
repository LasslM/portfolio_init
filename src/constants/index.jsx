import AllProjects from '../pages/AllProjects.jsx';
import AboutMe from '../pages/AboutMe.jsx';
import Skills from '../pages/Skills.jsx';
import Contact from '../pages/Contact.jsx';

const EmptyIcon = () => null;

export const navigation = [
    {
        id: 0,
        title: "Projekte",
        url: "projects",
        element: <AllProjects/>,
        highlight: "hover:text-color-blue",
    },

    {
        id: 1,
        title: "Fähigkeiten",
        url: "skills",
        element: <Skills/>,
        highlight: "hover:text-color-blue",
    },

    {
        id: 2,
        title: "Kontakt",
        url: "contact",
        element: <Contact/>,
        highlight: "hover:text-color-blue",
    },

    {
        id: 3,
        title: "Über Mich",
        url: "about-me",
        element: <AboutMe/>,
        highlight: "hover:text-color-red font-bold",
    },
]

export const projects_extra_content = [
    {
        name: "bitcoin.pdf",
        body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
    },
    {
        name: "finances.xlsx",
        body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
    },
    {
        name: "logo.svg",
        body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
    },
    {
        name: "keys.gpg",
        body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
    },
    {
        name: "seed.txt",
        body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
    },

]
export const projects_bento = [
    {
        Icon: EmptyIcon,
        name: "Webentwicklung",
        description: "Von der Idee bis zum Produkt",
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "mehr erfahren",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
    },
    {
        Icon: EmptyIcon,
        name: "Event Marketing",
        description: "Gestaltung von Poster, Eintrittskarten und mehr",
        href: "#",
        cta: "mehr erfahren",
        className: "col-span-3 lg:col-span-2",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
    },
    {
        Icon: EmptyIcon,
        name: "Brand Identity",
        description: "Entwicklung eines vollständigen Styleguides und Mockups",
        href: "#",
        cta: "mehr erfahren",
        className: "col-span-3 lg:col-span-2",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
    },
    {
        Icon: EmptyIcon,
        name: "Poster Design",
        description: "Verschieden Stile",
        href: "#",
        cta: "mehr erfahren",
        className: "col-span-3 lg:col-span-1",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
    },
]

export const all_projects = [
    {
        id: '0',
        title: 'BlackTie Clubbing 2024',
        description: 'Gestaltung von Postern, Eintrittskarten, Flyern und mehr.',
        img: '../assets/projects/img1.jpg',
        href:'projects',
    },
    {
        id: '1',
        title: 'Mangrove Energy',
        description: 'Entwicklung eine Brand Identity mit Website inkl. Online-Shop, Mockups und einem Styleguide.',
        img: '../assets/projects/img2.jpg',
        href:'projects',
    },
    {
        id: '2',
        title: 'Verschiedene Poster',
        description: 'Gestaltung von verschiedenen Postern mithilfe von Adobe-Produkten.',
        img: '../assets/projects/img3.jpg',
        href:'projects',
    },
    {
        id: '3',
        title: 'DriveLog Fahrschul-App',
        description: 'UI/UX Design und Realisierung für eine Fahrschul-App.',
        img: '../assets/projects/img4.jpg',
        href:'projects',
    },
    {
        id: '4',
        title: 'LunchLink Essensverwaltungs-Software',
        description: 'UI/UX Design und Realisierung LOS DA NU WOS BESSAS EIFOIN!!!!!',
        img: '../assets/projects/img1.jpg',
        href:'projects',
    },
]