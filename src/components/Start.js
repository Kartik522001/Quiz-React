import React from 'react'
import logo from '../start.png';
import { Link } from 'react-router-dom'

export const Start = () => {
    return (
        <div className="valign_wrapper">
            <div className="start">
                <img src={logo} alt="No" className="animated fadeIn dealy-2s"
                    style={{ width: "200px", hegiht: "200px" }} />

                <Link to="/start" className="btn-light animated fadeInUp">
                    Start Quiz
                </Link>

            </div>
        </div>
    )
}

export default Start;