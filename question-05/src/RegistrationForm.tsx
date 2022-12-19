import React, { useState } from "react";
import utilities from "./utilities";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [firstNameSubmitted, setFirstNameSubmitted] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [lastNameSubmitted, setLastNameSubmitted] = useState("");
  const [npiNumber, setNpiNumber] = useState("");
  const [npiNumberError, setNpiNumberError] = useState("");
  const [npiNumberSubmitted, setNpiNumberSubmitted] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const isEmpty = (value: string) => {
    return value === "";
  };

  const validateFirstName = () => {
    if (isEmpty(firstName)) {
      setFirstNameError("Please enter first name.");
    } else {
      setFirstNameError("");
    }
  };

  const validateLastName = () => {
    if (isEmpty(lastName)) {
      setLastNameError("Please enter last name.");
    } else {
      setLastNameError("");
    }
  };

  const validateNpiNumber = () => {
    if (utilities.validateNpi(npiNumber)) {
        setNpiNumberError("");
    } else {
        setNpiNumberError("Please enter valid NPI number. It should be all digits and exactly 10 digits long.");
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

  const handleNpiNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setNpiNumber(value);
    validateNpiNumber();
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateFirstName();
    validateLastName();
    validateNpiNumber();

    if (isEmpty(firstName)) {
      setRegistrationSuccess(false);
      return;
    }

    if (isEmpty(lastName)) {
      setRegistrationSuccess(false);
      return;
    }

    if (!utilities.validateNpi(npiNumber)) {
        setRegistrationSuccess(false);
        return;
    }
  
    setFirstNameSubmitted(firstName);
    setLastNameSubmitted(lastName);
    setNpiNumberSubmitted(npiNumber);
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
              {firstNameError}
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
              {lastNameError}
            </span>
          )}
        </p>
        <p>
          <label htmlFor="npiNumberBox">NPI Number: </label>
          <input
            type="text"
            id="npiNumberBox"
            name="npiNumberBox"
            onChange={handleNpiNumberChange}
            value={npiNumber}
          />
          {npiNumberError !== "" && (
            <span className="error" id="npiNumberError">
              {npiNumberError}
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
          <p id="npiNumberStatus">NPI Number: {npiNumberSubmitted}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;

