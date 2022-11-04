import React from 'react'
import { Link } from 'react-router-dom';
export default function Direction() {
    return (
        <div className="redirect">
            <span className="bt1">
                <Link to={`/`}>Introduction</Link>
            </span>
            <span className="bt2">
                <Link to={`/aboutme`}>About Me</Link>
            </span>
            <span className="bt3">
                <Link to={`/skills`}>My Projects</Link>
            </span>

        </div>
    )
}
