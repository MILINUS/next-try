import React, { useState } from "react";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <p className="success-message">Votre Message a été envoyé avec succés.</p>
  );
};

function ContactOutForm({ props, formStyle }) {
  const [result, showresult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t1fcovk",
        "template_vbhtpji",
        e.target,
        "b9r76JTuifJB_8t2H"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  return (
    <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
      <div className="form-group">
        <input
          style={{ borderColor: "black", borderWidth: 0.5 }}
          type="text"
          name="fullname"
          placeholder="Votre Nom"
          required
        />
      </div>

      <div className="form-group">
        <input
          style={{ borderColor: "black", borderWidth: 0.5 }}
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
      </div>

      <div className="form-group">
        <input
          style={{ borderColor: "black", borderWidth: 0.5 }}
          type="text"
          name="phone"
          placeholder="Numero de telephone"
          required
        />
      </div>

      <div className="form-group">
        <input
          style={{ borderColor: "black", borderWidth: 0.5 }}
          type="text"
          name="subject"
          placeholder="Sujet de la demande"
          required
        />
      </div>

      <div className="form-group">
        <textarea
          style={{ borderColor: "black", borderWidth: 0.5 }}
          name="message"
          placeholder="Votre Message"
          required
        ></textarea>
      </div>

      <div className="form-group">
        <button className="searchButton">Soumettre Votre Demande</button>
      </div>

      <div className="form-group">{result ? <Result /> : null}</div>
    </form>
  );
}
export default ContactOutForm;
