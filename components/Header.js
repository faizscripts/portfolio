import {useEffect, useState} from "react";
import Link from "next/link"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'
import {faSun} from "@fortawesome/free-solid-svg-icons";

function Header() {

    const [stateTheme, setStateTheme] = useState("")

    useEffect(() => {
        getDefaultTheme()
    }, [])

    const getDefaultTheme = () => {
        const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setStateTheme(theme)
    }

    const loadTheme = (theme) => {
        const root = document.querySelector(':root');
        root.setAttribute('color-scheme', `${theme}`);
        setStateTheme(theme)
    }
    
    const changeTheme = () => {
        let theme = stateTheme;
        let audio;
        if(theme === 'dark'){
            audio = document.querySelector('.audio-light-on');
            theme = 'light';
        } else {
            audio = document.querySelector('.audio-light-off');
            theme = 'dark';
        }
        audio.currentTime = 0;
        audio.play();
        loadTheme(theme);
    }

    return (
        <nav className={`navbar navbar-expand-lg ${stateTheme === "light" ? "navbar-light bg-light" : "navbar-dark bg-dark"}`} id="navbar">
            <div className="container-fluid flex-lg-row-reverse">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <button className="btn nav-item" id="theme-btn" onClick={changeTheme}>
                    <FontAwesomeIcon icon={stateTheme === "light" ? faMoon : faSun }/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="#">
                                <a className="nav-link">About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#">
                                <a className="nav-link">Skills</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#">
                                <a className="nav-link">Projects</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#">
                                <a className="nav-link">Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <audio src="/audio/light-on.mp3" className="audio-light-on"
                   data-attribute="adapted from user 160033 file on freesound.org https://freesound.org/people/160033/sounds/366184/ under CC BY-NC 3.0"></audio>
            <audio src="/audio/light-off.mp3" className="audio-light-off"
                   data-attribute="adapted from user 160033 file on freesound.org https://freesound.org/people/160033/sounds/366184/ under CC BY-NC 3.0"></audio>
        </nav>
    )
}

export default Header