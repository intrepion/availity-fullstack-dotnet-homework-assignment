import React from "react";

function RegistrationForm() {

    return (
        <div>
            <h1>Registration</h1>
            <form>
                <span id="firstNameError">Please enter the first name.</span>
                <button id="register">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;