import ProjectItem from "./ProjectItem";
import chatty from "../../public/images/projects/chatty.webp";
import paypoint from "../../public/images/projects/paypoint.webp";
import pc from "../../public/images/projects/pc.webp";
import tourguide from "../../public/images/projects/tourguide.webp";
import {faSass, faBootstrap, faReact,} from '@fortawesome/free-brands-svg-icons';

function ProjectList() {
    return (
        <>
            <ProjectItem
                title="Chatty"
                description={
                    <p>
                        AI Chat Assistant using React, Vite, and Vercel Serverless Functions. Features real-time response streaming with the Google Gemini API. 🚀
                    </p>
                }
                techUsed={[faReact, "tailwind.svg", faSass ]}
                demo="https://faizscripts-chatty.vercel.app/"
                sourceCode="https://github.com/faizscripts/my-open-ai"
                src={chatty}
            />
            <ProjectItem
                title="Project Catalyst"
                description={
                    <p>
                        A full-stack web application for tracking company initiatives and their related tasks. It enables users to create initiatives, add tasks, and monitor overall progress in real time.
                    </p>
                }
                techUsed={["next.svg", "nest.svg", "tailwind.svg", faSass ]}
                demo="https://faizscripts-pc.vercel.app/"
                sourceCode="https://github.com/faizscripts/project-catalyst"
                src={pc}
            />
            <ProjectItem
                title="Tour Guide"
                description={
                    <p>
                        Tour Guide is a tourist advisor website that provides travelers with reliable and up-to-date information about destinations, attractions, accommodations, dining, and local experiences. It offers personalized recommendations, reviews, and interactive maps to help users plan trips with ease and discover hidden gems for a memorable travel experience.
                    </p>
                }
                techUsed={["next.svg", faSass, faBootstrap ]}
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
                techUsed={["next.svg", faSass, faBootstrap]}
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
                techUsed={["express.svg", "mongodb.svg", faSass, faBootstrap]}
                demo="https://www.youtube.com/watch?v=La23zzDlVys&t=1418s"
                sourceCode="https://github.com/faizscripts/ecommerce-demo"
                youtube={true}
                videoId="s5dInQQx7K4"
            />
        </>
    )
}

export default ProjectList
