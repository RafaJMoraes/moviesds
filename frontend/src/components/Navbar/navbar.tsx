import {ReactComponent as GitHubIcon} from "assets/img/github.svg"
import './styles.css'

function Navbar(){
    /** Formato jsx - Html com componentes react dentro dele */
    return (
        <header>
        <nav className="container">
            <div className="moviesds-nav-content">
                <h1>Moviesds</h1>
                <a href="https://github.com/RafaJMoraes">
                <div className="moviesds-contact-name">
                  <GitHubIcon />
                  <p className="moviesds-contact-link">/RafaelJmoraes</p>
                </div>
                </a>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;