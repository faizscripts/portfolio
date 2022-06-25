import styles from "../styles/Hero.module.scss"
import Proposition from "./elements/Proposition";
import MyImage from "./elements/MyImage";
import HeroContacts from "./elements/HeroContacts";

function Hero() {

    return(
        <div className="container-fluid" >
            <div className="row" id={styles.main} >
                <div className="col-xl-9 col-md-8" id={styles.bigColumn}>
                    <Proposition />
                    <HeroContacts />
                </div>
                <div className="col-xl-3 col-md-4" id={styles.smallColumn}>
                    <MyImage />
                </div>
            </div>
        </div>
    )
}

export default Hero