import ProjectItem from "./ProjectItem";
import commerce from "../../public/images/projects/commerce.png";
import {
    faHtml5,
    faCss3,
    faJs,
    faSass,
    faBootstrap,
    faNode,
    faReact
} from "@fortawesome/free-brands-svg-icons";

function ProjectList() {
    return (
        <>
            <ProjectItem
                title="E-Commerce website"
                description={
                    <>
                        <p>
                            This is a fully functional e-commerce website which is fast, has good SEO and is fully responsive across all screens. It uses google maps api to
                            calculate delivery fee and give accurate directions for efficient deliveries. The payment system is powered by daraja api which enables m-pesa, Kenya&apos;s most popular payment system. Lastly, its integrated with google analytics and facebook pixel to boost sales.
                        </p>
                        <p>
                            I have two variants running at real time, <a
                            href="http://alpha-supplement.com/" target="_blank" rel="noreferrer">Alpha Fitness</a> which
                            sells gym accessories and <a href="http://139.162.233.144/ "target="_blank" rel="noreferrer">Amazon Cellular</a> which
                            sells electronics. My clients are pleased with the website and have reported a smooth
                            operation of their online businesses.
                        </p>
                    </>
                }
                techUsed={[faHtml5, faCss3, faSass, faBootstrap, faJs, faNode, "mongodb.svg"]}
                demo="https://alpha-supplement.com"
                sourceCode="https://github.com/faizscripts/amazon-cellular"
                youtube={true}
                link="https://www.youtube.com/embed/uCpxKfBrX7k"
            />
            <ProjectItem
                title="CMS for my e-commerce website with POS"
                description={
                    <p>
                        I was contracted by a client who had a physical shop and wanted to venture to online marketing. He tasked me to develop a point of sale (POS) to smoothen day to day operations of the physical shop as well as an e-commerce website which he could create, manage, and modify content without the need for specialized technical knowledge. I followed his specifications to the letter and developed a point of sale with the specific functionalities that he wanted and a content management system (CMS) for the website.
                    </p>
                }
                techUsed={[faHtml5, faCss3, faSass, faBootstrap, faJs, faNode, "mongodb.svg"]}
                demo="https://alpha-supplement.com"
                sourceCode="https://github.com/faizscripts/amazon-cellular"
                src={commerce}
            />
            <ProjectItem
                title="My portfolio"
                description={
                    <p>
                        Having portfolio is among the most important things for a web developer, a good portfolio is definitely even more important. For this reason, I sat down to develop a fully responsive, fast pre rendered website with an option to switch themes using react js and next js.
                    </p>
                }
                techUsed={[faHtml5, faCss3, faSass, faBootstrap, faJs, faReact, "next.svg"]}
                demo="#"
                sourceCode="https://github.com/faizscripts/portfolio"
                src={commerce}
            />
            <ProjectItem
                title="Blockchain voting system"
                description={
                    <p>
                        A blockchain-based voting system that preserves voter privacy and increases accessibility, while keeping the voting system transparent, secure, and
                        cost-effective. The system implements a voting framework that utilizes ethereum’s blockchain and smart contracts to achieve voter administration and auditable voting records. The implementation was deployed on ethereum’s test network to demonstrate usability, scalability, and efficiency.
                    </p>
                }
                techUsed={[faHtml5, faCss3, faBootstrap, faJs, faNode, "https://img.icons8.com/ios-filled/28/000000/solidity.png", "https://img.icons8.com/ios-filled/28/000000/metamask-logo.png"]}
                demo="https://alpha-supplement.com"
                sourceCode="https://github.com/faizscripts/blockchain-voting-system"
                src={commerce}
            />

        </>
    )
}

export default ProjectList