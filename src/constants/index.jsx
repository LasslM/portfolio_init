import AllProjects from '../pages/AllProjects.jsx';
import AboutMe from '../pages/AboutMe.jsx';
import Skills from '../pages/Skills.jsx';
import Contact from '../pages/Contact.jsx';

import {
    SiReact, SiVite, SiTailwindcss, SiWordpress, SiHtml5, SiCss3, SiJavascript,
    SiGreensock, SiFramer, SiFigma, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign,
    SiPython, SiMysql, SiDotnet, SiPostman, SiJira, SiTrello, SiNotion,
    SiGithub,SiDocker, SiXampp, SiLangchain, SiStreamlit, SiHuggingface, SiOllama
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import {
    FaFileWord,
    FaFileExcel,
    FaFilePowerpoint,
    FaCode,
} from "react-icons/fa";

const iconClass = "inline-block w-6 h-6 mr-2";

// ── Covers ─────────────────────────────────────────────────────
import img_blacktie_cover from '@/assets/projects/blacktie/Blacktie_cover.webp';
import img_lunchlink_cover from '@/assets/projects/lunchlink/lunchlink_logo_cover.webp';
import img_mangrove_cover from '@/assets/projects/mangrove/mangrove_cover.webp';
import img_mangroveweb_cover from '@/assets/projects/webdevelopment/mangrove_hero_cover.webp';
import img_natureswatch_cover from '@/assets/projects/poster/natureswatch_mockup_cover.webp';
import img_portfolio_cover from '@/assets/projects/portfolio/portfolio_cover.webp';
import img_flowerexpress_cover from '@/assets/projects/flowerexpress/poster_mockup02_cover.webp'
import img_wondrousnature_cover from '@/assets/projects/magazine/magazine_right_concrete.webp'

// ── Content ─────────────────────────────────────────────────────
import img_blacktie_content from '@/assets/projects/blacktie/Blacktie_Tickets.webp';
import img_blacktie_content_flyer from '@/assets/projects/blacktie/leaflet.webp';
import img_blacktie_content_poster from '@/assets/projects/blacktie/a2poster.webp';
import img_mangrove_content from '@/assets/projects/mangrove/mangrove_product.webp';
import img_mangrove_content2 from '@/assets/projects/mangrove/mangrove_twocans.webp';
import img_mangrove_content3 from '@/assets/projects/mangrove/can_label.webp';
import img_mangrove_content4 from '@/assets/projects/mangrove/can_front.webp';
import img_mangrove_content5 from '@/assets/projects/mangrove/can_back.webp';
import img_mangroveweb_content from '@/assets/projects/webdevelopment/mangrove_hero.webp';
import img_flowerexpress_content from '@/assets/projects/flowerexpress/poster_mockup02.webp'
import img_flowerexpress_content2 from '@/assets/projects/flowerexpress/mockup.webp'
import img_wondrousnature_content from '@/assets/projects/magazine/magazine_right.webp'
import img_wondrousnature_content2 from '@/assets/projects/magazine/magazine_front.webp'




// ── Case Studies ────────────────────────────────────────────────
import blacktie_cs from '@/components/casestudies/blacktie_cs.jsx';
import mangrove_cs from '@/components/casestudies/mangrove_cs.jsx';
import mangroveweb_cs from '@/components/casestudies/mangroveweb_cs.jsx';
import flowerexpress_cs from '@/components/casestudies/flowerexpress_cs.jsx';
import natureswatch_cs from '@/components/casestudies/natureswatch_cs.jsx';
import wondrousnature_cs from '@/components/casestudies/wondrousnature_cs.jsx';



// ── Posters ─────────────────────────────────────────────────────
import img_poster_natureswatch from '@/assets/projects/poster/natureswatch_mockup.webp';

// ── Headers (Low Quality Previews) ─────────────────────────────
import blacktieHeader from '@/assets/projects/blacktie/Blacktie_Tickets_lq.webp';
import posterHeader from '@/assets/projects/poster/natureswatch_mockup_lowqualiy.webp';
import mangroveHeader from '@/assets/projects/mangrove/mangrove_twocans_lq.webp';
import webHeader from '@/assets/projects/webdevelopment/mangrove_hero_l.webp';

import React from "react";


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
        id: 3,
        title: "Über Mich",
        url: "/about-me",
        element: <AboutMe/>,
        highlight: "hover:text-color-blue",
        disabled: true
    },

    {
        id: 2,
        title: "Kontakt",
        url: "/contact",
        element: <Contact/>,
        highlight: "hover:text-color-blue font-bold",
    },
]
export const all_projects = [
    {
        id: '0',
        slug: 'blacktie-clubbing',
        title: 'BlackTie Clubbing 2024',
        description: 'Werbematerial für ein Clubbing-Event – Plakate, Flyer & mehr.',
        img: img_blacktie_cover,
        sizing: '110%',
        gallery: [img_blacktie_content, img_blacktie_content_poster, img_blacktie_content_flyer],
        tags: ['Event Marketing', 'Poster', 'Printdesign'],
        year: '2024',
        about: 'Im Zuge unseres Maturaevents entstand ein durchdachtes Werbekonzept, um möglichst viele Besucherinnnen und Besucher zu erreichen. Gestaltet wurden Plakate, Flyer und Eintrittskarten. Ziel war ein einheitlicher, auffälliger Auftritt mit hohem Wiedererkennungswert im regionalen Raum.',
        technologies: 'Adobe InDesign, Photoshop und Illustrator',
        links: [
            { url: "https://www.noen.at/zwettl/clubbing-maturaevent-der-htl-in-zwettl-ein-voller-erfolg-448564507", label: "NÖN Beitrag | Maturaevent der HTL in Zwettl ein voller Erfolg"},
            { url: "https://www.instagram.com/maturaclubbing.htlzwettl/", label: "Instagram | maturaclubbing.htlzwettl" },
        ],
        casestudy: blacktie_cs
    },
    {
        id: '1',
        slug: 'mangrove-energy',
        title: 'Mangrove Energy - Styleguide und Identität',
        description: 'Visuelle Identität mit Logo, Styleguide und Verpackung.',
        img: img_mangrove_cover,
        gallery: [ img_mangrove_content2, img_mangrove_content3,  img_mangrove_content4, img_mangrove_content5, img_mangrove_content, ],
        tags: ['Corporate Design', 'Verpackungsdesign', 'Styleguide'],
        year: '2022',
        about: 'Im Zuge einer Projektarbeit entstand Mangrove Energy, eine fiktive Marke mit eigenständiger Identität. Von Logo über Styleguide bis zur Verpackung, Mockups und Webshop habe ich ein stimmiges visuelles Gesamtkonzept entwickelt. Alle Designelemente wurden eigenständig gestaltet und ausgearbeitet.',
        technologies: 'Adobe InDesign, Photoshop und Illustrator; Procreate',
        casestudy: mangrove_cs,
    },
    {
        id: '2',
        title: 'Posterdesign | Nature\'s Watch',
        slug: 'natures-watch',
        description: 'Gestaltung von einem Werbeposter für eine fiktive Veranstaltung.',
        img: img_natureswatch_cover,
        sizing:'110%',
        gallery: [img_poster_natureswatch],
        tags: ['Overprint', 'Grafikdesign', 'Adobe Creative Suite'],
        casestudy: natureswatch_cs,
        year: '2024',
        about: 'Dieses Plakatdesign entstand im Rahmen einer freien Arbeit mit dem Ziel, neue grafische Stilrichtungen zu erkunden und gestalterisch zu experimentieren. Der zentrale Overprint-Effekt in Kombination mit minimalistischer Typografie geben dem Motiv einen eigenen Charakter und lassen es bewusst aus der Masse herausstechen.',
        technologies: 'Adobe InDesign und Photoshop'
    },
    {
        id: '7',
        title: 'Mangrove Energy – OnlineShop mit WordPress',
        slug: 'mangrove-website',
        description: 'E-Commerce Website mit WordPress, basierend auf Styleguide.',
        img: img_mangroveweb_cover,
        gallery: [img_mangroveweb_content],
        tags: ['Wordpress', 'WooCommerce', 'Webentwicklung'],
        casestudy: mangroveweb_cs,
        year: '2023',
        about: 'Die E-Commerce-Website für Mangrove Energy wurde auf Basis des entwickelten Styleguides als voll funktionsfähiger WooCommerce-Shop umgesetzt. Das Design entstand in Adobe XD und wurde in WordPress umgesetzt, inklusive Online-Shop mit Warenkorb, Produktseiten und Checkout-Prozess.',
        technologies: 'Adobe XD, Wordpress mit WooCommerce, XAMPP'
    },
    {
        id: '6',
        title: 'Posterdesign | Flower EXPRESS',
        slug: 'flower-express',
        description: 'Werbeposter für einen fiktiven Online-Blumenlieferdienst.',
        img: img_flowerexpress_cover,
        sizing:'140%',
        gallery: [img_flowerexpress_content, img_flowerexpress_content2],
        tags: ['Vintage', 'Grafikdesign', 'Adobe Creative Suite'],
        casestudy: flowerexpress_cs,
        year: '2025',
        about: 'Die Idee zu diesem Plakat entstand im Rahmen einer freien Gestaltungsübung für den Online-Blumenlieferdienst „flowerEXPRESS“. Ziel war es, ein auffälliges Werbeposter zu entwerfen, das den Express-Lieferservice bewirbt. Das Design ist im Vintage-Stil gehalten und kombiniert große, klare Typografie mit einem aussagekräftigen Bild.',
        technologies: 'Adobe Photoshop und Illustrator'
    },
    {
        id: '4',
        title: 'Magazin | Wondrous Nature',
        slug: 'wondrous-nature',
        description: 'Ein grafisches Magazin über außergewöhnliche Tiere und Pflanzen.',
        img: img_wondrousnature_cover,
        gallery: [img_wondrousnature_content, img_wondrousnature_content2],
        tags: ['Layoutdesign', 'Printmedien', 'Adobe InDesign'],
        casestudy: wondrousnature_cs,
        year: '2025',
        about: 'Wondrous Nature ist ein visuell gestaltetes Magazin, das sich den auffälligsten und ungewöhnlichsten Lebewesen der Natur widmet. Jede Ausgabe stellt ein einzelnes Tier oder eine Pflanze vor und kombiniert starke Bilder mit klaren Textlayouts. Der Fokus liegt auf Ästhetik, Editorial Design und spannender Wissensvermittlung.',
        technologies: 'Adobe InDesign und Photoshop'
    },
];


