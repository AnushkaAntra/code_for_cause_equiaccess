import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import facebook_logo from '../images/facebook logo.png';
import google_logo from '../images/google logo.png';
import twitter_logo from '../images/twitter_logo.png';
import { useState } from "react";
import axios from "axios";

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
                    <input onChange={handleChange} name="name" type = "text" placeholder='Name' required/>
                    <input onChange={handleChange} name="email" type = "email" placeholder='E-mail' required/>
                    <input onChange={handleChange} name="password" type = "password" placeholder='Password' required/>
                    <input onChange={handleChange} name="phone" type = "number" placeholder='Phone No' required/>
                    <button type="submit">Register</button>
                    {/* <button onClick = {next_page}>Register</button> */}
                    <p>Already have an account? <Link to="/Login">Login</Link></p>
                </form>
            </div>
        </div>
     );
}
 
export default Register;