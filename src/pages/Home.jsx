import Header from "@/components/Header.jsx";
import HeroTest from "@/components/Hero_test.jsx";
import Projects from "@/components/Projects.jsx";
import Footer from "@/components/Footer.jsx";


const Home = () => {
    return(
        <div className="bg-color-light">
            <Header />
            <HeroTest/>
            <div className={"mx-10"}>
                <Projects />
            </div>

            <Footer/>
        </div>
    )
}
export default Home;