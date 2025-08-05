import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { all_projects } from '@/constants/index.jsx';
import Header from "@/components/Header.jsx";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.jsx";
import Footer from "@/components/Footer.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

const ProjectsDetailed = () => {
    const { slug } = useParams();
    const project = all_projects.find(p => p.slug === slug);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomOrigin, setZoomOrigin] = useState('center');

    if (!project) return <div>Projekt nicht gefunden.</div>;
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="flex flex-col min-h-screen font-light">
            <Header />
            <div className="flex-1 lg:mx-48 mx-10 mt-36">
                <Breadcrumb className="py-4">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to="/"> Home </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to="/projects"> Projekte </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to={`/projects/${slug}`}> {project.title} </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h2 className="mb-1">{project.title}</h2>
                <p className="font-thin text-color-darkgray">{project.description}</p>

                <div className="mb-8 mt-2 flex flex-row gap-2">
                    {project.tags.map((tag, i) => (
                        <Badge variant="outline" key={i}>{tag}</Badge>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-36 items-stretch">
                    <div>
                        {project.year && (
                            <>
                                <h4>&gt; JAHR</h4>
                                <p>{project.year}</p>
                            </>
                        )}

                        {project.about && (
                            <>
                                <h4>&gt; WAS WURDE GEMACHT?</h4>
                                <p>{project.about}</p>
                            </>
                        )}

                        {project.technologies && (
                            <>
                                <h4>&gt; TECHNOLOGIEN</h4>
                                <p>{project.technologies}</p>
                            </>
                        )}

                        {project.links && (
                            <>
                                <h4>&gt; REFERENZEN</h4>
                                {project.links.map((link, i) => (
                                    <div key={i}>
                                        <Link
                                            to={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline transition hover:text-color-blue"
                                        >
                                            {link.label}
                                        </Link>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                    <div className="relative">
                        {project.gallery[0] && (
                            <div className="relative w-full h-full">
                                {!loaded && <Skeleton className="w-full h-full" />}
                                <img
                                    src={project.gallery[0]}
                                    alt={`${project.title} 1`}
                                    onLoad={() => setLoaded(true)}
                                    className={`w-full h-full object-cover cursor-pointer transition duration-500 hover:scale-105 ${
                                        loaded ? 'opacity-100' : 'opacity-0 absolute'
                                    }`}
                                    onClick={() => setSelectedIndex(0)}
                                />
                            </div>
                        )}
                    </div>

                </div>

                {project.casestudy != null && (
                    <div className="mb-36">
                        <h4 className="mb-4">&gt; PROJEKTBERICHT</h4>
                        <hr className="mb-16"/>
                        {project.casestudy}
                    </div>
                )}


                {project.gallery && project.gallery.length > 0 && (
                    <div>
                        <h4 className="my-4">&gt; GALLERIE</h4>
                        <hr className="mb-16"/>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {project.gallery.map((img, index) => {
                                if (!img) return null;
                                return (
                                    <div key={index} className="relative w-full">
                                        {!loaded && (
                                            <Skeleton className="w-full aspect-[4/3]" />
                                        )}
                                        <img
                                            src={img}
                                            alt={`${project.title} ${index + 1}`}
                                            onLoad={() => setLoaded(true)}
                                            className={`w-full cursor-pointer transition duration-500 hover:scale-105 ${
                                                loaded ? 'opacity-100' : 'opacity-0 absolute'
                                            }`}
                                            onClick={() => setSelectedIndex(index)}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
            <Footer />


            {/*image zoom*/}
            {selectedIndex !== null && (
                <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center px-4">
                    <button
                        onClick={() => setSelectedIndex(null)}
                        className="absolute top-4 right-4 text-white text-3xl hover:scale-110 transition"
                    >
                        <X size={28} />
                    </button>

                    <img
                        src={project.gallery[selectedIndex]}
                        alt="Zoom"
                        onClick={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const offsetX = e.clientX - rect.left;
                            const offsetY = e.clientY - rect.top;
                            const xPercent = (offsetX / rect.width) * 100;
                            const yPercent = (offsetY / rect.height) * 100;

                            setZoomOrigin(`${xPercent}% ${yPercent}%`);
                            setIsZoomed(prev => !prev);
                        }}
                        className={`transition-transform duration-300 cursor-zoom-in ${
                            isZoomed ? 'cursor-zoom-out' : ''
                        } max-h-[80vh] max-w-full mb-6`}
                        style={{
                            transform: isZoomed ? 'scale(2.5)' : 'scale(1)',
                            transformOrigin: zoomOrigin,
                        }}
                    />

                    <div className="flex gap-12">
                        <button
                            disabled={selectedIndex === 0}
                            onClick={() => setSelectedIndex(prev => prev - 1)}
                            className={`text-white hover:scale-110 transition disabled:opacity-30`}
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            disabled={selectedIndex === project.gallery.length - 1}
                            onClick={() => setSelectedIndex(prev => prev + 1)}
                            className={`text-white hover:scale-110 transition disabled:opacity-30`}
                        >
                            <ChevronRight size={32} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectsDetailed;
