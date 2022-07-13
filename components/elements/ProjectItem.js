import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

function ProjectItem({title, description, techUsed, demo, sourceCode, youtube, link, src}) {

    const renderTechUsed = () => {
        let i = 0
        return techUsed.map(
            tech => {
                i++
                if (typeof tech === "string") {
                    if (tech.includes(".svg")) return <img src={`/images/icons/${tech}`} alt={tech} className="svg mx-2" key={i}/>

                    if (tech.includes("https://")) return <img src={tech} alt={tech} className="svg mx-2" key={i} />
                }

                return <FontAwesomeIcon icon={tech} size="2x" className="mx-2" key={i} />
            }
        )
    }

    const renderPreview = () => {
        if (youtube) {
            return (
                <iframe src={link} style={{height: "inherit", width: "inherit"}} title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            )
        } else {
            return <Image src={src} alt={src} placeholder="blur" layout="fill"/>
        }
    }

    return (
        <div className="row project-item">
            <div className="col-6 project-details">
                <h3 className="project-heading">{title}</h3>
                <div className="project-description">
                    {description}
                </div>
                <div className="tech-used">
                    Technologies used: {renderTechUsed()}
                </div>
                <div className="project-links">
                    <a href={demo} target="_blank">
                        <button className="btn btn-outline-primary mx-2">View Demo &nbsp; <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}/></button>
                    </a>
                    <a href={sourceCode} target="_blank">
                        <button className="btn btn-outline-primary mx-2">View Code &nbsp; <FontAwesomeIcon icon={faGithub}/>
                        </button>
                    </a>
                </div>
            </div>
            <div className="col-1 project-details-extended"></div>
            <div className="project-preview">
                {renderPreview()}
            </div>
        </div>
    )
}

export default ProjectItem