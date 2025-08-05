import { Separator } from "@/components/ui/separator.jsx"
import {Phone, Mail} from "lucide-react";
import {Link} from  "react-router-dom";

const Footer =  ({ space }) => {
    if (!space) space = "mt-32";

    return (
        <>
            <div className={`${space} py-4 px-10`}>
                <div className="space-y-1">

                    <h5 className="text-sm font-semibold leading-none">Marius Lassl</h5>
                    <div className="flex flex-row justify-between">
                        <p className="text-sm text-color-darkgray">
                            Grafik Design | Webentwicklung
                        </p>

                        <p className="text-sm text-color-darkgray">
                            @2025 Alle Rechte vorbehalten.
                        </p>
                    </div>
                </div>

                <Separator className="my-4" />
                <div className="hidden lg:flex h-5 space-x-4 text-sm lg:flex-row lg:items-center">
                    <Phone className="lg:w-5 text-color-darkgray" /> <span>+43 664 5859370</span>
                    <Separator orientation="vertical"/>
                    <Mail  className="lg:w-5 text-color-darkgray" /> <span> office@marius-lassl.com </span>

                </div>
                <div className="lg:hidden flex  flex-row gap-3">
                    <Link to={'/contact'} className="underline">Kontakt</Link>
                </div>
            </div>
        </>
    )
}

export default Footer;