import React, {useState} from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import './style.css';

const SignupForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    age: '',
    occupation: '',
    currentlyemployed: '',
    yearsOfEmployment: '',
    error: '',
    address: '',
    redirectToReferrer: false
  });

  const {
    name,
    email,
    age,
    occupation,
    currentlyemployed,
    yearsOfEmployment,
    address,
    redirectToReferrer
  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({...values, error: false});
    axios.post('/api/register', values)
    .then(data => {
      if(data.error){
        setValues({...values, error: data.error })
      }else {
        setValues({
          ...values,
          name: '',
          email: '',
          age: '',
          occupation: '',
          currentlyemployed: '',
          yearsOfEmployment: '',
          error: '',
          address: '',
          redirectToReferrer: true
        });
      }
    })

  };

  const redirectUser = () => {
   if(redirectToReferrer){
    return <Navigate to='/scores' />
   } else {
    return <Navigate to='/' />
   }
  };

  const handleChange = name => e => {
    setValues({
        ...values, 
        error: false, 
        [name]: e.target.value
    })
  };
  
  const signupForm = () => {
      
    return (
      <div className="modal">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label for="name"><b>Name*</b></label>
            <input 
              type="text" 
              placeholder="Enter Name" 
              name="name" 
              onChange={handleChange('name')}
              value={name}
              required
            ></input>
            <label for="email"><b>Email*</b></label>
            <input 
              type="email" 
              placeholder="Enter Email" 
              name="email" 
              onChange={handleChange('email')}
              value={email}
              required
            ></input>
            <label for="age"><b>Age(Optional)</b></label>
            <input 
              type="number" 
              placeholder="Enter Your Age" 
              name="age" 
              onChange={handleChange('age')}
              value={age}
            ></input>
            <label for="ocuppation"><b>Occupation(Optional)</b></label>
            <input 
              type="text" 
              placeholder="Enter Your Occupation" 
              name="occupation"
              onChange={handleChange('occupation')}
              value={occupation}
            ></input>
            <label for="currentlyemployed"><b>Currently Employed?(Optional)</b></label>
            <input 
              type="text" 
              placeholder="Are you Currently employed? Yes or No" 
              name="currentlyemployed" 
              onChange={handleChange('currentlyemployed')}
              value={currentlyemployed}
            ></input>
            <label for="yearsOfEmployment"><b>Years of Employment(Optional)</b></label>
            <input 
              type="number" 
              placeholder="How many years of experience do you have?" 
              name="yearsOfEmployment"
              onChange={handleChange('yearsOfEmployment')}
              value= {yearsOfEmployment}
            ></input>
            <label for="address"><b>Address(Optional)</b></label>
            <input 
              type="text" 
              placeholder="Enter Address" 
              name="address"
              onChange={handleChange('address')}
              value={address}
            ></input>
            <div className="clearfix">
              <button type="submit" className="signupbtn">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div>
      {signupForm()}
      {redirectUser()}
    </div>
  )
};

export default SignupForm;