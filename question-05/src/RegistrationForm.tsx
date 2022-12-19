import React, { useState } from "react";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [firstNameSubmitted, setFirstNameSubmitted] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [lastNameSubmitted, setLastNameSubmitted] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const isEmpty = (value: string) => {
    return value === "";
  };

  const validateFirstName = () => {
    if (isEmpty(firstName)) {
      setFirstNameError("Please enter the first name.");
    } else {
      setFirstNameError("");
    }
  };

  const validateLastName = () => {
    if (isEmpty(lastName)) {
      setLastNameError("Please enter the first name.");
    } else {
      setLastNameError("");
    }
  };

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = event.target.value;
    setFirstName(value);
    validateFirstName();
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setLastName(value);
    validateLastName();
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateFirstName();
    validateLastName();

    if (isEmpty(firstName)) {
      setRegistrationSuccess(false);
      return;
    }

    if (isEmpty(lastName)) {
      setRegistrationSuccess(false);
      return;
    }

    setFirstNameSubmitted(firstName);
    setLastNameSubmitted(lastName);
    setRegistrationSuccess(true);
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleFormSubmit}>
        <p>
          <label htmlFor="firstNameBox">First Name: </label>
          <input
            type="text"
            id="firstNameBox"
            name="firstNameBox"
            onChange={handleFirstNameChange}
            value={firstName}
          />
          {firstNameError !== "" && (
            <span className="error" id="firstNameError">
              Please enter the first name.
            </span>
          )}
        </p>
        <p>
          <label htmlFor="lastNameBox">Last Name: </label>
          <input
            type="text"
            id="lastNameBox"
            name="lastNameBox"
            onChange={handleLastNameChange}
            value={lastName}
          />
          {lastNameError !== "" && (
            <span className="error" id="lastNameError">
              Please enter the last name.
            </span>
          )}
        </p>
        <p>
          <button id="register">Register</button>
        </p>
      </form>
      {registrationSuccess && (
        <div id="registrationStatus">
          <h2>Registration Details</h2>
          <p id="firstNameStatus">First Name: {firstNameSubmitted}</p>
          <p id="lastNameStatus">Last Name: {lastNameSubmitted}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
