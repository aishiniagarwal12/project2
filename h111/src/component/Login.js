import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login =()=>{
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        navigate('/Home')
      };
    return(
        <div classname="main">
        <h2>login </h2>
         <form onSubmit={handlesubmit}>
        <div classname="form-group">
           <label htmlfor="email">Email</label><br></br>
           <input type="email" id="email" name="Email" placeholder="YOUR EMAIL"required/></div><br></br>
           <div classname="form-group">
           <label htmlfor="password">Password</label><br></br>
           <input type="password" id="passsowrd" name="Password" placeholder="your password"required/></div><br></br>
           <button type="submit">Login</button>
           </form>
           </div>

    );
};
export default Login;