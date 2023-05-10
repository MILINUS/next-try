import React, { useEffect, useState } from "react";
import SEO from "../../common/SEO";
import ImageGallery from "react-image-gallery";
import styles from "./Gallery.module.scss";
import "./Gallery.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { DatePicker, DropdownList } from "react-widgets/cjs";
import { useLocation } from "react-router-dom";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import speed from "./images/speed.svg";
import seat from "./images/Seat.png";
import Engine from "./images/Engine.png";
import fuel from "./images/fuel.svg";
import TR from "../service/TR.png";
import AM from "../../pages/Logos/AsMa.jpeg";
import AU from "../../pages/Logos/audi.jpeg";
import BT from "../../pages/Logos/BENTLEY.jpeg";
import BM from "../../pages/Logos/BMW.jpeg";
import FR from "../../pages/Logos/FERR.jpeg";
import GO from "../../pages/Logos/Golf.jpeg";
import Jag from "../../pages/Logos/Jag.jpeg";
import LB from "../../pages/Logos/LAMB.jpeg";
import MS from "../../pages/Logos/Manso.jpeg";
import Mas from "../../pages/Logos/MASER.jpeg";
import MC from "../../pages/Logos/McLa.jpeg";
import Merco from "../../pages/Logos/Merci.jpeg";
import Mini from "../../pages/Logos/MINI.jpeg";
import Nissan from "../../pages/Logos/Nissan.jpeg";
import Porsche from "../../pages/Logos/Porsche.jpeg";
import Range from "../../pages/Logos/Range.jpeg";
import RR from "../../pages/Logos/RR.jpeg";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import SectionTitle from "../sectionTitle/SectionTitle";
import CarsSlider from "../service/carsSlider";
import FooterFour from "../../common/footer/FooterFour";
import HeaderMain from "../../common/header/HeaderMain";
import { FirestoreDb } from "../../Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
const Elements = ({ props }) => {
  const location = useLocation();
  const [selected, setSelected] = useState(false);
  const onChange = (time) => {
    setValue(time);
  };
  const backUp = [
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/sport-cars-luxury.appspot.com/o/Porshe_MACAN%2F1.jpg?alt=media&token=45ce0891-849e-4a6e-afe5-93e302a9c93c",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/sport-cars-luxury.appspot.com/o/Porshe_MACAN%2F1.jpg?alt=media&token=45ce0891-849e-4a6e-afe5-93e302a9c93c",
    },
  ];
  const [departureLocation, setDepartureLocation] = useState("");
  const [arrivalLocation, setArrivalLocation] = useState("");
  const [carList, setCarList] = useState([]);
  const [dataChange, setDataChange] = useState(false);
  const addTocities = async () => {
    const carsRef = collection(FirestoreDb, " Cars");
    const q = query(carsRef, where("id", "<", 6));
    await getDocs(q).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCarList(newData);
      setDataChange(true);
    });
  };
  useEffect(() => {
    if (location?.state?.service && location.state.service !== "") {
      setService(location.state.service);
    }
    addTocities();
  }, [dataChange]);
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }
  const scrollToTop = () =>{
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
};
useEffect(()=>{
  console.log("scrolled")
  scrollToTop()
},[])
  const DepartureLocations = [
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
    "Paris",
    "Paris CDG",
    "Paris Orly",
    "St Tropez",
  ];
  function formatDate(date) {
    const convertToDate = new Date(date);

    return [
      convertToDate.getFullYear(),

      padTo2Digits(convertToDate.getMonth() + 1),

      padTo2Digits(convertToDate.getDate()),
    ].join("-");
  }
  const [value, setValue] = useState("10:00");
  const [theCarData, setTheCarData] = useState(null);
  const [dataChange1, setDataChange1] = useState(false);
  const pathname = window.location.pathname;
  const getOneCar = async () => {
    const carsRef = collection(FirestoreDb, " Cars");
    const q = query(carsRef, where("path", "==", pathname.split("/")[2]));
    await getDocs(q).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTheCarData(newData);
      setDataChange1(true);
    });
  };
  useEffect(() => {
    getOneCar();
    addTocities();
    console.log("The car Data", theCarData, pathname.split("/")[2]);
  }, [dataChange, dataChange1]);
  const CarData = location?.state?.data
    ? location?.state?.data
    : theCarData
    ? theCarData[0]
    : null;
  console.log("DATa", CarData);
  const [service, setService] = useState("location de voiture");
  const format = "HH:mm";
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <SEO title="Gallery || SPORT CARS & LUXURY" />
      <main>
        <HeaderMain />
        <section className={styles.car_section}>
          <div className={styles.Details_container}>
            <div className="r-sec-head r-sec-left-head">
              <h2>
                <b>{CarData?.title}</b>
              </h2>
              <span>
                <div className="horizontal-yellow-line"></div>
                {CarData?.subtitle}
              </span>
            </div>
            <div className={styles.row_s}>
              <div className={styles.col_12}>
                <ImageGallery items={CarData ? CarData.image : backUp} />
                <div className={styles.car_info_container}>
                  <div className="row d-none d-md-block">
                    <div className="cols-12">
                      {selected === false ? (
                        <div className="car-overview">
                          <div className="r-sec-head r-sec-left-head">
                            <h2>
                              <b>PRÉSENTATION DU VÉHICULE</b>
                              {/* <i className={styles.group_icon}></i> */}
                            </h2>
                          </div>
                          <div>{CarData?.description}</div>
                        </div>
                      ) : (
                        <>
                          <table className="booking-bill">
                            <tbody>
                              <tr>
                                <td>Service</td>
                                <td>{service}</td>
                              </tr>
                            </tbody>
                          </table>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="cols-xs-12 cols-sm-12 cols-md-4">
                <form className={styles.car_info_section} style={{backgroundColor:"#f6cc51"}}>
                  <h6 style={{ color: "black" }} htmlFor="fromDate">
                    CHANGER DE SERVICE
                  </h6>
                  <div  style={{backgroundColor:'black',width:150,height:3,marginTop:-27,marginBottom:15}} />
                  <div >
                    <DropdownList
                      value={service}
                      onChange={(nextValue) => setService(nextValue)}
                      className="dropdown_customized"
                      data={CarData?.categorie_location}
                      id="drop"
                      selected={null}
                    />
                  </div>
                </form>
                <form className={styles.car_info_section}>
                  <h6 style={{ color: "black" }} htmlFor="fromDate">
                    PRISE EN CHARGE & DESTINATION
                  </h6>
                  <div className={styles.big_separator} />

                  {service === "transfert avec chauffeur" ? (
                    <>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <DropdownList
                          style={{ margin: "0 10px" }}
                          value={departureLocation}
                          onChange={(nextValue) =>
                            setDepartureLocation(nextValue)
                          }
                          className="dropdown_customized"
                          data={DepartureLocations}
                          id="drop"
                          selected={null}
                        />

                        <DropdownList
                          style={{ margin: "0 10px" }}
                          value={arrivalLocation}
                          onChange={(nextValue) =>
                            setArrivalLocation(nextValue)
                          }
                          className="dropdown_customized"
                          data={DepartureLocations}
                          id="drop"
                          selected={null}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.formgroup}>
                        <DatePicker
                          value={startDate}
                          onChange={(value) => setStartDate(value)}
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

                      <label className={styles.additionalFees}>
                        *Des frais de livraison supplémentaires peuvent
                        s'appliquer
                      </label>
                      <button className={styles.btn_primary} type="button">
                        {startDate <= endDate ? (
                          <Link
                            style={{ cursor: "pointer", color: "black" }}
                            to={{
                              pathname: `${
                                process.env.PUBLIC_URL +
                                "/Reservation/" +
                                CarData?.path
                              }`,
                              state: {
                                data: CarData,
                                startDate: formatDate(startDate),
                                endDate: formatDate(endDate),
                                service: service,
                              },
                            }}
                          >
                            Réserver ce véhicule
                          </Link>
                        ) : (
                          <> Réserver ce véhicule</>
                        )}
                      </button>
                    </>
                  )}
                </form>
                {service === "location de voiture" ? (
                  <div className={styles.car_info_section}>
                    <div>
                      <h6 style={{ color: "black" }}>TARIFS</h6>
                      <table className={styles.rates}>
                        <tbody>
                          <tr>
                            <td>1 à 3 jours</td>
                            <td>{CarData?.price}€</td>
                          </tr>
                          <tr>
                            <td>4 à 7 jours</td>
                            <td>{CarData?.price4to7}€</td>
                          </tr>
                          <tr>
                            <td>+8 jours</td>
                            <td>{CarData?.price8plus}€</td>
                          </tr>
                          <tr>
                            <td>Kilomètre supplémentaire</td>
                            <td>{CarData?.KmSup ? CarData?.KmSup : ""}€</td>
                          </tr>
                          <tr>
                            <td>Franchise</td>
                            <td>{CarData?.franchise}€</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : service === "location avec chauffeur" ? (
                  <div className={styles.car_info_section}>
                    <div>
                      <h6 style={{ color: "black" }}>TARIFS</h6>
                      <table className={styles.rates}>
                        <tbody>
                          <tr>
                            <td>4 heures</td>
                            <td>{CarData?.tarifHeure4}€</td>
                          </tr>
                          <tr>
                            <td>8 heures</td>
                            <td>{CarData?.tarifHeure8}€</td>
                          </tr>
                          <tr>
                            <td>Heure Supplémentaire</td>
                            <td>{CarData?.heureSup}€</td>
                          </tr>
                          <tr>
                            <td>Kilomètre supplémentaire</td>
                            <td>{CarData?.KmSup}€</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : service === "transfert avec chauffeur" ? (
                  <div className={styles.car_info_section}>
                    <h6 style={{ color: "black" }} className="yellow-underline">
                      Date & Heure
                    </h6>
                    <div
                      style={{ marginLeft: 12 }}
                      className="Date_plus_time_container"
                    >
                      <div className="Date_container">
                        <DatePicker
                          style={{ margin: "0 0px", width: "100%" }}
                          id="toDate"
                          selected={null}
                        />
                      </div>
                      <div
                        className="Time_container "
                        style={{ marginRight: "-55px", width: "80%" }}
                      >
                        <TimePicker
                          onChange={onChange}
                          defaultValue={dayjs(value, format)}
                          format={format}
                        />
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className={styles.car_info_section}>
                  <h6 style={{ color: "black" }}>
                    CARACTÉRISTIQUES DU VÉHICULE
                  </h6>
                  <div
                    className="row_s  row_s_special"
                    style={{ marginLeft: 25 }}
                  >
                    <div className="col2 car-feature-size-mobile">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          // marginLeft: 20,
                          marginBottom: 20,
                        }}
                      >
                        <img
                          style={{ height: 24, width: 24, marginLeft: 10 }}
                          src={speed}
                          alt="speed"
                        />
                        <span style={{ fontSize: 12, color: "black" }}>
                          {CarData?.speed}
                        </span>
                      </div>
                    </div>
                    {/* <div className="col2 car-feature-size-mobile">
                      <div style={{display:"flex",flexDirection:"column",marginLeft:20,marginBottom:20}}>
                        <img
                          style={{ height: 24, width: 24,marginLeft:10 }}
                          src={speed}
                          alt="speed"
                        />
                        <span style={{ fontSize: 12, color: "black" }}>
                          {CarData?.speed}
                        </span>
                      </div>
                    </div> */}
                    <div className="col2 car-feature-size-mobile">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          // marginLeft: 20,
                          marginBottom: 20,
                        }}
                      >
                        <img
                          style={{ height: 24, width: 24, marginLeft: 10 }}
                          src={TR}
                          alt="speed"
                        />
                        <span style={{ fontSize: 12, color: "black" }}>
                          {CarData?.transmition}
                        </span>
                      </div>
                    </div>
                    <div className="col2 car-feature-size-mobile">
                      <div className="icon-special">
                        <img
                          style={{ height: 24, width: 24 }}
                          src={seat}
                          alt="speed"
                        />
                        <span
                          style={{
                            fontSize: 12,
                            color: "black",
                            marginLeft: 8,
                          }}
                        >
                          {CarData?.NbSg}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "35px",
                      }}
                    >
                      <div className="col2 car-feature-size-mobile">
                        <div className="icon-special">
                          <img
                            style={{ height: 24, width: 24, marginLeft: -30 }}
                            src={Engine}
                            alt="speed"
                          />
                          <span
                            style={{ fontSize: 12, color: "black", width: 100 }}
                          >
                            {CarData?.Power}
                          </span>
                        </div>
                      </div>
                      <div style={{ width: "30px" }} />
                      <div className="col2 car-feature-size-mobile">
                        <div className="icon-special">
                          <img
                            style={{ height: 24, width: 24, marginLeft: 15 }}
                            src={fuel}
                            alt="speed"
                          />
                          <span style={{ fontSize: 12, color: "black" }}>
                            {CarData?.fuel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.car_section}>
          <div className="blog-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Pourrait vous plaire aussi"
                    // title="Pourrait vous plair aussi"
                    description="Une excellente expérience à la prise en charge et au retour du véhicule"
                  />
                </div>
              </div>
              {/* <div style={{ marginLeft: "70px" }} className="row row--15">
              {CarsInfo.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-12 mt--30">
                  <BlogList StyleVar="box-card-style-default" item={item} />
                </div>
              ))}
            </div> */}
              <div style={{ backgroundColor: "#ececec" }}>
                <CarsSlider
                  serviceStyle="gallery-style"
                  textAlign="text-start"
                  carData={CarData}
                  CarsInfo={carList}
                />
              </div>
            </div>
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
        <FooterFour />
      </main>
    </>
  );
};
export default Elements;
