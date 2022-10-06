import React from "react";
import './style.css';

const SignupForm = () => {

  return (
    <div className="modal">
      <form className="modal-content">
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label for="name"><b>Name*</b></label>
          <input type="text" placeholder="Enter Name" name="name" required></input>
          <label for="email"><b>Email*</b></label>
          <input type="email" placeholder="Enter Email" name="email" required></input>
          <label for="age"><b>Age(Optional)</b></label>
          <input type="number" placeholder="Enter Your Age" name="age" ></input>
          <label for="ocuppation"><b>Occupation(Optional)</b></label>
          <input type="text" placeholder="Enter Your Occupation" name="occupation"></input>
          <label for="currentlyemployed"><b>Currently Employed?(Optional)</b></label>
          <input type="text" placeholder="Are you Currently employed? Yes or No" name="currentlyemployed" ></input>
          <label for="yearsOfEmployment"><b>Years of Employment(Optional)</b></label>
          <input type="number" placeholder="How many years of experience do you have?" name="yearsOfEmployment"></input>
          <label for="address"><b>Address(Optional</b></label>
          <input type="text" placeholder="Enter Address" name="address"></input>
          <div className="clearfix">
            <button type="submit" className="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;