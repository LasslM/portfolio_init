import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {Link} from "react-router-dom";

const Skills = () => {
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
                                <Link to={"/skills"}> Fähigkeiten </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1> Fähigkeiten </h1>
                <p className="mt-12 text-color-redmuted font-semibold">Work in Progress!</p>
            </div>
            <Footer />
        </>
    )
}

export default Skills;