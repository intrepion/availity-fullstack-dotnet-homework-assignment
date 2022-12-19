import React, { useState } from "react";
import utilities from "./utilities";

function RegistrationForm() {
  const [firstAndLastName, setFirstAndLastName] = useState("");
  const [firstAndLastNameError, setFirstAndLastNameError] = useState("");
  const [firstAndLastNameSubmitted, setFirstAndLastNameSubmitted] = useState("");
  const [npiNumber, setNpiNumber] = useState("");
  const [npiNumberError, setNpiNumberError] = useState("");
  const [npiNumberSubmitted, setNpiNumberSubmitted] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [businessAddressError, setBusinessAddressError] = useState("");
  const [businessAddressSubmitted, setBusinessAddressSubmitted] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [telephoneNumberError, setTelephoneNumberError] = useState("");
  const [telephoneNumberSubmitted, setTelephoneNumberSubmitted] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [emailAddressError, setEmailAddressError] = useState("");
  const [emailAddressSubmitted, setEmailAddressSubmitted] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const isEmpty = (value: string) => {
    return value === "";
  };

  const validateFirstAndLastName = (value: string) => {
    if (isEmpty(value)) {
      setFirstAndLastNameError("Please enter first and last name.");
    } else {
      setFirstAndLastNameError("");
    }
  };

  const validateNpiNumber = (value: string) => {
    if (utilities.validateNpi(value)) {
      setNpiNumberError("");
    } else {
      setNpiNumberError(
        "Please enter valid NPI number. It should be all digits and exactly 10 digits long."
      );
    }
  };

  const validateBusinessAddress = (value: string) => {
    if (isEmpty(value)) {
      setBusinessAddressError("Please enter business address.");
    } else {
      setBusinessAddressError("");
    }
  };

  const validateTelephoneNumber = (value: string) => {
    if (isEmpty(value)) {
      setTelephoneNumberError("Please enter telephone number.");
    } else {
      setTelephoneNumberError("");
    }
  };

  const validateEmailAddress = (value: string) => {
    if (isEmpty(value)) {
      setEmailAddressError("Please enter email address.");
    } else {
      setEmailAddressError("");
    }
  };

  const handleFirstAndLastNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = event.target.value;
    setFirstAndLastName(value);
    validateFirstAndLastName(value);
  };

  const handleNpiNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = event.target.value;
    setNpiNumber(value);
    validateNpiNumber(value);
  };

  const handleBusinessAddressChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    let value = event.target.value;
    setBusinessAddress(value);
    validateBusinessAddress(value);
  };

  const handleTelephoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = event.target.value;
    setTelephoneNumber(value);
    validateTelephoneNumber(value);
  };

  const handleEmailAddressChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = event.target.value;
    setEmailAddress(value);
    validateEmailAddress(value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateFirstAndLastName(firstAndLastName);
    validateNpiNumber(npiNumber);
    validateBusinessAddress(businessAddress);
    validateTelephoneNumber(telephoneNumber);
    validateEmailAddress(emailAddress);

    if (isEmpty(firstAndLastName)) {
      setRegistrationSuccess(false);
      return;
    }

    if (!utilities.validateNpi(npiNumber)) {
      setRegistrationSuccess(false);
      return;
    }

    if (isEmpty(businessAddress)) {
      setRegistrationSuccess(false);
      return;
    }

    if (isEmpty(telephoneNumber)) {
      setRegistrationSuccess(false);
      return;
    }

    if (isEmpty(emailAddress)) {
      setRegistrationSuccess(false);
      return;
    }

    setFirstAndLastNameSubmitted(firstAndLastName);
    setNpiNumberSubmitted(npiNumber);
    setBusinessAddressSubmitted(businessAddress);
    setTelephoneNumberSubmitted(telephoneNumber);
    setEmailAddressSubmitted(emailAddress);
    setRegistrationSuccess(true);
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleFormSubmit}>
        <p>
          <label htmlFor="firstAndLastNameBox">First And Last Name: </label>
          <input
            type="text"
            id="firstAndLastNameBox"
            name="firstAndLastNameBox"
            onChange={handleFirstAndLastNameChange}
            value={firstAndLastName}
          />
          {firstAndLastNameError !== "" && (
            <span className="error" id="firstAndLastNameError">
              {firstAndLastNameError}
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
          <label htmlFor="businessAddressBox">Business Address: </label>
          <textarea
            id="businessAddressBox"
            name="businessAddressBox"
            onChange={handleBusinessAddressChange}
            value={businessAddress}
          />
          {businessAddressError !== "" && (
            <span className="error" id="businessAddressError">
              {businessAddressError}
            </span>
          )}
        </p>
        <p>
          <label htmlFor="telephoneNumberBox">Telephone Number: </label>
          <input
            type="text"
            id="telephoneNumberBox"
            name="telephoneNumberBox"
            onChange={handleTelephoneNumberChange}
            value={telephoneNumber}
          />
          {telephoneNumberError !== "" && (
            <span className="error" id="telephoneNumberError">
              {telephoneNumberError}
            </span>
          )}
        </p>
        <p>
          <label htmlFor="emailAddressBox">Email Address: </label>
          <input
            type="text"
            id="emailAddressBox"
            name="emailAddressBox"
            onChange={handleEmailAddressChange}
            value={emailAddress}
          />
          {emailAddressError !== "" && (
            <span className="error" id="emailAddressError">
              {emailAddressError}
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
          <p id="firstAndLastNameStatus">First And Last Name: {firstAndLastNameSubmitted}</p>
          <p id="npiNumberStatus">NPI Number: {npiNumberSubmitted}</p>
          <p id="businessAddressStatus">
            Business Address: {businessAddressSubmitted}
          </p>
          <p id="telephoneNumberStatus">
            Telephone Number: {telephoneNumberSubmitted}
          </p>
          <p id="emailAddressStatus">Email Address: {emailAddressSubmitted}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
