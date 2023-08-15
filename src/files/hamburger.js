import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import profile_logo from "../images/profile_logo.png";

//toogle the sidebar
const Hamburger = () => {
    const myStyle = {
        width: "4.5rem",
        height: "100%",
        position: "fixed"
    };
    useEffect(() => {
        // Initialize tooltips after the component is mounted
        const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltips.forEach((tooltip) => new window.bootstrap.Tooltip(tooltip));
    }, []);

    return ( 
        <div className="hamburger">
            <div class="d-flex flex-column flex-shrink-0 bg-dark" style={myStyle}>
                <a href="/" class="d-block p-1 link-dark text-decoration-none" title="">
                    <svg class="bi me-2" width="40" height="32"></svg>
                    <span class="text-light fs-6 ">SkyLash</span>
                </a>
                <a href="/" class="d-block p-3 link-dark text-decoration-none" title="">
                    <Link to="/dashboard"><img src="https://cdn-icons-png.flaticon.com/128/2791/2791853.png" width="50" height="40" /></Link>
                </a>
                <ul class="nav nav-pills nav-flush flex-column mb-auto text-center bg-dark">
                    <li class="nav-item">
                        <a href="#" class="nav-link  py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                            <img src="https://cdn-icons-png.flaticon.com/128/9073/9073243.png" alt="Home" width="24" height="24" />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828673.png" alt="dashboard" width="24" height="24" />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                            <img src="https://cdn-icons-png.flaticon.com/128/7184/7184257.png" alt="microphone" width="24" height="24" />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                            <img src="https://cdn-icons-png.flaticon.com/128/813/813357.png" alt="feedback" width="24" height="24" />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                            <img src="https://cdn-icons-png.flaticon.com/128/189/189665.png" alt="help" width="24" height="24" />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                            <img src="https://cdn-icons-png.flaticon.com/128/3039/3039498.png" alt="settings" width="24" height="24" />
                        </a>
                    </li>
                </ul>
                <div class="dropdown border-top">
                    <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown">
                        <img src={profile_logo} alt="profile" width="24" height="24" class="rounded-circle" />
                    </a>
                    <ul class="dropdown-menu text-small shadow">
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><hr class="dropdown-divider" width="24" height="24" /></li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Hamburger;