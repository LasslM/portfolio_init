import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import {projects_bento} from "../constants/index.jsx";
import AnimatedButton from "../components/AnimatedButton.jsx"
import { useNavigate } from 'react-router-dom';

const Projects = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('projects');
    };
    return(
        <>
            <div className={"flex flex-row mb-12 mt-32 justify-center font-bold text-3xl"}>
                <div className="pr-2 bg-gradient-to-r from-color-blue via-color-gradient1 to-color-red  inline-block text-transparent bg-clip-text">Aktuelle</div>
                {/*<AuroraText className={"font-bold text-3xl pr-2"}>Aktuelle</AuroraText>*/}
                <div>Projekte</div>
            </div>

            <div className={"lg:mx-48 w-auto"}>
                <BentoGrid>
                    {projects_bento.map((feature, idx) => (
                        <BentoCard key={idx} {...feature} />
                    ))}
                </BentoGrid>
            </div>

            <div className={"flex items-center justify-center mt-12"}>
                <AnimatedButton primary outline rounded onClick={handleClick}>
                    weitere Projekte
                </AnimatedButton>
            </div>
        </>
    )
}

export default Projects;