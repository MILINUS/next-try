import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <p className="success-message">
      Votre Message a été envoyé avec succés
    </p>
  );
};

function ContactForm({
  props,
  formStyle,
  carData,
  service,
  startDate,
  endDate,
  NumberOfDays,
  Price,
  arrivalLocation,
  departureLocation,
  franchise,
  isSpecialFranchise
}) {
    const [YesNo,setYesNo]=useState(null)
  const [error, setError] = useState(false);

  const setYesNotoOuiNon=()=>{
    if(isSpecialFranchise===true){
        setYesNo("Oui")
    }else{
        setYesNo("Non")
    }
  }
  useEffect(()=>{
    setYesNotoOuiNon()
})
  const checkifError = () => {
    if (arrivalLocation === "" || departureLocation === "") {
      setError(true);
    } else {
      setError(false);
    }
  };
  console.log("is ther", error);
  const [clicked, setClicked] = useState(false);
  const [result, showresult] = useState(false);
  console.log("fuck", endDate);
  useEffect(()=>{

  },[endDate])
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5yj88ss",
        service === "location de voiture"
          ? "template_l6uz127"
          : "template_gpve1tk",
        e.target,
        "b9r76JTuifJB_8t2H"
      )
      .then(
        (result) => {
          console.log("le resultat", result);
          console.log("test", e);
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
      <input style={{ display: "none" }} name="9LAWI" value={service} />
      <input style={{ display: "none" }} name="voiture" value={carData.title} />
      <input
        style={{ display: "none" }}
        name="voitureSub"
        value={carData.subtitle}
      />
      <input style={{ display: "none" }} name="startDate" value={startDate} />
      <input style={{ display: "none" }} name="endDate" value={endDate} />
      <input
        style={{ display: "none" }}
        name="NumberOfDays"
        value={`${NumberOfDays} jours`}
      />
      <input style={{ display: "none" }} name="Price" value={Price} />
      <input
        style={{ display: "none" }}
        name="departureLocation"
        value={departureLocation}
      />
      <input
        style={{ display: "none" }}
        name="arrivalLocation"
        value={arrivalLocation}
      />
      <input
        style={{ display: "none" }}
        name="franchise"
        value={franchise}
      />
      <input
        style={{ display: "none" }}
        name="isSpecialFranchise"
        value={YesNo}
      />
      <div
        className="form-group"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <input
          style={{ borderRadius: 5, height: 40,background:"#fff" }}
          type="text"
          name="fullname"
          placeholder="Your Name"
          required
          onBlur={checkifError}
        />
        <div style={{ width: 20 }} />
        <input
          style={{ borderRadius: 5, height: 40,background:"#fff" }}
          type="text"
          name="LastName"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="form-group">
        <input
          style={{ borderRadius: 5, height: 40,background:"#fff" }}
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
      </div>

      <div className="form-group">
        <input
          style={{ borderRadius: 5, height: 40,background:"#fff" }}
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
        />
      </div>
      <div className="form-group">
        <textarea style={{background:"#fff"}} name="message" placeholder="Your Message" required></textarea>
      </div>

      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="form-group"
      >
        {}
        {error ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => {
              setClicked(true);
              checkifError();
            }}
            className="searchButton"
          >
            Reserver
          </div>
        ) : (
          <>
            <button
              onClick={() => {
                setClicked(true);
                checkifError();
              }}
              type="submit"
              className="searchButton"
            >
              Reserver
            </button>
          </>
        )}
        {(arrivalLocation === "" || departureLocation === "") && clicked ? (
          <span style={{ color: "red", fontSize: 11, alignSelf: "center" }}>
            Veuillez Remplir les champs ville de départ et de retour
          </span>
        ) : null}
      </div>

      <div className="form-group">{result ? <Result /> : null}</div>
    </form>
  );
}
export default ContactForm;
