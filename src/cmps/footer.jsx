import { NavLink } from "react-router-dom";

export function Footer() {
    return (
        <div className="footer full">
            <li><NavLink to="/">
                Home
            </NavLink></li>
            <p className="buffer"> | </p>
            <li><NavLink to="/about">
                About us
            </NavLink></li>
            <p className="buffer"> | </p>
            <li><NavLink to="/projects">
                Activities
            </NavLink></li>
            <p className="buffer"> | </p>
            <li><NavLink to="/clients">
                Clients
            </NavLink></li>
            <p className="buffer"> | </p>
            <li><NavLink to="/contact">
                Contact
            </NavLink></li>
        </div>
    )
}