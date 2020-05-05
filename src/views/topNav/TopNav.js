import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./TopNav.css";

class TopNav extends Component{
    render() {
        return (
            <div>
                <h2>Job Dashboard</h2>
                <header className="topNavHeader">
                    <Link className="link" to="/">Dashboard</Link>
                    <div className="link"> | </div>
                    <Link className="link" to="/resume">Resume</Link>
                </header>
            </div>
        )
    }
}

export default TopNav;