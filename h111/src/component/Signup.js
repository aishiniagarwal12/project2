import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../common/Signup.css';
const {signup}=require('../services/Apiservices');

 export const Signup=()=>{
    const navigate= useNavigate();
    const [formData,setFormData]=useState({ 
        firstName:'',
        lastname:'',
        email:'',
        password:''
    });
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };
    
    const handlesubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await signup(formData)
        alert("signup successful");
        navigate('/login');
        }catch(error)
        {
            alert('error during signup,please try again')
        }};
    return(
        <div className='main'>      
        <h3>Signup form</h3>
        <form onSubmit={handlesubmit}>
        <div className="form-group">
            <label htmlFor="fname">firstName</label><br></br>
            <input type="text" id="fname" name="firstName"placeholder="your first name" value={formData.firstName} onChange={handleChange}required/></div><br></br>
            <div className="form-group">
           <label htmlFor="lname">lastname</label><br></br>
           <input type="text" id="lname" name="lastname" placeholder="your last name"  value={formData.lastname} onChange={handleChange} required /></div><br></br>
           <div className="form-group">
           <label htmlFor="email">email</label><br></br>
           <input type="email" id="email" name="email" placeholder="YOUR EMAIL" value={formData.email} onChange={handleChange}required/></div><br></br>
           <div className="form-group">
           <label htmlFor="password">password</label><br></br>
           <input type="password" id="passsowrd" name="password" placeholder="your password"value={formData.password} onChange={handleChange} required/></div><br></br>
           {/* <div classname="form-group">
           <label htmlfor="password">Confirm password</label><br></br>
           <input type="password" id="passsowrd" name="Password" placeholder="your password"required/></div><br></br>
           <div classname="form-group">
            <label htmlfor="select">Select your gender</label><br></br>
            <input type="radio"value="male" name="gender" id="select"/>male<br></br>
            <input type="radio" value="female" name="gender" id="select"/>female</div><br></br>
           <div classname="form-group">
            <label htmlfor="date">Please tell your date</label><br></br>
            <input type="date" name="date" id="date" required/></div><br></br>
           <div classname="form-group">
            <p>Select your country</p>
            <select name="country"id="country">
            <option value="INDIA">INDIA</option>
            <option value="SRI LANKA">SRI LANKA</option>
            <option value="AUSTRIA">AUSTRIA</option>
            <option value="BRAZIL">BRAZIL</option>
            <option value="RUSSIA">RUSSIA</option>
            <option value="JAPAN">JAPAN</option>
            <option value="MEXICO">MEXICO</option>
            </select></div><br></br> */}
            <button type="submit">Signup</button><br></br>
          </form>
        </div>
    );

};
export default Signup;
