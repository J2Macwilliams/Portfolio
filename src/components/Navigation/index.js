import React from 'react'
import {NavLink} from 'react-router-dom'

const index = () => {
    return (
        <div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    )
}

export default index
