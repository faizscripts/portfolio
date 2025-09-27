import SkillsList from "./elements/SkillsList";
import SkillsItem from "./elements/SkillsItem";

function Skills() {
    return (
        <div id="skills">
            <h1 className="heading" data-aos="fade-up">Skills</h1>
            <div>
                <h2 className="heading2" data-aos="fade-up">Languages</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/ts.webp" name="TypeScript" />
                    <SkillsItem src="/images/skills/js.webp" name="JavaScript" />
                </SkillsList>
            </div>
            <div>
                <h2 className="heading2" data-aos="fade-up">Frameworks & Libraries</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/angular.webp" name="Angular" />
                    <SkillsItem src="/images/skills/react.webp" name="React.js" />
                    <SkillsItem src="/images/skills/next.webp" name="Next.js" />
                    <SkillsItem src="/images/skills/node.webp" name="Node.js" />
                    <SkillsItem src="/images/skills/redux.webp" name="Redux" />
                    <SkillsItem src="/images/skills/tailwind.webp" name="Tailwind" />
                </SkillsList>
            </div>
            <div>
                <h2 className="heading2" data-aos="fade-up">Tooling</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/git.webp" name="Git" />
                    <SkillsItem src="/images/skills/figma.webp" name="Figma" />
                    <SkillsItem src="/images/skills/jira.webp" name="Jira" />
                    <SkillsItem src="/images/skills/rest.webp" name="Rest API" />
                </SkillsList>
            </div>
        </div>
    )
}

export default Skills
