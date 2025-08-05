import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { TextAnimate } from "../components/magicui/text-animate";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";



gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Hero = () => {
    const whiteOverlayRef = useRef();
    const heroContentRef = useRef();

    const body = document.body;
    body.style.overflow = "hidden";


    useEffect(() => {
        document.fonts.ready.then(() => {
            const splitName = SplitText.create("#hero-name", { type: "chars, words" });
            const splitGreeting = SplitText.create("#hero-greeting", { type: "chars, words" });
            const splitWelcome = SplitText.create("#hero-welcome", { type: "words" });

            const tl = gsap.timeline({
                onComplete: () => {
                    body.style.overflow = "auto";
                }
            });

            tl.from(splitGreeting.words, {
                y: 100,
                autoAlpha: 0,
                stagger: 0.05,
                ease: "power1.out",
            })
                .from(splitName.words, {
                    y: 100,
                    autoAlpha: 0,
                    stagger: 0.05,
                    ease: "power1.out",
                }, "-=0.3")
                .from(splitWelcome.words, {
                    y: 100,
                    autoAlpha: 0,
                    stagger: 0.03,
                    ease: "power4.out",
                }, "-=0.2");

            return () => {
                splitGreeting.revert();
                splitName.revert();
                splitWelcome.revert();
            };
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

        gsap.to("#grained", {
            scrollTrigger: {
                trigger: ".hero-wrapper",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
            yPercent: -50,
            xPercent: -20,
            rotate: 50,
            scale: 1.3,
            ease: "none",
        });


        window.grained("#grained", {
            animate: false,
            patternWidth: 100,
            patternHeight: 100,
            grainOpacity: 0.1,
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
        <div className="relative h-screen overflow-hidden hero-wrapper bg-gray-200 ">
            <div
                ref={heroContentRef}
                className="relative z-10 h-full flex flex-col justify-center items-center px-10 text-center"
            >

                <TextAnimate animation="blurIn" as="div" className="md:text-base text-xs">
                    GRAFIK DESIGN | WEBENTWICKLUNG
                </TextAnimate>

                <h1 id="hero-greeting" className="font-light xl:text-8xl md:text-7xl text-[2.4rem]">
                    Hallo, ich bin
                </h1>

                <h1 id="hero-name" className="mt-2 mb-2 xl:text-8xl md:text-7xl text-[2.4rem] font-bold uppercase">
                    Marius Lassl
                </h1>

                <div id="hero-welcome" className="md:text-base text-xs">
                    Willkommen in meinem <span className="uppercase font-bold">Portfolio</span>
                </div>

                <div className="z-30 hidden md:block absolute bottom-6 left-20 text-color-dark"> Projekte </div>
                <ArrowDown className="z-30 hidden md:block w-8 h-8 absolute bottom-4 left-8 animate-bounce text-color-dark" />
                <div className="z-30  hidden md:block absolute bottom-6 right-8 text-color-dark" > Portfolio v2.0 </div>
            </div>

            <svg
                id="grained"
                viewBox="0 0 200 200"
                style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%)",
                    pointerEvents: "none",
                }}
                className="blur-3xl opacity-65 pointer-events-none z-20 fill-color-blue top-[65%] w-[200vw] h-[200vw] md:w-[100vw] md:h-[100vw] md:top-[50%]"
            >
                <path
                    d="M43.6,-74.5C57.8,-67.9,70.5,-57.8,77.1,-44.5C83.6,-31.2,84,-15.6,80.7,-1.5C77.3,12.7,70.2,25.4,62.2,37.6C54.3,49.9,45.5,61.6,34.2,67.2C22.9,72.8,9.1,72.4,-3.3,75.7C-15.8,78.9,-31.7,85.8,-45.6,82.3C-59.5,78.8,-71.5,64.9,-76.7,49.1C-81.9,33.3,-80.3,15.6,-77.2,0.5C-74,-14.6,-69.3,-29.2,-61.6,-41.6C-53.9,-54,-43.1,-64.2,-30.4,-69.9C-17.7,-75.6,-3.9,-76.9,9.5,-80.4C22.9,-83.9,45.9,-89.1,43.6,-74.5Z"
                    transform="translate(100 100)"
                />
            </svg>


            <div
                ref={whiteOverlayRef}
                className="absolute top-full left-0 w-full h-screen bg-color-light z-40"
            />
        </div>
    );
};

export default Hero;
