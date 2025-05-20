import AllProjects from '../pages/AllProjects.jsx';
import AboutMe from '../pages/AboutMe.jsx';
import Skills from '../pages/Skills.jsx';
import Contact from '../pages/Contact.jsx';

import img1 from '@/assets/projects/img1.jpg';
import img2 from '@/assets/projects/img2.jpg';
import img3 from '@/assets/projects/img3.jpg';
import img4 from '@/assets/projects/img4.jpg';



const EmptyIcon = () => null;





export const navigation = [
    {
        id: 0,
        title: "Projekte",
        url: "/projects",
        element: <AllProjects/>,
        highlight: "hover:text-color-blue",
    },

    {
        id: 1,
        title: "Fähigkeiten",
        url: "/skills",
        element: <Skills/>,
        highlight: "hover:text-color-blue",
    },

    {
        id: 2,
        title: "Kontakt",
        url: "/contact",
        element: <Contact/>,
        highlight: "hover:text-color-blue",
    },

    {
        id: 3,
        title: "Über Mich",
        url: "/about-me",
        element: <AboutMe/>,
        highlight: "hover:text-color-red font-bold",
    },
]
export const projects_bento = [
    {
        Icon: EmptyIcon,
        name: "Webentwicklung",
        description: "Von der Idee bis zum Produkt.",
        className: "col-span-3 lg:col-span-1",
        href: "/projects/portfolio",
        cta: "mehr erfahren",
        background: <img className="absolute opacity-60 object-cover w-full h-full" />,
    },
    {
        Icon: EmptyIcon,
        name: "Event Marketing",
        description: "Gestaltung von Poster, Eintrittskarten und mehr.",
        href: "/projects/blacktie-clubbing",
        cta: "mehr erfahren",
        className: "col-span-3 lg:col-span-2",
        background: <img className="absolute opacity-60 object-cover w-full h-full" />,
    },
    {
        Icon: EmptyIcon,
        name: "Brand Identity",
        description: "Entwicklung eines vollständigen Styleguides und Mockups.",
        href: "/projects/mangrove-energy",
        cta: "mehr erfahren",
        className: "col-span-3 lg:col-span-2",
        background: <img className="absolute opacity-60 object-cover w-full h-full" />,
    },
    {
        Icon: EmptyIcon,
        name: "Poster Design",
        description: "Mit Verwendung von Adobe Produkten",
        href: "/projects/poster",
        cta: "mehr erfahren",
        className: "col-span-3 lg:col-span-1",
        background: <img className="absolute opacity-60 object-cover w-full h-full" />,
    },
]

export const all_projects = [
    {
        id: '0',
        slug: 'blacktie-clubbing',
        title: 'BlackTie Clubbing 2024',
        description: 'Gestaltung von Postern, Eintrittskarten, Flyern und mehr.',
        img: img1,
        content: 'BLACKTIE Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        gallery: [
            img1,
            img2
        ],
        tags: [
            'Event Marketing',
            'Poster',
            'Printdesign',
        ],
    },
    {
        id: '1',
        slug: 'mangrove-energy',
        title: 'Mangrove Energy',
        description: 'Entwicklung eine Brand Identity mit Website inkl. Online-Shop, Mockups und einem Styleguide.',
        img: img2,
        content: 'MANGROVE Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        gallery: [
            img1,
            img2
        ],
        tags: [
            'Corporate Design',
            'E Commerce',
            'Webdesign'
        ],
    },
    {
        id: '2',
        title: 'Verschiedene Poster',
        slug: 'poster',
        description: 'Gestaltung von verschiedenen Postern mithilfe von Adobe-Produkten.',
        img: img3,
        content: 'POSTER Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        gallery: [
            img1,
            img2
        ],
        tags: [
            'Printdesign',
            'Grafikdesign',
            'Adobe Creative Suite'
        ],
    },
    {
        id: '3',
        title: 'DriveLog Fahrschul-App',
        slug: 'drivelog',
        description: 'UI/UX Design und Realisierung für eine Fahrschul-App.',
        img: img3,
        content: 'DRIVELOG Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        gallery: [
            img1,
            img2
        ],
        tags: [
            'App Design',
            'Fahrschule',
            'UX Research'
        ],
    },
    {
        id: '4',
        title: 'LunchLink Essensverwaltungs-Software',
        slug: 'lunchlink',
        description: 'UI/UX Design und Realisierung einer digitalen Plattform zur Essensverwaltung für Schulen und Kantinen.',
        img: img4,
        content: 'LUNCHLINK Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        gallery: [
            img1,
            img2
        ],
        tags: [
            'UI Design',
            'Verwaltungssystem',
            'Digitalisierung'
        ],
    },
    {
        id: '5',
        title: 'RAG System mit Benutzeroberfläche',
        slug: 'rag-system',
        description: 'UI/UX Design und Realisierung eines Systems zur Informationsabfrage mit benutzerfreundlicher Oberfläche.',
        img: img2,
        content: 'RAG Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        gallery: [
            img1,
            img2
        ],
        tags: [
            'Systemdesign',
            'UX/UI',
            'Interfaceentwicklung'
        ],
    },
    {
        id: '6',
        title: 'Entwicklung meines Portfolios',
        slug: 'portfolio',
        description: 'Realisierung meiner Portfolio-Website',
        img: img1,
        content: 'PORTFOLIO Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        gallery: [
            img1,
            img2
        ],
        tags: [
            'React',
            'UX/UI',
            'Webentwicklung',
        ],
    },
]
