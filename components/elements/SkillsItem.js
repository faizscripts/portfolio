import Image from "next/image";

function SkillsItem({src, name}) {
    return(
        <div className="col-2 skill-item">
            <Image src={src} placeholder="blur" blurDataURL={src} layout="fixed" width="89" height="89" />
            <div className=" skill-name">{name}</div>
        </div>
    )
}

export default SkillsItem