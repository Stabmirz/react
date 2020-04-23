import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white" style={{fontSize:"22px", fontWeight:"900"}}>
            <div className="collapse navbar-collapse flex-row-reverse mr-5" id="navbarSupportedContent">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/books">Books</Link>
                    <Link className="nav-item nav-link" to="/form">User Form</Link>
                    <Link className="nav-item nav-link" to="/posts">Posts</Link>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBar;