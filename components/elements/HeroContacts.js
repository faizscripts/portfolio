import {useEffect, useRef} from "react";
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
        <div id="contact">
            <a href="tel:+254705063256">
                <button ref={callRef} className="icons" aria-label="Call">
                    <FontAwesomeIcon icon={faMobileScreenButton} className="default"/>
                </button>
            </a>
            <a href="mailto:4faizahmed@gmail.com">
                <button ref={mailRef} className="icons" aria-label="Email">
                    <FontAwesomeIcon icon={faEnvelope} className="default"/>
                </button>
            </a>
            <a href="https://github.com/faizscripts" target="_blank" rel="noreferrer">
                <button ref={githubRef} className="icons" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} className="default"/>
                </button>
            </a>
            <a href="https://wa.me/254705063256" target="_blank" rel="noreferrer">
                <button ref={whatsappRef} className="icons" aria-label="Whatsapp">
                    <FontAwesomeIcon icon={faWhatsapp} className="whatsapp"/>
                </button>
            </a>
            <a href="https://twitter.com/faizscripts" target="_blank" rel="noreferrer">
                <button ref={twitterRef} className="icons" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} className="twitter"/>
                </button>
            </a>
            <a href="https://www.linkedin.com/in/faizscripts/" target="_blank" rel="noreferrer">
                <button ref={linkedInRef} className="icons" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} className="linked"/>
                </button>
            </a>
        </div>
    )
}

export default HeroContacts