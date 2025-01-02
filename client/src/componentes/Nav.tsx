import {Link} from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
    return (
        <nav className="navbar">
            <Link to="/">Cookbook</Link>
        </nav>
    );
}

export default Nav;
