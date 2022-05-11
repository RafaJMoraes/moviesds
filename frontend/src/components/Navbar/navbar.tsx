import {ReactComponent as GitHubIcon} from "../../assets/img/github.svg"

function Navbar(){
    /** Formato jsx - Html com componentes react dentro dele */
    return (
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>Movies ds</h1>
                <a href="https://github.com/RafaJMoraes">
                <div>
                  <GitHubIcon />
                  <p>/RafaelJmoraees</p>
                </div>
                </a>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;