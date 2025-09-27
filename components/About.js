import useWindowDimensions from "../hooks/useWindowDimensions";
import Image from "next/image";
import me from "../public/images/me2.webp"

function About() {
    const [windowDimensions] = useWindowDimensions()

    const renderAboutPhoto = () => {
        if (windowDimensions){
            const {width} = windowDimensions
            if (width< 768){
                return(
                    <div className="about-photo-container">
                        <div className="about-photo" data-aos="fade-up">
                            <Image src={me} alt={me} layout="fill" placeholder="blur"  />
                        </div>
                    </div>
                )
            } else return null
        } else return null
    }

    return (
        <div id="about">
            <h1 className="heading" data-aos="fade-up">About</h1>
            {renderAboutPhoto()}
            <p className="paragraph" data-aos="fade-up">
                Hi, I’m Faiz Ahmed — a full stack developer specializing in Angular, React.js, Next.js, and Node.js. I build fast, scalable, and user-friendly web applications with a strong focus on clean design and seamless UX.
            </p>
            <p className="paragraph" data-aos="fade-up">
                With a background in Computer Science and a passion for self-driven learning, I combine solid fundamentals with a love for JavaScript, AI, UI/UX, and emerging tech like Web3.
            </p>
            <p className="paragraph" data-aos="fade-up">
                Based in Kenya, I’m open to both local and global opportunities where I can contribute, collaborate, and create impactful digital solutions.
            </p>
            <div className="d-flex justify-content-center" data-aos="fade-up">
                <a href="/FaizAhmedCV.pdf" className="btn btn-primary mt-4" data-aos="fade-up">Download CV</a>
            </div>
        </div>
    )
}

export default About
