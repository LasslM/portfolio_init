import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.jsx";
import {Link} from "react-router-dom";

const AboutMe = () => {
    return(
        <div class="flex flex-col min-h-screen">
            <Header/>
            <div className={"flex-1 lg:mx-48 mx-10 mt-36"}>
                <Breadcrumb className={"py-8 px-2"}>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to={"/"}> Home </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to={"/about-me"}> Über mich </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1> Über mich </h1>
                <p className="mt-12 text-color-redmuted font-semibold">Work in Progress!</p>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutMe;