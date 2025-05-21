import AllProjects from '../pages/AllProjects.jsx';
import AboutMe from '../pages/AboutMe.jsx';
import Skills from '../pages/Skills.jsx';
import Contact from '../pages/Contact.jsx';

import img1 from '@/assets/projects/img1.jpg';
import img2 from '@/assets/projects/img2.jpg';
import img3 from '@/assets/projects/img3.jpg';
import img4 from '@/assets/projects/img4.jpg';

import img_blacktie_cover from '@/assets/projects/blacktie/Blacktie_Tickets.png'
import img_mangrove_cover from '@/assets/projects/mangrove/mangrove_handholding.png'
import img_mangrove_cover2 from '@/assets/projects/mangrove/mangrove_twocans.png'


import img1_poster from '@/assets/projects/poster/poster1.png';
import img2_poster from '@/assets/projects/poster/poster2.png';
import img3_poster from '@/assets/projects/poster/poster_tiger.png';

import img_poster_natureswatch from '@/assets/projects/poster/natureswatch_mockup_lowqualiy.png';

import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards.jsx"

import React from "react";

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
        background: <img src="src/assets/projects/cover_bento/BlackTie_Tickets.png" className="absolute opacity-100 object-cover w-full h-full" />,
    },
    {
        Icon: EmptyIcon,
        name: "Brand Identity",
        description: "Entwicklung eines vollständigen Styleguides und Mockups.",
        href: "/projects/mangrove-energy",
        cta: "mehr erfahren",
        className: "col-span-3 lg:col-span-2",
        background: null,
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
        img: img_blacktie_cover,
        sizing: "170%",
        content: 'BLACKTIE Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        gallery: [
            img_blacktie_cover,
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
        img: img_mangrove_cover,
        sizing: null,
        content: 'MANGROVE Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        gallery: [
            img_mangrove_cover,
            img_mangrove_cover2
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
        img: img_poster_natureswatch,
        sizing: "150%",
        content: 'POSTER Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        gallery: [
            img_poster_natureswatch
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
];



const bento_extracontent_poster = [
    { imageUrl: img1_poster },
    { imageUrl: img2_poster },
    { imageUrl: img3_poster },
];
const bento_extracontent = [
    { imageUrl: img1 },
    { imageUrl: img2 },
    { imageUrl: img3 },
    { imageUrl: img4 },
];
export const items = [
    {
        title: "Event Marketing",
        href: "/projects/blacktie-clubbing",
        description: "Gestaltung von Postern, Eintrittskarten, Flyern und mehr.",
        header: <img src="src/assets/projects/blacktie/Blacktie_Tickets.png" className="flex flex-1 w-full h-[10rem] min-h-[6rem] object-cover flex-col space-y-2" />,
        className: "md:col-span-2",
    },
    {
        title: "Webentwicklung",
        href: "/projects/portfolio",
        description: "Von der Idee bis zum finalen Produkt.",
        header:<img src="src/assets/projects/poster/natureswatch_mockup_lowqualiy.png" className="flex flex-1 w-full h-[10rem] min-h-[6rem] object-cover flex-col space-y-2" />,
        className: "md:col-span-1",
    },
    {
        title: "Poster Design",
        href: "/projects/poster",
        description: "Verwendung von Adobe Produkten.",
        header:
            <div className="h-[40rem] opacity-100 md:opacity-30 lg:opacity-30 hover:opacity-100 flex flex-col antialiased bg-color-gray items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={bento_extracontent_poster}
                    direction="right"
                    speed="slow"
                />
            </div>,
        className: "md:col-span-1",
    },
    {
        title: "Brand Identity",
        href: "/projects/mangrove-energy",
        description:
            "Entwicklung eines Styleguides mit Mockups und E-Commerce Website.",
        header: <img src="src/assets/projects/mangrove/mangrove_twocans.png" className="flex flex-1 w-full h-[10rem] min-h-[6rem] object-cover flex-col space-y-2 offse" />,
        className: "md:col-span-2",
    },
];