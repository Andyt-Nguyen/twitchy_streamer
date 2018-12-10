import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <nav className={"ui secondary pointing menu"}>
        <Link to="/" className={"item"}>
            Streamer
        </Link>

        <Link to="/" className={"item"}>
            <div className={"right menu"}>
                All Streams
            </div>
        </Link>
    </nav>
)