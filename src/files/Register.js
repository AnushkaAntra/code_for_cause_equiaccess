import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import facebook_logo from '../images/facebook logo.png';
import google_logo from '../images/google logo.png';
import twitter_logo from '../images/twitter_logo.png';

const Register = () => {
    const History = useHistory(); 
    const next_page = () =>{
        History.push("/Home");
    }
    return ( 
        <div className="Register">
            <div className="form">
                <form>
                    <h2>Register Here</h2>
                    <div className='accounts'>
                        <img src = {google_logo} alt="google" />
                        <img src = {facebook_logo} alt="facebook" />
                        <img src = {twitter_logo} alt="twitter" />  
                    </div>
                    <input type = "text" placeholder='Name' required/>
                    <input type = "email" placeholder='E-mail' required/>
                    <input type = "password" placeholder='Password' required/>
                    <input type = "text" placeholder='Phone No' required/>
                    <button onClick = {next_page}>Register</button>
                    <p>Already have an account? <Link to="/Login">Login</Link></p>
                </form>
            </div>
        </div>
     );
}
 
export default Register;