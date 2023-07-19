import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import profile from '../images/profile_logo.png';

const Navbar = () => {

    return ( 
        <div className="Navbar">
            <div className="nav">
                <div className="logo">
                    <img src = {logo} alt = "logo" />
                </div>
                <div className="links">
                    <Link to = "/Home">Home</Link>
                    <Link to = "/Home">Settings</Link>
                    <Link to = "/Home">FAQs</Link>
                    <Link to = "/Home">
                        <img src = {profile} alt="profile" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;