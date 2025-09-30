import SmallProjectItem from "./SmallProjectItem";
import {
    faBootstrap,
    faCss3,
    faHtml5,
    faJs,
    faReact,
    faSass,
} from '@fortawesome/free-brands-svg-icons';

function SmallProjectsList({more, setMore}) {
    return(
        <div className={more ? "d-block" : "d-none"}>
            <div className="row">
                <SmallProjectItem title="Blockchain voting system" sourceCode="https://github.com/faizscripts/blockchain-voting-system" techUsed={[faHtml5, faBootstrap, faJs, "https://img.icons8.com/ios-filled/28/000000/solidity.png", "https://img.icons8.com/ios-filled/28/000000/metamask-logo.png"]} />
                <SmallProjectItem title="Apple website clone" sourceCode="https://github.com/faizscripts/apple" techUsed={["next.svg", faHtml5, faSass, faBootstrap, faJs]} />
                <SmallProjectItem title="Live streaming app" sourceCode="https://github.com/faizscripts/react/tree/master/streams" techUsed={[faHtml5, faCss3, faJs, faReact]} />
                <SmallProjectItem title="YouTube clone" sourceCode="https://github.com/faizscripts/react/tree/master/youtube-clone" techUsed={[faHtml5, faCss3, faJs, faReact]} />
                <SmallProjectItem title="Unsplash clone" sourceCode="https://github.com/faizscripts/react/tree/master/unsplash-clone" techUsed={[faHtml5, faCss3, faJs, faReact]} />
                <SmallProjectItem title="Blog app" sourceCode="https://github.com/faizscripts/react/tree/master/blog" techUsed={[faHtml5, faCss3, faJs, faReact]} />
            </div>
            <div className="d-flex justify-content-center mb-5">
                <button onClick={() => setMore(!more)} className="btn btn-primary">Show {more ? "less" : "more"} projects</button>
            </div>
        </div>
    )
}

export default SmallProjectsList
