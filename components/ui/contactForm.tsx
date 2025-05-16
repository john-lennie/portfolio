import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mdkgbdel");

  if (state.succeeded) {
    return (
      <p className="text-xs">Thanks!<br /><br />
        We'll get back to you within 1-3 business days.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className="field"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="field resize-none"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" className="btn-primary" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
