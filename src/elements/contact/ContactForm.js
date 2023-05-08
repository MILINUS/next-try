import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <p className="success-message">Votre Message a été envoyé avec succés</p>
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
  isSpecialFranchise,
  adresse,
  cp,
  city,
  specialWidth,
  arrivalHour,
  departurHour,
  arrivalMinute,
  departureMinute,
  TimeSpent,
  ChauffLocationPrice
}) {
  const [YesNo, setYesNo] = useState(null);
  const [error, setError] = useState(false);
  const [phone, setPhone] = useState(null);
  const [email,setEmail]=useState(null)
  const [firstName,setFirstName]=useState(null)
  const [lastName,setLastName]=useState(null)
  const setYesNotoOuiNon = () => {
    if (isSpecialFranchise === true) {
      setYesNo("Oui");
    } else {
      setYesNo("Non");
    }
  };
  console.log("SpecialTime:",departurHour,departureMinute,arrivalHour,arrivalMinute)
  useEffect(() => {
    setYesNotoOuiNon();
  });
  const checkifError = () => {
    if (
      service === "location de voiture" &&
      (arrivalLocation === "" || departureLocation === "")
    ) {
      setError(true);
    } else {
      if (
        service === "location avec chauffeur" &&
        (adresse === "" || cp === "" || city === "")
      ) {
        setError(true);
      } else {
        setError(false);
      }
    }
  };
  console.log("is ther", error);
  const [clicked, setClicked] = useState(false);
  const [result, showresult] = useState(false);
  console.log("fuck", endDate);
  useEffect(() => {}, [endDate]);
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
      <input style={{ display: "none" }} name="StartHour" value={departurHour} />
      <input style={{ display: "none" }} name="StartMinute" value={departureMinute} />
      <input style={{ display: "none" }} name="EndHour" value={arrivalHour} />
      <input style={{ display: "none" }} name="EndMinute" value={arrivalMinute} />
      <input style={{ display: "none" }} name="TimeSpent" value={TimeSpent} />
      <input style={{ display: "none" }} name="startDate" value={startDate} />
      <input style={{ display: "none" }} name="endDate" value={endDate} />
      <input style={{ display: "none" }} name="ChauffLocationPrice" value={ChauffLocationPrice} />
      <input style={{ display: "none" }} name="adresse" value={adresse} />
      <input style={{ display: "none" }} name="cp" value={cp} />
      <input style={{ display: "none" }} name="city" value={city} />
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
      <input style={{ display: "none" }} name="franchise" value={franchise} />
      <input
        style={{ display: "none" }}
        name="isSpecialFranchise"
        value={YesNo}
      />
      <div
        className="form-group"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div style={{display:"flex",flexDirection:"column"}}>
        <input
          style={{
            borderRadius: 5,
            height: 40,
            background: "#fff",
            borderWidth: clicked && firstName === null ? 0.8 : 0,
            borderColor: clicked && firstName === null ? "red" : null,
          }}
          type="text"
          name="firstName"
          placeholder="PréNom"
          required
          onBlur={checkifError}
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
        />
          {clicked && email === null && (
          <span style={{ color: "red", fontSize: 10 }}>
            Ce Champs est obligatoire
          </span>
        )}
        </div>
        
        <div style={{ width: specialWidth }} />
        <div style={{display:"flex",flexDirection:"column"}}>
        <input
           style={{
            borderRadius: 5,
            height: 40,
            background: "#fff",
            borderWidth: clicked && lastName === null ? 0.8 : 0,
            borderColor: clicked && lastName === null ? "red" : null,
          }}
          type="text"
          name="LastName"
          placeholder="Nom de Famille"
          required
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)} 
        />
          {clicked && email === null && (
          <span style={{ color: "red", fontSize: 10 }}>
            Ce Champs est obligatoire
          </span>
        )}
        </div>
        
      </div>
      <div className="form-group">
        <input
           style={{
            borderRadius: 5,
            height: 40,
            background: "#fff",
            borderWidth: clicked && email === null ? 0.8 : 0,
            borderColor: clicked && email === null ? "red" : null,
          }}
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        {clicked && email === null && (
          <span style={{ color: "red", fontSize: 10 }}>
            Ce Champs est obligatoire
          </span>
        )}
      </div>

      <div className="form-group">
        <input
          style={{
            borderRadius: 5,
            height: 40,
            background: "#fff",
            borderWidth: clicked && phone === null ? 0.8 : 0,
            borderColor: clicked && phone === null ? "red" : null,
          }}
          onChange={(e) => setPhone(e.target.phone)}
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
        />
        {clicked && phone === null && (
          <span style={{ color: "red", fontSize: 10 }}>
            Ce Champs est obligatoire
          </span>
        )}
      </div>
      <div className="form-group">
        <textarea
          style={{ background: "#fff" }}
          name="message"
          placeholder="Your Message"
          required
        ></textarea>
      </div>

      <div
        style={{ display: "flex", flexDirection: "column",marginTop:15,marginBottom:15 }}
        className="form-group"
      >
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
        {adresse === "" && clicked && service === "location avec chauffeur" ? (
          <span style={{ color: "red", fontSize: 11, alignSelf: "center" }}>
            Veuillez Remplir le champs adresse
          </span>
        ) : null}
        {(arrivalLocation === "" || departureLocation === "") &&
        clicked &&
        service === "location de voiture" ? (
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
