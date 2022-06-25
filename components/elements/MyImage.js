import Image from "next/image";
import me from "../../public/me.png"

function MyImage() {
    return(<Image src={me} alt="me" layout="fill" placeholder="blur" />)
}

export default MyImage