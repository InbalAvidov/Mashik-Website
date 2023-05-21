import { NavLink } from "react-router-dom";

import logo from '../assets/imgs/logo.jpg'

export function AppNav() {
    return (
        <nav className="app-nav full main-layout">
            <ul>
                <li className="logo">
                    <img src={logo}/>
                </li>
                <li><NavLink to="/">
                        דף הבית
                    </NavLink></li>
                <li><NavLink to="/about">
                    אודות
                </NavLink></li>
                <li><NavLink to="/projects">
                תחומי פעילות
                </NavLink></li>
                <li><NavLink to="/clients">
                    לקוחות
                </NavLink></li>
                <li><NavLink to="/contact">
                    צור קשר
                </NavLink></li>

            </ul>
        </nav>
    )
}