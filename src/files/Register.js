import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import facebook_logo from '../images/facebook logo.png';
import google_logo from '../images/google logo.png';
import twitter_logo from '../images/twitter_logo.png';

const Register = () => {
    const history = useHistory(); 
    // const next_page = () =>{
    //     History.push("/Home");
    // }
    const [form,setForm]=useState([])
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();
        console.log("login:",form)
        // alert("Added Successfully");
        
            const res=await  axios.post('http://localhost/login',form)
            if(res.data.message==="success")
            {
                console.log("success");
                alert("Added Successfully");
                history.push('/dashboard')
            }
        // } catch (error) {
        //     alert('something went wrong !')
        // }
    }
    return ( 
        <div className="Register">
            <div className="form">
                <form onSubmit={handlesubmit}>
                    <h2>Register Here</h2>
                    <div className='accounts'>
                        <img src = {google_logo} alt="google" />
                        <img src = {facebook_logo} alt="facebook" />
                        <img src = {twitter_logo} alt="twitter" />  
                    </div>
                    <div class="mb-2">
                        <input onChange={handleChange} class="form-control" id="textinput" name="name" type = "text" placeholder='Name' required/>
                    </div>
                    <div class="mb-2">
                        <input  onChange={handleChange} class="form-control" name="email" type = "email" placeholder='E-mail' required/>
                    </div>
                    <div class="mb-2">
                        <input onChange={handleChange} class="form-control" name="password" type = "password" placeholder='Password' required/>
                    </div>
                    <div class="mb-2">
                        <input onChange={handleChange} class="form-control" name="phone" type = "number" placeholder='Phone No' required/>
                    </div>
                    <div class="mb-2">
                        <button class="btn" type="submit">Register</button>
                    </div>
                    {/* <button onClick = {next_page}>Register</button> */}
                    <p>Already have an account? <Link to="/Login">Login</Link></p>
                </form>
            </div>
        </div>
     );
}
<div class="mb-3">
    <input type="text" class="form-control" placeholder="Disabled input" />
</div>
 
export default Register;