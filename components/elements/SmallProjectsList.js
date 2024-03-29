import SmallProjectItem from "./SmallProjectItem";
import {
    faCss3,
    faHtml5,
    faJs,
    faNode,
    faReact,
    faSass,
    faWordpress
} from "@fortawesome/free-brands-svg-icons";

function SmallProjectsList({more, setMore}) {
    return(
        <div className={more ? "d-block" : "d-none"}>
            <div className="row">
                <SmallProjectItem title="Live streaming app" sourceCode="https://github.com/faizscripts/react/tree/master/streams" techUsed={[faHtml5, faCss3, faJs, faReact]} />
                <SmallProjectItem title="YouTube clone" sourceCode="https://github.com/faizscripts/react/tree/master/youtube-clone" techUsed={[faHtml5, faCss3, faJs, faReact]} />
                <SmallProjectItem title="Unsplash clone" sourceCode="https://github.com/faizscripts/react/tree/master/unsplash-clone" techUsed={[faHtml5, faCss3, faJs, faReact]} />
                <SmallProjectItem title="Blog app" sourceCode="https://github.com/faizscripts/react/tree/master/blog" techUsed={[faHtml5, faCss3, faJs, faReact]} />
                <SmallProjectItem title="Multifunctional app" sourceCode="https://github.com/faizscripts/react/tree/master/widgets" techUsed={[faHtml5, faCss3, faJs, faReact]} />
                <SmallProjectItem title="Wordpress e-commerce site" sourceCode="https://abufulan.co.ke/" techUsed={[faWordpress]} />
            </div>
            <div className="d-flex justify-content-center mb-5">
                <button onClick={() => setMore(!more)} className="btn btn-primary">Show {more ? "less" : "more"} projects</button>
            </div>
        </div>
    )
}

export default SmallProjectsList