import SkillsList from "./SkillsList";
import SkillsItem from "./SkillsItem";

function Skills() {
    return (
        <div id="skills">
            <h1 className="heading">Skills</h1>
            <div>
                <h2 className="heading2">Languages</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/html.png" name="HTML" />
                    <SkillsItem src="/images/skills/css.png" name="CSS" />
                    <SkillsItem src="/images/skills/js.png" name="JavaScript" />
                    <SkillsItem src="/images/skills/solidity.png" name="Solidity" />
                </SkillsList>
            </div>
            <div>
                <h2 className="heading2">Frameworks & Libraries</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/react.png" name="React JS" />
                    <SkillsItem src="/images/skills/next.png" name="Next JS" />
                    <SkillsItem src="/images/skills/node.png" name="Node JS" />
                    <SkillsItem src="/images/skills/bootstrap.png" name="Bootstrap" />
                    <SkillsItem src="/images/skills/sass.png" name="Sass" />
                </SkillsList>
            </div>
            <div>
                <h2 className="heading2">Databases</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/mongodb.png" name="MongoDB" />
                    <SkillsItem src="/images/skills/postgres.png" name="PostgreSQL" />
                    <SkillsItem src="/images/skills/mysql.png" name="MySQL" />
                </SkillsList>
            </div>
            <div>
                <h2 className="heading2">Other Technologies</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/git.png" name="Git" />
                    <SkillsItem src="/images/skills/wordpress.png" name="Wordpress" />
                    <SkillsItem src="/images/skills/do.png" name="Digital Ocean" />
                    <SkillsItem src="/images/skills/linode.png" name="Linode" />
                    <SkillsItem src="/images/skills/metamask.png" name="Metamask" />
                </SkillsList>
            </div>
        </div>
    )
}

export default Skills