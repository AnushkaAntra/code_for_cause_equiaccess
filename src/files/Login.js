import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import facebook_logo from '../images/facebook logo.png';
import google_logo from '../images/google logo.png';
import twitter_logo from '../images/twitter_logo.png';

const Login = () => {
    const History = useHistory(); 
    const next_page = () =>{
        History.push("/Home");
    }
    return ( 
        <div className="Login">
             <div className="form">
                <form>
                    <h2>Login</h2>
                    <div className='accounts'>
                        <img src = {google_logo} alt="google" />
                        <img src = {facebook_logo} alt="facebook" />
                        <img src = {twitter_logo} alt="twitter" />  
                    </div>
                    <input type = "email" placeholder='E-mail' required/>
                    <input type = "password" placeholder='Password' required/>
                    <button onClick = {next_page}>Submit</button>
                </form>
            </div>
        </div>
    );
}
 
export default Login;