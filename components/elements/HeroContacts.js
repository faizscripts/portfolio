import {useEffect, useRef} from "react";
import styles from "../../styles/Hero.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

function HeroContacts() {

    const callRef = useRef();
    const mailRef = useRef();
    const whatsappRef = useRef();
    const twitterRef = useRef();
    const linkedInRef = useRef();
    const githubRef = useRef();

    const setToolTip = (ref, title) => {
        let toolTip = new window.bootstrap.Tooltip(ref.current, {
            title: title,
            placement: 'top',
            trigger: 'hover'
        })
    }

    useEffect(() => {
        window.bootstrap = require('bootstrap');
        setToolTip(callRef, "Call")
        setToolTip(mailRef, "Email")
        setToolTip(whatsappRef, "Whatsapp")
        setToolTip(twitterRef, "Twitter")
        setToolTip(linkedInRef, "LinkedIn")
        setToolTip(githubRef, "GitHub")
    })

    return (
        <div id={styles.contact}>
            <a href="tel:+254705063256">
                <button ref={callRef} className={styles.icons}>
                    <FontAwesomeIcon icon={faMobileScreenButton} className={styles.call}/>
                </button>
            </a>
            <a href="mailto:4faizahmed@gmail.com">
                <button ref={mailRef} className={styles.icons}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.mail}/>
                </button>
            </a>
            <a href="https://wa.me/254705063256" target="_blank" rel="noreferrer">
                <button ref={whatsappRef} className={styles.icons}>
                    <FontAwesomeIcon icon={faWhatsapp} className={styles.whatsapp}/>
                </button>
            </a>
            <a href="https://twitter.com/faizscripts" target="_blank" rel="noreferrer">
                <button ref={twitterRef} className={styles.icons}>
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitter}/>
                </button>
            </a>
            <a href="https://www.linkedin.com/in/faiz-ahmed-5ab027170/" target="_blank" rel="noreferrer">
                <button ref={linkedInRef} className={styles.icons}>
                    <FontAwesomeIcon icon={faLinkedin} className={styles.linked}/>
                </button>
            </a>
            <a href="https://github.com/faizscripts" target="_blank" rel="noreferrer">
                <button ref={githubRef} className={styles.icons}>
                    <FontAwesomeIcon icon={faGithub} className={styles.git}/>
                </button>
            </a>
        </div>
    )
}

export default HeroContacts