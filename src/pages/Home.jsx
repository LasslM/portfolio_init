import Header from "@/components/Header.jsx";
import Hero from "@/components/Hero.jsx";
import Projects from "@/components/Projects.jsx";
import Footer from "@/components/Footer.jsx";

import Swirl from '@/assets/background.svg';


const Home = () => {
    return(
        <div
            className="
            bg-color-light
            bg-no-repeat
            bg-[length:contain]
            bg-[position:-150px_-250px]
            lg:bg-[position:-200px_-250px]
            sm:bg-[position:-50px_-150px]
            xs:bg-[position:10px_10px]
            bg-[url('/src/assets/background.svg')]
              "
            >
            <Header />
            <div className={"mx-10"}>
                <Hero className={"bg-white opacity-20"}/>
                <Projects />
            </div>
            <Footer />
        </div>
    )
}

export default Home;