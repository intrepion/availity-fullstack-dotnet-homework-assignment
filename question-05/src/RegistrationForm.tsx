import React from "react";

function RegistrationForm() {

    return (
        <div>
            <h1>Registration</h1>
            <form>
                <label htmlFor="firstNameBox">First Name: </label>
                <input type="text" id="firstNameBox" name="firstNameBox" />
                <span id="firstNameError">Please enter the first name.</span>
                <button id="register">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;