export const items = [
    {
        title: "Event Marketing",
        href: "/projects/blacktie-clubbing",
        description: "Visuelle Konzepte für Events, von Eintrittskarten bis hin zu Flyern und Poster.",
        header: <img src={blacktieHeader} className="flex flex-1 w-full h-[10rem] min-h-[6rem] object-cover flex-col space-y-2" />,
        className: "md:col-span-2",
    },
    {
        title: "Poster Design",
        href: "/projects/natures-watch",
        description: "Gestaltung in verschiedenen Stilen.",
        header: <img src={posterHeader} className="flex flex-1 w-full h-[10rem] min-h-[6rem] object-cover flex-col space-y-2" />,
        className: "md:col-span-1",
    },
    {
        title: "Web Entwicklung",
        href: "/projects/mangrove-website",
        description: "Von der Idee bis zur funktionalen Website.",
        header: <img src={webHeader} className="flex flex-1 w-full h-[10rem] min-h-[6rem] object-cover flex-col space-y-2" />,
        className: "md:col-span-1",
    },
    {
        title: "Brand Identity",
        href: "/projects/mangrove-energy",
        description: "Entwicklung von Markenidentitäten mit Styleguides, Verpackungsdesigns und E-Commerce.",
        header: <img src={mangroveHeader} className="flex flex-1 w-full h-[10rem] min-h-[6rem] object-cover flex-col space-y-2 offse" />,
        className: "md:col-span-2",
    },
];

