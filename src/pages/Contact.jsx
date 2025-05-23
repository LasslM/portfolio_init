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
import {Phone, Mail, MapPinned, Linkedin, Instagram} from "lucide-react";



const Contact = () => {
    return(
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
                                <Link to={"/contact"}> Kontakt </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1> Kontakt </h1>
                <div className={"my-16 grid lg:grid-cols-2 gap-14"}>
                    <div>
                        <p className={"mb-2 font-bold"}>Noch Fragen oder eine kreative Idee, die umgesetzt werden will?</p>
                        <p>Ich freue mich über Ihre Nachricht – sei es für ein konkretes Projekt, eine erste Anfrage oder einen fachlichen Austausch. Schreiben Sie mir gerne. Ich melde mich zeitnah persönlich zurück.</p>
                        <div className="space-y-4 my-8">
                            <div className="flex items-center gap-4">
                                <Phone /> <span>+43 664 5859370</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail /> <span>lassl.m@gmx.at</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <MapPinned /> <span>Niederösterreich, Gmünd</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Contact;