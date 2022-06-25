import Link from "next/link"
import styles from "../styles/Layout.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg" id={styles.navbar}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0" id={styles.navLink}>
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
                    <button className="btn nav-item" id={styles.theme}>
                        <FontAwesomeIcon icon={faMoon} /> Theme
                    </button>
            </div>
        </nav>
    )
}

export default Header