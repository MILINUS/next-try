import React, { useEffect, useState } from "react";
import SEO from "../common/SEO";
import ImageGallery from "react-image-gallery";
import styles from "../elements/gallery/Gallery.module.scss";
import "../elements/gallery/Gallery.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { DatePicker } from "react-widgets/cjs";
import { Redirect, useLocation,useHistory } from "react-router-dom";
import { DropdownList } from "react-widgets";
import Checkbox from "@mui/material/Checkbox";
import dayjs from "dayjs";
import ContactInForm from "../elements/contact/ContactInForm";
import { TimePicker } from "antd";
import AM from "./Logos/AsMa.jpeg";
import AU from "./Logos/audi.jpeg";
import BT from "./Logos/BENTLEY.jpeg";
import BM from "./Logos/BMW.jpeg";
import FR from "./Logos/FERR.jpeg";
import GO from "./Logos/Golf.jpeg";
import Jag from "./Logos/Jag.jpeg";
import LB from "./Logos/LAMB.jpeg";
import MS from "./Logos/Manso.jpeg";
import Mas from "./Logos/MASER.jpeg";
import MC from "./Logos/McLa.jpeg";
import Merco from "./Logos/Merci.jpeg";
import Mini from "./Logos/MINI.jpeg";
import Nissan from "./Logos/Nissan.jpeg";
import Porsche from "./Logos/Porsche.jpeg";
import Range from "./Logos/Range.jpeg";
import RR from "./Logos/RR.jpeg";
import HeaderMain from "../common/header/HeaderMain";
import FooterFour from "../common/footer/FooterFour";
const Reservation = ({ props }) => {
  const location = useLocation();
  const CarData = location?.state?.data;
  // console.log("this is cars Data", CarData?.image[0].original);
  const [startDate, setStarteDate] = useState(
    new Date(location?.state?.startDate)
  );
  const history=useHistory()
  const backUp=[
    {
      original: "https://firebasestorage.googleapis.com/v0/b/sport-cars-luxury.appspot.com/o/Porshe_MACAN%2F1.jpg?alt=media&token=45ce0891-849e-4a6e-afe5-93e302a9c93c",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/sport-cars-luxury.appspot.com/o/Porshe_MACAN%2F1.jpg?alt=media&token=45ce0891-849e-4a6e-afe5-93e302a9c93c"
    },
  ]
  const pathname = window.location.pathname;
  console.log("TFG",pathname)
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [endDate, setEndDate] = useState(new Date(location?.state?.endDate));
  const NumberOfDays =
    (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24) + 1;
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }
  const [adresse, SetADresse] = useState("");
  function formatDate(date) {
    const convertToDate = new Date(date);

    return [
      convertToDate.getFullYear(),

      padTo2Digits(convertToDate.getMonth() + 1),

      padTo2Digits(convertToDate.getDate()),
    ].join("-");
  }
  useEffect(()=>{
    console.log('location',pathname.split('/')[2])
    if(location?.state?.data===undefined){
console.log("redirect")
    history.push('/gallery/'+pathname.split('/')[2])
    }
  },[])
  const [service, setService] = useState( "location de voiture");
  const [TimeValue, setTimeValue] = useState("10:00");
  const [TimeValue2, setTimeValue2] = useState("14:00");
  const [cp, setCp] = useState("");
  const [city, setCity] = useState("");
  const onChange = (time) => {
    setTimeValue(time);
    getDeparturHour(TimeValue);
  };
  console.log("DataToSend", location?.state?.service);
  const onChange2 = (time) => {
    setTimeValue2(time);
    getArrivalMinute(TimeValue2);
  };
  const format = "HH:mm";
  var days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  var months = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [departureLocation, setDepartureLocation] = useState("");
  const [arrivalLocation, setArrivalLocation] = useState("");
  const DepartureLocations = [
    "Paris",
    "Paris CDG",
    "Paris Orly",
    "Antibes",
    "Bruxelles",
    "Cannes",
    "Dauville",
    "DisneyLand Paris",
    "Le bourget",
    "Fayence",
    "Monaco",
    "Nice",
    "Nice Aeroport",
    "St Tropez",
  ];
  const [departurHour, setDeparturHour] = useState(10);
  const [departureMinute, setDepartureMinute] = useState("00");
  const [arrivalHour, setArrivalHour] = useState(18);
  const [arrivalMinute, setArrivalMinute] = useState("00");
  const FullPriceLock=NumberOfDays<=3?CarData?.price:NumberOfDays>3&&NumberOfDays<=7?CarData.price4to7:CarData.price8plus
  const Price = checked3
    ? FullPriceLock * NumberOfDays + CarData?.AssReduc * NumberOfDays
    : FullPriceLock * NumberOfDays;
  const getDeparturHour = (value) => {
    const departureMinute = (new Date(value.$d).getMinutes() / 60).toFixed(2);
    if (departureMinute > 0.5) {
      setDeparturHour(departurHour + 1);
    } else {
      if (departureMinute > 0.25) {
        setDepartureMinute(30);
      } else {
        setDepartureMinute("00");
      }
    }
  };
  const getArrivalMinute = (value) => {
    const arrivalMinute = (new Date(value.$d).getMinutes() / 60).toFixed(2);
    if (arrivalMinute > 0.5) {
      setArrivalHour(departurHour + 1);
    } else {
      if (arrivalMinute > 0.25) {
        setArrivalMinute(30);
      } else {
        setArrivalMinute("00");
      }
    }
  };
 
  const RealFranchise = checked3
    ? CarData?.reductedFranchise
    : CarData?.franchise;
  // const NumberOfHours=
  console.log(
    "Number OF Hours",
    TimeValue?.$d ? new Date(TimeValue.$d).getMinutes() : ""
  );
  console.log("FromDate", formatDate(startDate));
  // const price = CarData?.
  const TimeSpent =
    (arrivalHour + arrivalMinute / 60 - (departurHour + departureMinute / 60)) *
    NumberOfDays;
  const HourlyRate =
    TimeSpent > 8 ? CarData?.tarifHeure8 / 8 : CarData?.tarifHeure4 / 4;
  console.log("Hourly rate", TimeSpent, HourlyRate);
  var day = days[new Date(startDate).getDay()];
  var month = months[new Date(startDate).getMonth()];
  var dayBack = days[new Date(endDate).getDay()];
  var monthBack = months[new Date(endDate).getMonth()];
  console.log("the Day", TimeSpent);
  useEffect(() => {
    if (TimeValue?.$d) {
      setDeparturHour(new Date(TimeValue.$d).getHours());
    }
    if (TimeValue2?.$d) {
      setArrivalHour(new Date(TimeValue2.$d).getHours());
    }
  }, [TimeValue, TimeValue2, HourlyRate, TimeSpent]);
  const ChauffLocationPrice = HourlyRate * TimeSpent;
  useEffect(()=>{
    if(location?.state?.service&&location.state.service!==""){
      setService(location.state.service)
    }
  },[])
  return (
    <>
      <SEO title="Gallery ||  SPORT CARS & LUXURY - React Business  Template" />
      <HeaderMain />
      <div style={{ background: "#ececec" }}>
        <section
          style={{ background: "#ececec", marginRight: 15, marginBottom: -50 }}
          className="car-booking"
        >
          <div className="Car_container">
            <div style={{ boxSizing: "border-box" }}>
              <div className="r-sec-head r-sec-left-head title_container">
                <h2>
                  <b>{CarData?.title}</b>
                </h2>
                <span>
                  <div className="horizontal-yellow-line"></div>
                  {CarData?.subtitle}
                </span>
              </div>
              <div className="row_s_resa">
                <div className="cols-sm-170 cols-sm-12 cols-md-7">
                  {/* <ImageGallery items={CarData?.image} /> */}

                  <ImageGallery items={CarData?.image?CarData?.image:backUp} />

                  <table className="booking-bill">
                    <tbody>
                      <tr style={{ borderBottom: "1.3px solid grey" }}>
                        <td
                          style={{
                            fontWeight: 600,
                            fontSize: 15,
                            color: "black",
                          }}
                        >
                          Service
                        </td>
                        <td
                          style={{
                            fontWeight: 600,
                            fontSize: 15,
                            color: "black",
                          }}
                        >
                          {location?.state?.service
                            ? location?.state?.service
                            : "location de voiture"}
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1.3px solid grey" }}>
                        <td
                          style={{
                            fontWeight: 600,
                            fontSize: 15,
                            color: "black",
                          }}
                        >
                          Date &amp; heure de début
                        </td>
                        <td
                          style={{
                            fontWeight: 600,
                            fontSize: 15,
                            color: "black",
                          }}
                        >
                          {formatDate(startDate)},{departurHour}:
                          {departureMinute}
                          {/* ,{TimeValue2} */}
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1.3px solid grey" }}>
                        <td
                          style={{
                            fontWeight: 600,
                            fontSize: 15,
                            color: "black",
                          }}
                        >
                          Date &amp; heure de fin
                        </td>
                        <td
                          style={{
                            fontWeight: 600,
                            fontSize: 15,
                            color: "black",
                          }}
                        >
                          {formatDate(endDate)},{arrivalHour}:{arrivalMinute}
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1.3px solid grey" }}>
                        <td
                          style={{
                            fontWeight: 600,
                            fontSize: 15,
                            color: "black",
                          }}
                        >
                          Nombre de jours
                        </td>
                        <td
                          style={{
                            fontWeight: 600,
                            fontSize: 15,
                            color: "black",
                          }}
                        >
                          {NumberOfDays >= 0 ? NumberOfDays : 0}
                        </td>
                      </tr>
                      {service === "location de voiture" ? (
                        <>
                          <tr style={{ borderBottom: "1.3px solid grey" }}>
                            <td
                              style={{
                                fontWeight: 600,
                                fontSize: 15,
                                color: "black",
                              }}
                            >
                              Kilométrage Inclus
                            </td>

                            <td
                              style={{
                                fontWeight: 600,
                                fontSize: 15,
                                color: "black",
                              }}
                            >
                              {NumberOfDays * 150}km
                            </td>
                          </tr>
                        </>
                      ) : null}
                      {service === "location avec chauffeur" ? (
                        <tr style={{ borderBottom: "1.3px solid grey" }}>
                          <td
                            style={{
                              fontWeight: 600,
                              fontSize: 15,
                              color: "black",
                            }}
                          >
                            Nombre Total d'Heures
                          </td>

                          <td
                            style={{
                              fontWeight: 600,
                              fontSize: 15,
                              color: "black",
                            }}
                          >
                            {TimeSpent}H
                          </td>
                        </tr>
                      ) : null}

                      {service === "location de voiture" ? (
                        <tr style={{ borderBottom: "1.3px solid grey" }}>
                          <td
                            style={{
                              fontWeight: 600,
                              fontSize: 15,
                              color: "black",
                            }}
                          >
                            *Franchise
                          </td>
                          <td
                            style={{
                              fontWeight: 600,
                              fontSize: 15,
                              color: "black",
                            }}
                          >
                            <span>
                              {checked3
                                ? CarData?.reductedFranchise
                                : CarData?.franchise}
                              €
                            </span>
                          </td>
                        </tr>
                      ) : null}

                      <tr className="booking-price-container">
                        <td
                          style={{
                            fontWeight: 600,
                            fontSize: 15,
                            color: "black",
                          }}
                        >
                          Montant total
                        </td>
                        {service === "location de voiture" ? (
                          <td
                            style={{
                              fontWeight: 600,
                              fontSize: 15,
                              color: "black",
                            }}
                          >
                            <span className="pull-right booking-price">
                              {startDate <= endDate ? Price : 0}€
                            </span>
                          </td>
                        ) : (
                          <td
                            style={{
                              fontWeight: 600,
                              fontSize: 15,
                              color: "black",
                            }}
                          >
                            <span className="pull-right booking-price">
                              {startDate <= endDate
                                ? ChauffLocationPrice
                                : 0}
                              €
                            </span>
                          </td>
                        )}
                      </tr>
                    </tbody>
                  </table>
                  <div
                    style={{ boxSizing: "border-box", width: "175%" }}
                    className="specailForm"
                  >{location?.state?.data? <ContactInForm
                    ChauffLocationPrice={ChauffLocationPrice}
                      TimeSpent={TimeSpent}
                      arrivalHour={arrivalHour}
                      departurHour={departurHour}
                      specialWidth={65}
                      cp={cp}
                      city={city}
                      adresse={adresse}
                      franchise={RealFranchise}
                      isSpecialFranchise={checked3}
                      departureLocation={departureLocation}
                      arrivalLocation={arrivalLocation}
                      Price={Price}
                      NumberOfDays={NumberOfDays}
                      service={service}
                      carData={location?.state?.data}
                      startDate={formatDate(startDate)}
                      endDate={formatDate(endDate)}
                    />:null}
                    {/* <ContactInForm
                    ChauffLocationPrice={ChauffLocationPrice}
                      TimeSpent={TimeSpent}
                      arrivalHour={arrivalHour}
                      departurHour={departurHour}
                      specialWidth={65}
                      cp={cp}
                      city={city}
                      adresse={adresse}
                      franchise={RealFranchise}
                      isSpecialFranchise={checked3}
                      departureLocation={departureLocation}
                      arrivalLocation={arrivalLocation}
                      Price={Price}
                      NumberOfDays={NumberOfDays}
                      service={location?.state?.service}
                      carData={location?.state?.data}
                      startDate={formatDate(startDate)}
                      endDate={formatDate(endDate)}
                    /> */}
                  </div>
                </div>
                <div className="  cols-xs-12 cols-sm-12 cols-md-5">
                  <div className="extra-features">
                  <form className={styles.car_info_section} style={{backgroundColor:"#f6cc51"}}>
                      <h6 style={{ color: "black" }} htmlFor="fromDate">
                      CHANGER DE SERVICE
                      </h6>
                      <div style={{backgroundColor:'black',width:150,height:3,marginTop:-27,marginBottom:15}} />
                      
                      <DropdownList
                      value={service}
                      onChange={(nextValue) => setService(nextValue)}
                      className="dropdown_customized"
                      data={CarData?.categorie_location}
                      id="drop"
                      selected={null}
                    />
                    </form>
                    <form className={styles.car_info_section}>
                      <h6 style={{ color: "black" }} htmlFor="fromDate">
                        MODIFIER LES DATES DE RÉSERVATION
                      </h6>
                      <div className={styles.big_separator} />
                      <div className={styles.formgroup}>
                        <DatePicker
                          value={startDate}
                          onChange={(value) => {
                            setStarteDate(value);
                          }}
                          id="fromDate"
                          selected={null}
                        />
                      </div>
                      <div className={styles.formgroup}>
                        <DatePicker
                          value={endDate}
                          onChange={(value) => setEndDate(value)}
                          id="toDate"
                          selected={null}
                        />
                        {endDate < startDate && (
                          <span
                            style={{
                              color: "red",
                              fontSize: 10,
                              marginLeft: 10,
                            }}
                          >
                            La date D'arrivée ne peut etre avant la Date de
                            départ
                          </span>
                        )}
                      </div>
                    </form>
                    <form className={styles.car_info_section} action="#">
                      {service=== "location de voiture" ? (
                        <>
                          <h6 style={{ color: "black" }} htmlFor="fromDate">
                            Services additionnels
                          </h6>
                          <div className={styles.big_separator} />
                          <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                              <div
                                className="clearfix r-site-checkbox"
                                style={{ display: "flex", fontSize: 13 }}
                              >
                                <Checkbox
                                  value={checked}
                                  onChange={() => setChecked(!checked)}
                                  {...label}
                                />
                                <label style={{ marginTop: 5 }}>
                                  Réhausseur enfant (Sur demande)
                                </label>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                              <div
                                className="clearfix r-site-checkbox"
                                style={{ display: "flex", fontSize: 13 }}
                              >
                                <Checkbox
                                  value={checked1}
                                  onChange={() => setChecked1(!checked1)}
                                  {...label}
                                />
                                <label style={{ marginTop: 5 }}>
                                  Siège Bébé (Sur demande)
                                </label>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                              <div
                                className="clearfix r-site-checkbox"
                                style={{ display: "flex", fontSize: 13 }}
                              >
                                <Checkbox
                                  value={checked2}
                                  onChange={() => setChecked2(!checked2)}
                                  {...label}
                                />
                                <label style={{ marginTop: 5 }}>
                                  Conducteur supplémentaire (Sur demande)
                                </label>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                              <div
                                className="clearfix r-site-checkbox"
                                style={{ display: "flex", fontSize: 13 }}
                              >
                                <Checkbox
                                  value={checked3}
                                  onChange={() => setChecked3(!checked3)}
                                  {...label}
                                />
                                <label style={{ marginTop: 5 }}>
                                  Assurence pour réduire la Franchise a{" "}
                                  {CarData?.reductedFranchise}€ (
                                  {CarData?.AssReduc}€ par Jour )
                                </label>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <h6 style={{ color: "black" }} htmlFor="fromDate">
                            Choisissez chaque jour le créneau horaire de votre
                            choix
                          </h6>
                          <div className={styles.big_separator} />
                          <div
                            style={{
                              marginTop: -20,
                              marginBottom: 30,
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <span
                              style={{
                                fontSize: 12,
                                color: "black",
                                fontWeight: "lighter",
                              }}
                            >
                              {day} {formatDate(startDate).split("-")[2]}{" "}
                              {month} {formatDate(startDate).split("-")[0]}
                            </span>
                            <div style={{ width: 50 }} />
                            <span
                              style={{
                                fontSize: 12,
                                color: "black",
                                fontWeight: "lighter",
                              }}
                            >
                              {dayBack} {formatDate(endDate).split("-")[2]}{" "}
                              {monthBack} {formatDate(endDate).split("-")[0]}
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: -25,
                              }}
                            >
                              <span
                                style={{
                                  color: "black",
                                  fontSize: 10,
                                  fontWeight: "bold",
                                }}
                              >
                                Heure de Départ
                              </span>
                              <TimePicker
                                onChange={onChange}
                                defaultValue={dayjs(TimeValue, format)}
                                format={format}
                              />
                            </div>
                            <div style={{ width: 50 }} />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: -25,
                              }}
                            >
                              <span
                                style={{
                                  color: "black",
                                  fontSize: 10,
                                  fontWeight: "bold",
                                }}
                              >
                                Heure d'Arrivée
                              </span>
                              <TimePicker
                                onChange={onChange2}
                                defaultValue={dayjs(TimeValue2, format)}
                                format={format}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </form>
                    <form className={styles.car_info_section}>
                      <h6 style={{ color: "black" }} htmlFor="fromDate">
                        PRISE EN CHARGE & DESTINATION
                      </h6>
                      <div className={styles.big_separator} />
                      {service === "location de voiture" ? (
                        <>
                          {" "}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              marginLeft: -10,
                            }}
                          >
                            <div
                              style={{
                                display: "block",
                                flexDirection: "column",
                                width: "50%",
                              }}
                            >
                              <span
                                style={{
                                  color: "black",
                                  fontSize: 13,
                                  marginLeft: 10,
                                }}
                              >
                                Ville De départ
                              </span>
                              <DropdownList
                                style={{ margin: "0 10px" }}
                                value={departureLocation}
                                onChange={(nextValue) =>
                                  setDepartureLocation(nextValue)
                                }
                                className="dropdown_customized"
                                data={DepartureLocations}
                                id="drop"
                                placeholder="ville de depart"
                                selected={null}
                              />
                            </div>
                            <div style={{ width: 20 }} />
                            <div
                              style={{
                                display: "block",
                                flexDirection: "column",
                                width: "50%",
                              }}
                            >
                              <span
                                style={{
                                  color: "black",
                                  fontSize: 13,
                                  marginLeft: 10,
                                }}
                              >
                                Ville De retour
                              </span>
                              <DropdownList
                                style={{ margin: "0 10px" }}
                                value={arrivalLocation}
                                onChange={(nextValue) =>
                                  setArrivalLocation(nextValue)
                                }
                                className="dropdown_customized"
                                data={DepartureLocations}
                                placeholder="Ville d'arrivée"
                                id="drop"
                                selected={null}
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <span
                            style={{
                              fontSize: 10,
                              fontWeight: "bold",
                              color: "black",
                            }}
                          >
                            Adresse de Prise en Charge
                          </span>
                          {/* <div style={{height:40}}/> */}
                          <input
                            style={{ borderRadius: 5 }}
                            placeholder="Adresse de Prise en Charge"
                            id="ADD"
                            value={adresse}
                            onChange={(e) => SetADresse(e.target.value)}
                          />
                          <div style={{ height: 20 }} />
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <input
                              placeholder="Code Postale"
                              id="CP"
                              style={{ width: "50%", borderRadius: 5 }}
                              value={cp}
                              onChange={(e) => setCp(e.target.value)}
                            />
                            <div style={{ width: 20 }} />
                            <input
                              placeholder="Ville"
                              id="CITY"
                              style={{ width: "50%", borderRadius: 5 }}
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />
                          </div>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ boxSizing: "border-box" }}
            className="car-booking-form specialForm2"
          >{location?.state?.data? <ContactInForm
            ChauffLocationPrice={ChauffLocationPrice}
              TimeSpent={TimeSpent}
              arrivalMinute={arrivalMinute}
              departureMinute={departureMinute}
              arrivalHour={arrivalHour}
              departurHour={departurHour}
              specialWidth={40}
              cp={cp}
              city={city}
              adresse={adresse}
              franchise={RealFranchise}
              isSpecialFranchise={checked3}
              departureLocation={departureLocation}
              arrivalLocation={arrivalLocation}
              Price={Price}
              NumberOfDays={NumberOfDays}
              service={service}
              carData={location?.state?.data}
              startDate={formatDate(startDate)}
              endDate={formatDate(endDate)}
            />:null}
            {/* <ContactInForm
            ChauffLocationPrice={ChauffLocationPrice}
              TimeSpent={TimeSpent}
              arrivalMinute={arrivalMinute}
              departureMinute={departureMinute}
              arrivalHour={arrivalHour}
              departurHour={departurHour}
              specialWidth={40}
              cp={cp}
              city={city}
              adresse={adresse}
              franchise={RealFranchise}
              isSpecialFranchise={checked3}
              departureLocation={departureLocation}
              arrivalLocation={arrivalLocation}
              Price={Price}
              NumberOfDays={NumberOfDays}
              service={location?.state?.service}
              carData={location?.state?.data}
              startDate={formatDate(startDate)}
              endDate={formatDate(endDate)}
            /> */}
          </div>
        </section>

        <section id="r-car-brands">
          <div className="clearfix text-center r-brand-items">
            <div className="brand-item">
              <img src={AM} id="location-louer-AUDI" alt=" car brand" />
            </div>
            <div className="brand-item">
              <img src={AU} id="location-louer-AUDI" alt=" car brand" />
            </div>
            <div className="brand-item">
              <img src={BT} id="location-louer-AUDI" alt=" car brand" />
            </div>
            <div className="brand-item">
              <img src={BM} id="location-louer-MANSORY" alt=" car brand" />
            </div>
            <div className="brand-item">
              <img src={FR} id="location-louer-AUDI" alt=" car brand" />
            </div>
            <div className="brand-item">
              <img src={GO} id="location-louer-AUDI" alt=" car brand" />
            </div>
            <div className="brand-item">
              <img src={Jag} id="location-louer-AUDI" alt=" car brand" />
            </div>
            <div className="brand-item">
              <img src={LB} id="location-louer-AUDI" alt=" car brand" />
            </div>
            <div className="brand-item">
              <img src={MS} id="location-louer-AUDI" alt=" car brand" />
            </div>
            <div className="brand-item">
              <img src={Mas} id="location-louer-AUDI" alt=" car brand" />
            </div>
            <div className="brand-item">
              <img src={Merco} id="location-louer-AUDI" alt=" car brand" />
            </div>
            <div className="brand-item">
              <img src={Mini} id="location-louer-AUDI" alt=" car brand" />
            </div>
            <div className="brand-item">
              <img src={Nissan} id="location-louer-AUDI" alt=" car brand" />
            </div>
            <div className="brand-item">
              <img src={Porsche} id="location-louer-AUDI" alt=" car brand" />
            </div>
            <div className="brand-item">
              <img src={Range} id="location-louer-AUDI" alt=" car brand" />
            </div>
            <div className="brand-item">
              <img src={RR} id="location-louer-AUDI" alt=" car brand" />
            </div>
            <div className="brand-item">
              <img src={MC} id="location-louer-AUDI" alt=" car brand" />
            </div>
          </div>
        </section>
      </div>
      <FooterFour />
    </>
  );
};
export default Reservation;
