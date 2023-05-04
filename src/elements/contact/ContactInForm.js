import React from "react";
import ContactForm from "./ContactForm";
// import GoogleMapStyle from "./GoogleMapStyle";
// import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";

const ContactInForm = ({
  carData,
  service,
  startDate,
  endDate,
  NumberOfDays,
  Price,
  departureLocation,
  arrivalLocation,
  franchise,
  isSpecialFranchise,
}) => {
  console.log("Data Got", endDate);
  const Date = endDate
  console.log("TATA",Date)
  return (
    <>
      <div style={{background:"#ececec"}} className="row mt--40 row--15">
        <div className="col-lg-7">
          <ContactForm
            franchise={franchise}
            isSpecialFranchise={isSpecialFranchise}
            departureLocation={departureLocation}
            arrivalLocation={arrivalLocation}
            Price={Price}
            NumberOfDays={NumberOfDays}
            carData={carData}
            service={service}
            startDate={startDate}
            endDate={endDate}
            formStyle="contact-form-1"
          />
        </div>
      </div>
    </>
  );
};
export default ContactInForm;
