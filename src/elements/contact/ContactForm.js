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
  console.log("props",
  arrivalMinute,
  departureMinute,
  )
  const contactDepartureMinute=departureMinute?departureMinute:""
  const contactarrivalMinute=arrivalMinute?arrivalMinute:""
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ydbpmko",
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
  }, 20000);

  return (
    <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
      <input style={{ display: "none" }} name="9LAWI" defaultValue={service} />
      <input style={{ display: "none" }} name="voiture" defaultValue={carData.title} />
      <input
        style={{ display: "none" }}
        name="voitureSub"
        defaultValue={carData.subtitle}
      />
      <input style={{ display: "none" }} name="StartHour" defaultValue={departurHour} />
      <input style={{ display: "none" }} name="StartMinute" defaultValue={contactDepartureMinute} />
      <input style={{ display: "none" }} name="EndHour" defaultValue={arrivalHour} />
      <input style={{ display: "none" }} name="EndMinute" defaultValue={contactarrivalMinute} />
      <input style={{ display: "none" }} name="TimeSpent" defaultValue={TimeSpent} />
      <input style={{ display: "none" }} name="startDate" defaultValue={startDate} />
      <input style={{ display: "none" }} name="endDate" defaultValue={endDate} />
      <input style={{ display: "none" }} name="ChauffLocationPrice" defaultValue={ChauffLocationPrice} />
      <input style={{ display: "none" }} name="adresse" defaultValue={adresse} />
      <input style={{ display: "none" }} name="cp" defaultValue={cp} />
      <input style={{ display: "none" }} name="city" defaultValue={city} />
      <input
        style={{ display: "none" }}
        name="NumberOfDays"
        defaultValue={`${NumberOfDays} jours`}
      />
      <input style={{ display: "none" }} name="Price" defaultValue={Price} />
      <input
        style={{ display: "none" }}
        name="departureLocation"
        defaultValue={departureLocation}
      />
      <input
        style={{ display: "none" }}
        name="arrivalLocation"
        defaultValue={arrivalLocation}
      />
      <input style={{ display: "none" }} name="franchise" defaultValue={franchise} />
      <input
        style={{ display: "none" }}
        name="isSpecialFranchise"
        defaultValue={YesNo}
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
        style={{ display: "flex", flexDirection: "column",marginTop:25,marginBottom:20 }}
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
