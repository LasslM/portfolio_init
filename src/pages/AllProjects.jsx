import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import {all_projects} from "../constants/index.jsx";
import {Link} from "react-router-dom";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.jsx";

const AllProjects = () => {
    return (
        <>
            <Header/>
            <div className={"lg:mx-48 mx-10 mt-36"}>
                <Breadcrumb className={"py-4 px-2"}>
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
                    </BreadcrumbList>
                </Breadcrumb>
                <h1> Projekte </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-16">
                    {all_projects.map((project) => (
                        <>
                            <Link
                                to={`/projects/${project.slug}`}
                                key={project.id}
                                className="group aspect-square p-4 drop-shadow-xl  hover:shadow-2xl flex flex-col justify-between bg-cover bg-center relative"
                                style={{
                                    backgroundImage: `url(${project.img})`, backgroundSize: project.sizing || 'cover',}}>

                                <div className="absolute inset-0 opacity-80 mix-blend-multiply group-hover:bg-color-dark transition-all duration-300"></div>

                                <div className="z-10 text-white text-lg lg:text-xl 2xl:text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.title}
                                </div>

                                <div className="z-10 text-white text-sm 2xl:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.description} <br/> <span className="text-color-darkgray font-sm">mehr erfahren</span>
                                </div>
                            </Link>
                        </>

                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AllProjects;