import React, { useState } from "react";

function RegistrationForm() {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
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
            setRegistrationSuccess(true);
        }
    }

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="firstNameBox">First Name: </label>
                <input type="text" id="firstNameBox" name="firstNameBox" onChange={handleFirstNameChange} value={firstName} />
                {firstNameError !== "" && <span id="firstNameError">Please enter the first name.</span>}
                <button id="register">Register</button>
            </form>
            {registrationSuccess && <h2 id="registrationStatus">Registration Details</h2>}
        </div>
    );
}

export default RegistrationForm;