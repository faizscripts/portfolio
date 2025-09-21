import ProjectItem from "./ProjectItem";
import paypoint from "../../public/images/projects/paypoint.webp";
import tourguide from "../../public/images/projects/tourguide.webp";
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
                title="Tour Guide"
                description={
                    <p>
                        Tour Guide is a tourist advisor website that provides travelers with reliable and up-to-date information about destinations, attractions, accommodations, dining, and local experiences. It offers personalized recommendations, reviews, and interactive maps to help users plan trips with ease and discover hidden gems for a memorable travel experience.
                    </p>
                }
                techUsed={[faHtml5, faCss3, faSass, faBootstrap, faJs, faReact, "next.svg"]}
                demo="https://faizscripts-tour-guide.vercel.app/"
                sourceCode="https://github.com/faizscripts/tour-guide"
                src={tourguide}
            />
            <ProjectItem
                title="Paypoint"
                description={
                    <p>
                        Paypoint is a simple MPESA concept platform that lets registered users send money to each other with ease. You can top up your wallet, transfer funds instantly, and withdraw your balance whenever you need, either through agents or straight back to your MPESA account.
                    </p>
                }
                techUsed={[faHtml5, faCss3, faSass, faBootstrap, faJs, faReact, "next.svg"]}
                demo="https://faizscripts-paypoint.vercel.app/"
                sourceCode="https://github.com/faizscripts/paypoint"
                src={paypoint}
            />
            <ProjectItem
                title="E-Commerce website"
                description={
                    <>
                        <p>
                            This is a fully functional e-commerce website which is fast, has good SEO and is fully responsive across all screens. It uses google maps api to
                            calculate delivery fee and give accurate directions for efficient deliveries. The payment system is powered by daraja api which enables m-pesa, Kenya&apos;s most popular payment system. Lastly, it&apos;s integrated with google analytics and facebook pixel to boost sales.
                        </p>
                    </>
                }
                techUsed={[faHtml5, faCss3, faSass, faBootstrap, faJs, faNode, "mongodb.svg"]}
                demo="https://www.youtube.com/watch?v=La23zzDlVys&t=1418s"
                sourceCode="https://github.com/faizscripts/ecommerce-demo"
                youtube={true}
                videoId="s5dInQQx7K4"
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
                demo="https://youtu.be/XRHbl3DXabE?t=751"
                sourceCode="https://github.com/faizscripts/blockchain-voting-system"
                youtube={true}
                videoId="XRHbl3DXabE"
            />

        </>
    )
}

export default ProjectList
