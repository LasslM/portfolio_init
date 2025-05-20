import {Link, useParams} from 'react-router-dom';
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
import {Badge} from "@/components/ui/badge.jsx"

const ProjectsDetailed = () => {
    const { slug } = useParams();
    const project = all_projects.find(p => p.slug === slug);

    if (!project) return <div>Projekt nicht gefunden.</div>;

    return (
        <>
            <Header/>
            <div className={"lg:mx-48 mx-10 mt-36"}>
                <Breadcrumb className={"py-4"}>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to={"/"}> Home </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to={"/projects"}> Projekte </Link>
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
                <div  className="mb-8 mt-2 flex flex-row gap-2">
                    {project.tags.map(tag => (
                        <Badge variant="outline">{tag}</Badge>
                    ))}
                </div>
                <p className="mb-8">{project.content}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery.map((img, index) => (
                        <img key={index} src={img} alt={`${project.title} ${index + 1}`} className="w-full" />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );

}
export default ProjectsDetailed;