import React, { useState } from "react";
import { send } from "emailjs-com";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    send("service_25b3wln", "template_4j26bg9", formState, "J2kya98j0amykJJ2g")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);

        e.target.reset();
        setErrorMessage("Your email was sent succesfully.");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setErrorMessage("Your email was not sent.");
      });

    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  // Adding the event handler function.
  function handlemouseout(e) {
    if (e.target.value === "") {
      setErrorMessage(e.target.name + " is required.");
    }
  }

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
            onMouseOut={handlemouseout}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
            onMouseOut={handlemouseout}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
            onMouseOut={handlemouseout}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <button data-testid="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
