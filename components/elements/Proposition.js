import {useEffect, useRef} from "react";
import styles from "../../styles/Hero.module.scss"
import Typed from "typed.js";

function Proposition() {

    const el = useRef(null);

    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'who has results-oriented problem solving skills.',
                'who is self driven with an undying passion for code.',
                'who has proven adaptability to different business and cultural environments.'
            ],
            typeSpeed: 70,
            backSpeed: 50,
            loop: Infinity,
            backDelay: 4000,
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        }
    }, [])

    return (
        <>
            <h1 id={styles.staticText}>Hi there, {`I'm`} Faiz Ahmed, <br/> a full stack software developer</h1>
            <div id={styles.changingText}>
                <span ref={el} />
            </div>
        </>
    )
}

export default Proposition