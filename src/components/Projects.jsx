import {items} from "../constants/index.jsx";
import AnimatedButton from "../components/AnimatedButton.jsx"

import { useNavigate } from 'react-router-dom';
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import CustomCursor from "@/components/CustomCursor.jsx";

gsap.registerPlugin(ScrollTrigger);


const Projects = () => {
    const navigate = useNavigate();
    const textboxRef = useRef();
    const [cursorEnabled, setCursorEnabled] = useState(false);

    /*useEffect(() => {
        gsap.to(textboxRef.current, {
            scrollTrigger:{
                trigger: textboxRef.current,
                start: "top bottom",
                end: "top 30%",
                scrub: true,
            },
            scale: 1.1,
            y: "-18vh",
            ease: "none",
        })
    })*/

    const handleClick = () => {
        navigate('projects');
    };

    const handleClickSkills = () => {
        navigate('skills');
    };

    return(
        <div className="">
            <CustomCursor enabled={cursorEnabled} />
            <div ref={textboxRef}>
                <div className="h-[15vh] bg-color-light"></div>
                <div className={"flex flex-row mb-12 mt-32 justify-center font-bold text-3xl"}>
                    {/*<div className="pr-2 bg-gradient-to-r from-color-blue via-color-gradient1 to-color-red  inline-block text-transparent bg-clip-text">Aktuelle</div>*/}
                    {/*<AuroraText className={"font-bold text-3xl pr-2"}>Aktuelle</AuroraText>*/}
                    <div>Meine</div>
                    <div className="pl-2 inline-block bg-clip-text text-color-blue">Stärken</div>
                </div>

                <div className={"lg:mx-48 w-auto"}>
                    {/*<BentoGrid>
                    {projects_bento.map((feature, idx) => (
                        <BentoCard key={idx} {...feature} />
                    ))}
                </BentoGrid>*/}

                    <BentoGrid
                        className="w-full mx-auto md:auto-rows-[30rem]">
                        {items.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                href={item.href}
                                description={item.description}
                                header={item.header}
                                className={item.className}
                                setCursorEnabled = {setCursorEnabled}
                            />
                        ))}
                    </BentoGrid>
                </div>

                <div className={"flex items-center justify-center mt-12 gap-4 flex-wrap"}>
                    <AnimatedButton primary rounded onClick={handleClick}>
                        Meine Projekte
                    </AnimatedButton>
                    <AnimatedButton primary outline rounded onClick={handleClickSkills}>
                        Meine Fähigkeiten
                    </AnimatedButton>
                </div>
            </div>
        </div>
    )
}


export default Projects;