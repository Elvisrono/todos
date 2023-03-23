import React from "react"
import { Navlink } from 'react-router-dom'
function Navbar() {
    return (
        <div className="nav">
            <div className="logo">
                <h1>Todos</h1>
            </div>
            <div className="links">
                <Navlink to="/">Home</Navlink>
                <Navlink to="/todos">Todos</Navlink>
            </div>
        </div>
    )
}

export default Navbar