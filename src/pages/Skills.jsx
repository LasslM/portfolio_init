import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {navigation} from "@/constants/index.jsx";

const Skills = () => {
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
                                <a href={"skills"}> Fähigkeiten </a>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1> Fähigkeiten </h1>
            </div>
            <Footer />
        </>
    )
}

export default Skills;