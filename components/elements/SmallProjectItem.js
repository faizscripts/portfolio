import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

function SmallProjectItem({title, sourceCode, techUsed}) {

    const renderTechUsed = () => {
        let i = 0
        return techUsed.map(
            tech => {
                i++
                if (typeof tech === "string"){
                    if (tech.includes(".svg")) return <img src={`/images/icons/${tech}`} alt={tech} className="svg-small mx-2" key={i} />

                    if (tech.includes("https://")) return <img src={tech} alt={tech} className="svg mx-2" key={i} />
                }

                return <FontAwesomeIcon icon={tech} size="2x" className="mx-2" key={i} />
            }
        )
    }

    const conditionalMarginForTech = () => {
        let svg = false
        techUsed.forEach(
            tech => {
                if (typeof tech === "string") {
                    svg = true
                }
            }
        )
        return svg ? "" : "tech-margin"
    }

    const renderLink = () => {
        if (title.toLowerCase().includes("wordpress")) {
            return (
                <a href={sourceCode} target="_blank">
                    <button className="btn btn-outline-primary mx-2">View Project &nbsp; <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}/></button>
                </a>
            )
        }

        return(
            <a href={sourceCode} target="_blank">
                <button className="btn btn-outline-primary mx-2">View Code &nbsp; <FontAwesomeIcon icon={faGithub} /> </button>
            </a>
        )
    }

    return(
        <div className="col-md-4 my-3">
            <div className="card small-project-item">
                <div className="card-body">
                    <h5 className="card-title mb-4">{title}</h5>
                    <p className={conditionalMarginForTech()}>{renderTechUsed()}</p>
                    {renderLink()}
                </div>
            </div>
        </div>
    )
}

export default SmallProjectItem