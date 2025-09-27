import Image from "next/image";
import me from "../../public/images/me.webp"

function MyImage() {
    return(<Image src={me} alt="me" placeholder="blur" fill />)
}

export default MyImage
