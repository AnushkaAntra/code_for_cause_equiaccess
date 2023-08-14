import React from 'react';
import { Link } from "react-router-dom";
import profile_logo from "../images/profile_logo.png";

const sidebar = () => {
    const myStyle = {
        width: "280px",
        height: "100%",
        position: "fixed"
    };
    return ( 
        <div className="sidebar">
            <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={myStyle}>
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg class="bi me-2" width="40" height="32"></svg>
                    <span class="fs-4">SkyLash</span>
                    <svg class="bi me-2" width="40" height="32"></svg>
                    <Link to="/dashboard_1"><img src="https://cdn-icons-png.flaticon.com/128/2791/2791853.png" width="32"/></Link>
                </a>
                <hr />
                <ul class="nav nav-pills flex-column mb-auto bg-dark">
                    <li class="nav-item mb-2">
                        <a href="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"></svg>
                            Home
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="nav-link active" aria-current="page">
                            <svg class="bi me-2" width="16" height="16"></svg>
                            Dashboard
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"></svg>
                            Prebuilt sentences
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"></svg>
                            Voice-to-Text
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"></svg>
                            Feedback
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"></svg>
                            Help
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"></svg>
                            Settings
                        </a>
                    </li>
                </ul>
                <hr />
                <div class="dropdown">
                    <a href="#" class="d-flex align-items-center text-decoration-none text-white dropdown-toggle" data-bs-toggle="dropdown">
                        <img src={profile_logo} alt="" width="32" height="32" class="rounded-circle me-2" />
                        <strong>user</strong>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
           </div>
        </div>
     );
}
 
export default sidebar;