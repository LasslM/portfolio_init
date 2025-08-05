import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import {skills_timeline, skills_timeline_v2} from "@/constants/index.jsx"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {Link} from "react-router-dom";
import {Timeline} from "@/components/ui/timeline.jsx";

const Skills = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className={"flex-1 lg:mx-48 mx-10 mt-36"}>
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
                <div className="relative w-full overflow-clip">
                    <Timeline data={skills_timeline_v2} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Skills;