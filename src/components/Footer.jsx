import { Separator } from "@/components/ui/separator.jsx"
import {Phone, Mail} from "lucide-react";


const Footer = () => {
    return (
        <>
            <div className="mt-32 py-4 px-10 ">
                <div className="space-y-1">

                    <h4 className="text-sm font-semibold leading-none">Marius Lassl</h4>
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
                    <Mail  className="lg:w-5 text-color-darkgray" /> <span> lassl.m@gmx.at </span>
                    <Separator orientation="vertical"/>
                    <div className="underline">Über mich</div>
                </div>
                <div className="lg:hidden">
                    <div className="underline">Kontakt</div>
                </div>
            </div>
        </>
    )
}

export default Footer;