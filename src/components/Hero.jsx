import {ArrowDown} from "lucide-react";
import { TextAnimate } from "../components/magicui/text-animate";


const Hero = () => {
    return (
        <>
            <div className="relative h-screen flex flex-col justify-center items-start">
                <TextAnimate animation="blurIn" as="div">
                    GRAFIK DESIGN | WEBENTWICKLUNG
                </TextAnimate>

                <h1 className="mt-2 mb-2">Marius Lassl</h1>
                <div>
                    Willkommen in meinem <span className="uppercase font-bold">Portfolio</span>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <ArrowDown className="w-8 h-8 animate-bounce text-black"/>
                </div>
            </div>
        </>
    );
}
export default Hero;