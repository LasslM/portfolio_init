import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { TextAnimate } from "../components/magicui/text-animate";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const whiteOverlayRef = useRef();
    const heroContentRef = useRef();

    const blob1Ref = useRef();
    const blob2Ref = useRef();
    const blob3Ref = useRef();
    const blob4Ref = useRef();
    const blob5Ref = useRef();
    const blob6Ref = useRef();

    useEffect(() => {
        gsap.to(blob1Ref.current, {
            x: 500,
            y: -550,
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        gsap.to(blob2Ref.current, {
            x: -320,
            y: -100,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        gsap.to(blob3Ref.current, {
            x: 20,
            y: 300,
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        gsap.to(blob5Ref.current, {
            x: 400,
            y: 100,
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        gsap.to(blob6Ref.current, {
            x: 400,
            y: 20,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });


        gsap.to(whiteOverlayRef.current, {
            scrollTrigger: {
                trigger: whiteOverlayRef.current,
                start: "top bottom",
                end: "top top",
                scrub: true,
            },
            y: "-100vh",
            ease: "none",
        });

        gsap.to(heroContentRef.current, {
            scrollTrigger: {
                trigger: ".hero-wrapper",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
            y: -50,
        });

        window.grained("#grained", {
            animate: false,
            patternWidth: 100,
            patternHeight: 100,
            grainOpacity: 0.06,
            grainDensity: 1,
            grainWidth: 1,
            grainHeight: 1,
            style: {
                zIndex: 0,
                pointerEvents: "none",
                position: "absolute",
                top: 0,
                left: 0,
            },
        });
    }, []);

    return (
        <div id="grained" className="relative h-screen overflow-hidden hero-wrapper bg-gray-200">
            <div className="absolute top-0 left-0 w-full h-full" />

            <div
                ref={blob1Ref}
                id="blob1"
                className="blob bg-blue-400 opacity-70  blur-3xl absolute"
                style={{ top: "35%", left: "-25%" }}
            />

            <div
                ref={blob2Ref}
                id="blob2"
                className="blob bg-red-400 opacity-85  blur-3xl absolute"
                style={{ top: "85%", left: "-5%" }}
            />
            <div
                ref={blob3Ref}
                id="blob3"
                className="blob bg-purple-500 opacity-70  blur-3xl absolute"
                style={{ top: "55%", left: "-5%" }}
            />
            <div
                ref={blob4Ref}
                id="blob4"
                className="blob bg-blue-500 opacity-70  blur-3xl absolute"
                style={{ top: "75%", left: "90%" }}
            />
            <div
                ref={blob5Ref}
                id="blob5"
                className="blob bg-purple-500 opacity-40  blur-3xl absolute"
                style={{ top: "-55%", left: "40%" }}
            />
            <div
                ref={blob6Ref}
                id="blob6"
                className="blob bg-red-400 opacity-85  blur-3xl absolute"
                style={{ top: "-60%", left: "40%" }}
            />

            <div
                ref={heroContentRef}
                className="relative z-10 h-full flex flex-col justify-center items-center px-8"
            >
                <TextAnimate animation="blurIn" as="div">
                    GRAFIK DESIGN | WEBENTWICKLUNG
                </TextAnimate>

                <h1 className="mt-2 mb-2 xl:text-8xl lg:text-7xl sm:text-5xl">Marius Lassl</h1>
                <div>
                    Willkommen in meinem <span className="uppercase font-bold">Portfolio</span>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <ArrowDown className="w-8 h-8 animate-bounce text-color-dark" />
                </div>
            </div>


            <div
                ref={whiteOverlayRef}
                className="absolute top-full left-0 w-full h-screen bg-color-light z-10"
            />
        </div>
    );
};

export default Hero;
