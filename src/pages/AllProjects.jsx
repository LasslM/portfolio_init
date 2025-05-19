import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import {all_projects} from "../constants/index.jsx";

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
                            <BreadcrumbLink>
                                <a href={"/"}> Home </a>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <a href={"projects"}> Projekte </a>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1> Projekte </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-16">
                    {all_projects.map((project) => (
                        <div className="aspect-square p-4 shadow-md hover:bg-color-blue transition flex flex-col justify-between bg-color-gray">
                            <img src={project.img} alt={project.title} />
                            <div className={"hidden hover:block"}>{project.title}</div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AllProjects;