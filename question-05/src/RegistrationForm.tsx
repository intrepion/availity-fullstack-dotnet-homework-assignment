import React, { useState } from "react";

function RegistrationForm() {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [firstNameSubmitted, setFirstNameSubmitted] = useState("");
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const isEmpty = (value: string) => {
        return value === "";
    }

    const validateFirstName = () => {
        if (isEmpty(firstName)) {
            setFirstNameError("Please enter the first name.");
        } else {
            setFirstNameError("");
        }
    }

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setFirstName(value);
        validateFirstName();
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        validateFirstName();
        if (isEmpty(firstName)) {
            setRegistrationSuccess(false);
        } else {
            setFirstNameSubmitted(firstName);
            setRegistrationSuccess(true);
        }
    }

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleFormSubmit}>
                <p>
                    <label htmlFor="firstNameBox">First Name: </label>
                    <input type="text" id="firstNameBox" name="firstNameBox" onChange={handleFirstNameChange} value={firstName} />
                </p>
                <p>
                    {firstNameError !== "" && <span id="firstNameError">Please enter the first name.</span>}
                </p>
                <p>
                    <button id="register">Register</button>
                </p>
            </form>
            {registrationSuccess && 
                <div id="registrationStatus">
                    <h2>Registration Details</h2>
                    <p id="firstNameStatus">First Name: {firstNameSubmitted}</p>
                </div>}
        </div>
    );
}

export default RegistrationForm;