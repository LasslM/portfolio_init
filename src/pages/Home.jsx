import Header from "@/components/Header.jsx";
import Hero from "@/components/Hero.jsx";
import Projects from "@/components/Projects.jsx";
import Footer from "@/components/Footer.jsx";

const Home = () => {
    return(
        <div className="bg-color-light">
            <Header />

            <div className={"mx-10"}>
                <Hero />
                <Projects />
            </div>

            <Footer />
        </div>
    )
}

export default Home;