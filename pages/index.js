import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

function HomePage() {
    return (
        <>
            <Hero/>
            <div className="container">
                <About/>
                <Skills/>
                <Projects/>
            </div>
        </>
    )
}

export default HomePage