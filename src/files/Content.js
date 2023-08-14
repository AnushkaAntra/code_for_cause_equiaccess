import { Link } from "react-router-dom";
import arrow from "../images/arrow.png";
import profile1 from "../images/profile1.jpg";
import Typewriter from "./Typewriter";

const Content = () => {
    return ( 
        <div className="Content">
            <div className="about">
                <div className="head">
                    <h1>Disabled & Proud</h1>
                </div>
                <div className="para">
                    <p><b style = {{ color: "#3AACB9"}}>SkyLash</b>, a user-friendly website that bridges the communication gap between specially abled, who use sign language and no-sign language speakers. With a categorized collection of common phrases and personalized sentence option.</p>
                    <p><Typewriter text="SkyLash simplifies the life of specially able by empowering them to accomplish tasks effeciently with just few taps." delay = {60} /></p>
                </div>
                <div className="button">
                    <Link to = "/dashboard"><button>Try it <img src = {arrow} alt="go" /></button></Link>
                </div>
            </div>
            <div className="image">
                    <img src={profile1} alt="profile" />
            </div>
        </div>
     );
}
 
export default Content;