export const skills_timeline = [
    {
        title: "WEB",
        description: "                    Ich beherrsche moderne Webtechnologien zur Umsetzung performanter, responsiver und interaktiver Interfaces.",
        content: (
            <div>
                <div className="mb-8 grid md:grid-cols-2 w-full gap-24 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    <div>
                        <h3 className="font-semibold mb-2">Entwicklung</h3>
                        <p className="mb-9 font-light">Ich setze Designs effizient in sauberen, skalierbaren Code um.</p>
                        <ul className="space-y-3">
                            <li><SiReact className={`${iconClass} text-[#61DAFB]`} />React.js</li>
                            <li><SiVite className={`${iconClass} text-yellow-500`} />Vite</li>
                            <li><SiWordpress className={`${iconClass} text-blue-900`} />WordPress</li>
                            <li><SiTailwindcss className={`${iconClass} text-cyan-500`} />TailwindCSS</li>
                            <li><SiHtml5 className={`${iconClass} text-orange-600`} />HTML</li>
                            <li><SiCss3 className={`${iconClass} text-blue-600`} />CSS</li>
                            <li><SiJavascript className={`${iconClass} text-yellow-400`} />JavaScript</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Animationen</h3>
                        <p className="mb-9 font-light">Ich bringe Benutzeroberflächen mit durchdachten Animationen zum Leben.</p>
                        <ul className="space-y-3">
                            <li><SiGreensock className={`${iconClass} text-green-500`} />GSAP</li>
                            <li><SiFramer className={`${iconClass} text-black`} />Framer Motion</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "GRAFIK",
        description: "Ich visualisiere Ideen und Marken mit professionellen Design-Tools für digitale und analoge Anwendungen.",
        content: (
            <div>
                <div className="mb-8 grid md:grid-cols-2 w-full gap-14 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    <div>
                        <h3 className="font-semibold mb-2">Konzipierung</h3>
                        <p className="mb-9 font-light">Ich entwickle Designsysteme, Layouts und Prototypen.</p>
                        <ul className="space-y-3">
                            <li><SiFigma className={`${iconClass} text-[#A259FF]`} />Figma</li>
                            <li><SiAdobexd className={`${iconClass} text-[#FF61F6]`} />Adobe XD</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Finalisierung</h3>
                        <p className="mb-9 font-light">Ich bearbeite und exportiere Designs professionell für alle Ausgabemedien.</p>
                        <ul className="space-y-3">
                            <li><SiAdobephotoshop className={`${iconClass} text-[#31A8FF]`} />Adobe Photoshop</li>
                            <li><SiAdobeillustrator className={`${iconClass} text-[#FF9A00]`} />Adobe Illustrator</li>
                            <li><SiAdobeindesign className={`${iconClass} text-[#FF3366]`} />Adobe InDesign</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "BACKEND & LOGIK",
        description: "Ich setze einfache Backend-Logik um, entwickle APIs und arbeite mit relationalen Datenbanken.",
        content: (
            <div>
                <div className="mb-8 grid md:grid-cols-2 w-full gap-14 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    <div>
                        <h3 className="font-semibold mb-2">Programmiersprachen</h3>
                        <p className="mb-9 font-light">Für Datenverarbeitung, Skripting und Businesslogik.</p>
                        <ul className="space-y-3">
                            <li><FaCode className={`${iconClass} text-purple-600`} />C#</li>
                            <li><SiPython className={`${iconClass} text-yellow-500`} />Python</li>
                            <li><SiDotnet className={`${iconClass} text-indigo-700`} />.NET</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Daten & API</h3>
                        <p className="mb-9 font-light">Ich arbeite mit relationalen Datenbanken und REST-Schnittstellen.</p>
                        <ul className="space-y-3">
                            <li><SiMysql className={`${iconClass} text-[#00758F]`} />MySQL</li>
                            <li><SiPostman className={`${iconClass} text-orange-400`} />Postman</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "WORKFLOW",
        description: "Ich organisiere Projekte strukturiert mit agilen Tools und kollaborativen Plattformen.",
        content: (
            <div>
                <div className="mb-8 grid md:grid-cols-2 w-full gap-14 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    <div>
                        <h3 className="font-semibold mb-2">Tools & Workflows</h3>
                        <p className="mb-9 font-light">Für Planung, Kommunikation und Aufgabenverteilung.</p>
                        <ul className="space-y-3">
                            <li><SiJira className={`${iconClass} text-blue-700`} />Jira</li>
                            <li><SiTrello className={`${iconClass} text-blue-400`} />Trello</li>
                            <li><SiNotion className={`${iconClass} text-black`} />Notion</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "BASICS",
        description: "Ich nutze Office-Tools routiniert für Dokumentation, Planung und Präsentation.",
        content: (
            <div>
                <div className="mb-8 grid md:grid-cols-2 w-full gap-14 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    <div>
                        <h3 className="font-semibold mb-2">Office Software</h3>
                        <p className="mb-9 font-light">Standardtools für Kommunikation und Datenaufbereitung.</p>
                        <ul className="space-y-3">
                            <li><FaFileWord className={`${iconClass} text-blue-700`} />Microsoft Word</li>
                            <li><FaFileExcel className={`${iconClass} text-green-600`} />Microsoft Excel</li>
                            <li><FaFilePowerpoint className={`${iconClass} text-orange-500`} />PowerPoint</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
    },
];
export const skills_timeline_v2 = [
    {
        title: "WEB",
        description:
            "Ich beherrsche moderne Webtechnologien zur Umsetzung performanter, responsiver und interaktiver Interfaces.",
        content: (
            <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-blue-100 dark:border-gray-600 transition-all hover:scale-105 hover:shadow-lg shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Entwicklung</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Ich setze Designs effizient in sauberen, skalierbaren Code um.
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiReact className="inline-block w-8 h-8 mr-2 text-[#61DAFB]" />
                                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">React.js</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiVite className="inline-block w-8 h-8 mr-2 text-yellow-500" />
                                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Vite</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiWordpress className="inline-block w-8 h-8 mr-2 text-blue-900" />
                                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Word Press</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiTailwindcss className="inline-block w-8 h-8 mr-2 text-cyan-500" />
                                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Tailwind CSS</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiHtml5 className="inline-block w-8 h-8 mr-2 text-orange-600" />
                                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">HTML</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiCss3 className="inline-block w-8 h-8 mr-2 text-blue-600" />
                                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">CSS</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm col-span-2">
                                <SiJavascript className="inline-block w-8 h-8 mr-2 text-yellow-400" />
                                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">JavaScript</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-green-100 dark:border-gray-600 transition-all hover:scale-105 hover:shadow-lg shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Animationen</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Ich bringe Benutzeroberflächen mit durchdachten Animationen zum Leben.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiGreensock className="inline-block w-8 h-8 mr-2 text-green-500" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GSAP</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "GRAFIK",
        description: "Ich visualisiere Ideen und Marken mit professionellen Design-Tools für digitale und analoge Anwendungen.",
        content: (
            <div className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-purple-100 dark:border-gray-600 transition-all hover:scale-105 hover:shadow-lg shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Konzipierung</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Ich entwickle Designsysteme, Layouts und Prototypen.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiFigma className="inline-block w-8 h-8 mr-2 text-[#A259FF]" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Figma</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiAdobexd className="inline-block w-8 h-8 mr-2 text-[#FF61F6]" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Adobe XD</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-orange-100 dark:border-gray-600 transition-all hover:scale-105 hover:shadow-lg shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Finalisierung</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Ich bearbeite und exportiere Designs professionell für alle Ausgabemedien.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiAdobephotoshop className="inline-block w-8 h-8 mr-2 text-[#31A8FF]" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Adobe Photoshop</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiAdobeillustrator className="inline-block w-8 h-8 mr-2 text-[#FF9A00]" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Adobe Illustrator</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiAdobeindesign className="inline-block w-8 h-8 mr-2 text-[#FF3366]" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Adobe InDesign</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "BACKEND & LOGIK",
        description: "Ich setze auch vereinzelt Backend-Logik um, entwickle APIs und arbeite mit relationalen Datenbanken.",
        content: (
            <div className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-indigo-100 dark:border-gray-600 transition-all hover:scale-105 hover:shadow-lg shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sprachen</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Für Datenverarbeitung, Skripting und Businesslogik.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <VscVscode className="inline-block w-8 h-8 mr-2 text-indigo-700" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">C#</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <FaCode className="inline-block w-8 h-8 mr-2 text-purple-600"/>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">C</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiPython className="inline-block w-8 h-8 mr-2 text-yellow-500" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Python</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-teal-100 dark:border-gray-600 transition-all hover:scale-105 hover:shadow-lg shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Daten & API</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Ich arbeite mit relationalen Datenbanken und REST-Schnittstellen.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiMysql className="inline-block w-8 h-8 mr-2 text-[#00758F]" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">MySQL</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiPostman className="inline-block w-8 h-8 mr-2 text-orange-400" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Postman</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },

    {
        title: "WORKFLOW",
        description: "Ich organisiere Projekte strukturiert mit agilen Tools und kollaborativen Plattformen.",
        content: (
            <div className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-emerald-100 dark:border-gray-600 transition-all hover:scale-105 hover:shadow-lg shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Organisation</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Für Planung, Kommunikation und Aufgabenverteilung.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiJira className="inline-block w-8 h-8 mr-2 text-blue-700" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Jira</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiTrello className="inline-block w-8 h-8 mr-2 text-blue-400" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Trello</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiNotion className="inline-block w-8 h-8 mr-2 text-black dark:text-white" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Notion</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-indigo-100 dark:border-gray-600 transition-all hover:scale-105 hover:shadow-lg shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414V14a1 1 0 11-2 0V6.586L7.707 8.879a1 1 0 11-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 11-1.414 1.414L11 6.586z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Deployment & Hosting</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Ich deploye Webprojekte teilwiese mit GitHub Pages, nutze Docker für konsistente Entwicklungsumgebungen und XAMPP für lokale Server-Setups. Domains und DNS verwalte ich selbst.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiGithub className="inline-block w-8 h-8 mr-2 text-gray-800 dark:text-white" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiDocker className="inline-block w-8 h-8 mr-2 text-blue-500" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Docker</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <svg className="w-8 h-8 mr-2 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M3 5h18M3 12h18M3 19h18" />
                                </svg>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">DNS / Domain Setup</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiXampp className="w-8 h-8 mr-2 text-orange-500"/>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">XAMPP</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "KI SYSTEME",
        description: "Ich habe bereits Erfahrung mit lokalen KI-Modellen und deren Integration und Training in eigenen Systemen gesammelt.",
        content: (
            <div className="space-y-8">
                <div className="grid lg:grid-cols-1 max-w-lg">
                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-purple-100 dark:border-gray-600 transition-all hover:scale-105 hover:shadow-lg shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.003 5.884l8 4.8a1 1 0 001.004 0l8-4.8A1 1 0 0018 4H2a1 1 0 00.003 1.884zM2 8.118v6.764a1 1 0 00.485.857l7 4.2a1 1 0 001.03 0l7-4.2A1 1 0 0018 14.882V8.118l-7.485 4.49a3 3 0 01-3.03 0L2 8.118z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">RAG & KI-Tools</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Eingesetzt zur Entwicklung von Retrieval-Augmented Generation (RAG) Systemen und interaktiven KI-Anwendungen.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiLangchain className="inline-block w-8 h-8 mr-2 text-yellow-500" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">LangChain</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiStreamlit className="inline-block w-8 h-8 mr-2 text-pink-500" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Streamlit</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiHuggingface className="inline-block w-8 h-8 mr-2 text-orange-500" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Hugging Face</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <SiOllama className="w-8 h-8 mr-2 text-slate-800 dark:text-white"/>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Ollama</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    }
];
