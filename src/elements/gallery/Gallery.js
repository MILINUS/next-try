import React, { useState } from "react";
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

const Elements = ({ props }) => {
  const location = useLocation();
  const [selected, setSelected] = useState(false);
  const onChange = (time) => {
    setValue(time);
  };
  const [departureLocation, setDepartureLocation] = useState("");
  const [arrivalLocation, setArrivalLocation] = useState("");
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }
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
  const FirebaseStorage1 = `https://firebasestorage.googleapis.com/v0/b/sport-cars-luxury.appspot.com/o/`;
  const FirebaseStorage2 =
    "?alt=media&token=73f41327-4bc0-4da9-a2ea-7e452085d11b";
  const Fire2ForUrus = "?alt=media&token=0c588385-12e3-4850-9b6d-de93a74fe7e8";
  const CarsInfo = [
    {
      id: 0,
      AssReduc: "100",
      title: "Porsche",
      Power: "V6-462hp",
      KmSup: "4",
      NbSg: "5",
      tarifHeure4: "",
      tarifHeure8: "",
      description:
        "Le Porsche Cayenne Coupé est une véritable icône du monde des SUV de luxe, offrant une combinaison inégalée de performances sportives, de luxe et de polyvalence pratique. Avec son design élégant et distinctif, le Cayenne Coupé est sûr de vous faire tourner les têtes partout où vous allez.L'intérieur est spacieux et confortable, offrant suffisamment d'espace pour accueillir jusqu'à cinq passagers. Les sièges sont recouverts de cuir de qualité supérieure et équipés de fonctionnalités de réglage électrique pour garantir un confort optimal, même lors de longs trajets.Le Cayenne Coupé est également équipé de nombreuses fonctionnalités de sécurité avancées telles que le freinage d'urgence automatique, le régulateur de vitesse adaptatif, le système de surveillance des angles morts et le système d'assistance au stationnement. Avec toutes ces fonctionnalités, vous pouvez conduire en toute confiance, sachant que vous êtes protégé dans toutes les situations.Si vous cherchez un SUV de luxe performant, élégant et polyvalent, le Porsche Cayenne Coupé est un choix exceptionnel. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que ce véhicule incroyable a à offrir.",
      subtitle: "CAYENNE COUPÉE",
      price: "550",
      franchise: "10000",
      price4to7: "450",
      price8plus: "400",
      reductedFranchise: "6000",
      year: "2022",
      transmition: "Automatique",
      fuel: "ESSENCE",
      speed: "248km/h",
      image: [
        {
          original: `${FirebaseStorage1}Porshe_MACAN%2F1.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}Porshe_MACAN%2F1.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}Porshe_MACAN%2F2.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}Porshe_MACAN%2F2.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}Porshe_MACAN%2F3.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}Porshe_MACAN%2F3.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}Porshe_MACAN%2F4.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}Porshe_MACAN%2F4.jpg${FirebaseStorage2}`,
        },
      ],
      categorie_location: ["location de voiture"],
      type: "SUV",
      brand: "Porsche",
    },
    {
      id: 1,
      AssReduc: "100",
      title: "Range Rover",
      KmSup: "11",
      Power: "V8-518hp",
      NbSg: "5",
      tarifHeure4: "1600",
      tarifHeure8: "2700",
      heureSup: "350",
      price4to7: "1000",
      price8plus: "900",
      franchise: "30000",
      reductedFranchise: "25000",
      description:
        "Le Range Rover Vogue LWB est le summum du luxe, de la performance et de la polyvalence dans le monde des SUV haut de gamme. Avec sa silhouette élégante et son design moderne, ce véhicule est conçu pour impressionner.L'intérieur est tout aussi impressionnant, offrant un niveau de luxe et de confort inégalé. Avec des sièges en cuir de qualité supérieure, des finitions en bois et des fonctionnalités de réglage électrique pour un confort personnalisé, chaque voyage est une expérience de luxe. De plus, avec l'empattement long de cette version, l'espace pour les passagers arrière est encore plus généreux.Le Range Rover Vogue LWB est également équipé de nombreuses fonctionnalités de sécurité avancées telles que la caméra de recul, le freinage d'urgence automatique, le régulateur de vitesse adaptatif et le système de surveillance des angles morts. Avec toutes ces fonctionnalités, vous pouvez conduire en toute confiance, sachant que vous êtes protégé dans toutes les situations.Si vous recherchez le summum du luxe et de la performance dans un SUV haut de gamme, le Range Rover Vogue LWB est le choix parfait. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que ce véhicule incroyable a à offrir.",
      subtitle: "VOGUE LWB(LONG PACK CHAUFFEUR)",
      categorie_location: [
        "location de voiture",
        "location avec chauffeur",
        "transfert avec chauffeur",
      ],
      price: "1200",
      year: "2022",
      transmition: "Automatique",
      fuel: "ESSENCE",
      speed: "225km/h",
      image: [
        {
          original: `${FirebaseStorage1}RANGE_ROVER_VOGUE%2F1.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}RANGE_ROVER_VOGUE%2F1.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}RANGE_ROVER_VOGUE%2F2.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}RANGE_ROVER_VOGUE%2F2.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}RANGE_ROVER_VOGUE%2F3.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}RANGE_ROVER_VOGUE%2F3.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}RANGE_ROVER_VOGUE%2F4.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}RANGE_ROVER_VOGUE%2F4.jpg${FirebaseStorage2}`,
        },
      ],
      type: "SUV",
      brand: "Range Rover",
    },
    {
      id: 2,
      AssReduc: "100",
      Power: "V8-600hp",
      title: "Bentley",
      KmSup: "11",
      NbSg: "5",
      tarifHeure4: "1600",
      tarifHeure8: "2700",
      heureSup: "350",
      price4to7: "2000",
      price8plus: "1800",
      franchise: "30000",
      reductedFranchise: "25000",
      price: "2200",
      description:
        "Le Bentley Bentayga est un SUV de luxe conçu pour offrir une expérience de conduite inégalée. Avec son design élégant et sa performance supérieure, ce véhicule représente l'essence du luxe britannique.L'intérieur est tout aussi impressionnant, avec des sièges en cuir de qualité supérieure et des finitions en bois exquis pour offrir un confort et un luxe incomparables. Avec des fonctionnalités de réglage électrique pour les sièges, la climatisation et les systèmes de divertissement, chaque voyage est une expérience confortable et personnalisée.Le Bentayga est également équipé de nombreuses fonctionnalités de sécurité avancées telles que la caméra à 360 degrés, le régulateur de vitesse adaptatif, le système de surveillance des angles morts et le freinage d'urgence automatique. Avec toutes ces fonctionnalités, vous pouvez conduire en toute confiance, sachant que vous êtes protégé dans toutes les situations.Si vous cherchez un SUV de luxe avec une performance incroyable et un confort exceptionnel, le Bentley Bentayga est un choix parfait. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que ce véhicule magnifique a à offrir. ",
      subtitle: "Bentayga",
      year: "2022",
      transmition: "Automatique",
      fuel: "ESSENCE",
      speed: "301km/h",
      image: [
        {
          original: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F8.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F8.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F1.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F1.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F2.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F2.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F3.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F3.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F4.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F4.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F5.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F5.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F6.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F6.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F7.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F7.jpg${FirebaseStorage2}`,
        },

        {
          original: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F9.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F9.jpg${FirebaseStorage2}`,
        },
      ],
      categorie_location: [
        "location de voiture",
        "location avec chauffeur",
        "transfert avec chauffeur",
      ],
      type: "SUV",
      brand: "Bentley",
    },
    {
      id: 3,
      AssReduc: "100",
      Power: "V12-563hp",
      title: "ROLLS ROYCE",
      KmSup: "11",
      NbSg: "5",
      tarifHeure4: "1600",
      tarifHeure8: "2700",
      heureSup: "350",
      description:
        "Le Rolls-Royce Cullinan est le summum du luxe et de la performance dans le monde des SUV. Avec son design élégant et son savoir-faire artisanal incomparable, ce véhicule incarne l'excellence britannique. L'intérieur est tout aussi impressionnant, avec des sièges en cuir de qualité supérieure et des finitions en bois exquis pour offrir un confort et un luxe incomparables. Avec des fonctionnalités de réglage électrique pour les sièges, la climatisation et les systèmes de divertissement, chaque voyage est une expérience de luxe personnalisée.L'intérieur est tout aussi impressionnant, avec des sièges en cuir de qualité supérieure et des finitions en bois exquis pour offrir un confort et un luxe incomparables. Avec des fonctionnalités de réglage électrique pour les sièges, la climatisation et les systèmes de divertissement, chaque voyage est une expérience de luxe personnalisée.Le Rolls-Royce Cullinan est le choix parfait si vous cherchez le summum du luxe, de la performance et de la sécurité dans un SUV haut de gamme. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que ce véhicule extraordinaire a à offrir.",
      price4to7: "2650",
      price8plus: "2450",
      franchise: "30000",
      reductedFranchise: "25000",
      subtitle: "Cullinan",
      price: "3000",
      year: "2022",
      transmition: "Automatique",
      fuel: "ESSENCE",
      speed: "250km/h",
      image: [
        {
          original: `${FirebaseStorage1}RRCULINAN%2F1.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}RRCULINAN%2F1.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}RRCULINAN%2F2.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}RRCULINAN%2F2.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}RRCULINAN%2F3.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}RRCULINAN%2F3.jpg${FirebaseStorage2}`,
        },
      ],
      categorie_location: [
        "location de voiture",
        "location avec chauffeur",
        "transfert avec chauffeur",
      ],
      type: "SUV",
      brand: "ROLLS ROYCE",
    },
    {
      id: 4,
      AssReduc: "100",
      Power: "V8-641hp",
      title: "Lamborgini",
      KmSup: "8",
      NbSg: "5",
      tarifHeure4: "",
      tarifHeure8: "",
      description:
        "Le Lamborghini Urus est un SUV de luxe ultra-performant qui allie la puissance et le style iconique de Lamborghini à la polyvalence et au confort d'un SUV. Ce véhicule est conçu pour offrir une expérience de conduite unique qui allie performances de course et fonctionnalités de luxe.Sous le capot, vous trouverez un moteur V8 biturbo de 4,0 litres qui développe une puissance de 641 chevaux. Avec une transmission automatique à 8 vitesses et une transmission intégrale, l'Urus peut atteindre une vitesse maximale de 190 mph, ce qui en fait l'un des SUV les plus rapides et les plus puissants sur la route.L'intérieur est tout aussi impressionnant, avec des sièges en cuir de qualité supérieure et des finitions en fibre de carbone pour offrir un confort et un luxe incomparables. Avec des fonctionnalités de réglage électrique pour les sièges, la climatisation et les systèmes de divertissement, chaque voyage est une expérience de luxe personnalisée.L'Urus est également équipé de nombreuses fonctionnalités de sécurité avancées telles que la caméra à 360 degrés, le régulateur de vitesse adaptatif, le système de surveillance des angles morts et le freinage d'urgence automatique. Avec toutes ces fonctionnalités, vous pouvez conduire en toute confiance, sachant que vous êtes protégé dans toutes les situations.Si vous cherchez un SUV de luxe ultra-performant qui offre une expérience de conduite unique, le Lamborghini Urus est le choix parfait. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que ce véhicule extraordinaire a à offrir.",
      subtitle: "URUS",
      price: "2200",
      franchise: "30000",
      price4to7: "2000",
      price8plus: "1800",
      reductedFranchise: "25000",
      year: "2022",
      transmition: "Automatique",
      fuel: "ESSENCE",
      speed: "305km/h",
      image: [
        {
          original: `${FirebaseStorage1}URUS%2F5.JPG${Fire2ForUrus}`,
          thumbnail: `${FirebaseStorage1}URUS%2F5.JPG${Fire2ForUrus}`,
        },
        {
          original: `${FirebaseStorage1}URUS%2F3.JPG${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}URUS%2F3.JPG${FirebaseStorage2}`,
        },

        {
          original: `${FirebaseStorage1}URUS%2F2.JPG${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}URUS%2F2.JPG${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}URUS%2F4.JPG${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}URUS%2F4.JPG${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}URUS%2F6.JPG${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}URUS%2F6.JPG${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}URUS%2F1.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}URUS%2F1.jpg${FirebaseStorage2}`,
        },
      ],
      categorie_location: ["location de voiture"],
      type: "SUV",
      brand: "Lamborgini",
    },
    {
      id: 5,
      AssReduc: "100",
      Power: "V8-454hp",
      title: "MASERATI",
      KmSup: "6",
      NbSg: "4",
      tarifHeure4: "",
      tarifHeure8: "",
      description:
        " Le Maserati GranTurismo est un coupé de luxe haut de gamme qui allie le style italien emblématique de Maserati à des performances exceptionnelles. Avec son design élégant et son savoir-faire artisanal incomparable, ce véhicule incarne le raffinement et l'élégance.Sous le capot, vous trouverez un moteur V8 de 4,7 litres qui développe une puissance de 454 chevaux. Avec une transmission automatique à 6 vitesses, le GranTurismo peut atteindre une vitesse maximale de 185 mph, ce qui en fait l'un des coupés les plus rapides et les plus performants sur la route.L'intérieur est tout aussi impressionnant, avec des sièges en cuir de qualité supérieure et des finitions en bois exquis pour offrir un confort et un luxe incomparables. Avec des fonctionnalités de réglage électrique pour les sièges, la climatisation et les systèmes de divertissement, chaque voyage est une expérience de luxe personnalisée.Le GranTurismo est également équipé de nombreuses fonctionnalités de sécurité avancées telles que la caméra de recul, le régulateur de vitesse adaptatif et le système de surveillance des angles morts. Avec toutes ces fonctionnalités, vous pouvez conduire en toute confiance, sachant que vous êtes protégé dans toutes les situations.Si vous cherchez un coupé de luxe haut de gamme qui offre des performances exceptionnelles et un confort incomparable, le Maserati GranTurismo est le choix parfait. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que ce véhicule extraordinaire a à offrir.",
      price4to7: "650",
      price8plus: "500",
      franchise: "10000",
      reductedFranchise: "600",
      subtitle: "GRAND TOURISMO",
      price: "800",
      year: "2022",
      transmition: "Automatique",
      fuel: "ESSENCE",
      speed: "320km/h",
      image: [
        {
          original: `${FirebaseStorage1}MAZERATI%2F1.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}MAZERATI%2F1.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}MAZERATI%2F2.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}MAZERATI%2F2.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}MAZERATI%2F3.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}MAZERATI%2F3.jpg${FirebaseStorage2}`,
        },
        {
          original: `${FirebaseStorage1}MAZERATI%2F4.jpg${FirebaseStorage2}`,
          thumbnail: `${FirebaseStorage1}MAZERATI%2F4.jpg${FirebaseStorage2}`,
        },
      ],
      categorie_location: ["location de voiture"],
      type: "Voitures-Sportives",
      brand: "MASERATI",
    },
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
  const CarData = location.state.data;
  console.log("DATa", CarData);
  const [service, setService] = useState(
    location.state.service !== ""
      ? location.state.service
      : "location de voiture"
  );
  const format = "HH:mm";
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <SEO title="Gallery || CARS RENTAL PARIS - React Business  Template" />
      <main>
        <HeaderMain />
        <section className={styles.car_section}>
          <div className={styles.Details_container}>
            <div className="r-sec-head r-sec-left-head">
              <h2>
                <b>{CarData.title}</b>
              </h2>
              <span>
                <div className="horizontal-yellow-line"></div>
                {CarData.subtitle}
              </span>
            </div>
            <div className={styles.row_s}>
              <div className={styles.col_12}>
                <ImageGallery items={CarData.image} />
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
                          <div>{CarData.description}</div>
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
                <form className={styles.car_info_section}>
                  <h6 style={{color:"black"}} htmlFor="fromDate">PRISE EN CHARGE & DESTINATION</h6>
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
                                CarData.title
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
                      <h6 style={{color:"black"}}>TARIFS</h6>
                      <table className={styles.rates}>
                        <tbody>
                          <tr>
                            <td>1 à 3 jours</td>
                            <td>{CarData.price}€</td>
                          </tr>
                          <tr>
                            <td>4 à 7 jours</td>
                            <td>{CarData.price4to7}€</td>
                          </tr>
                          <tr>
                            <td>+8 jours</td>
                            <td>{CarData.price8plus}€</td>
                          </tr>
                          <tr>
                            <td>Kilomètre supplémentaire</td>
                            <td>{CarData.KmSup ? CarData.KmSup : ""}€</td>
                          </tr>
                          <tr>
                            <td>Franchise</td>
                            <td>{CarData.franchise}€</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : service === "location avec chauffeur" ? (
                  <div className={styles.car_info_section}>
                    <div>
                      <h6 style={{color:"black"}}>TARIFS</h6>
                      <table className={styles.rates}>
                        <tbody>
                          <tr>
                            <td>4 heures</td>
                            <td>{CarData.tarifHeure4}€</td>
                          </tr>
                          <tr>
                            <td>8 heures</td>
                            <td>{CarData.tarifHeure8}€</td>
                          </tr>
                          <tr>
                            <td>Heure Supplémentaire</td>
                            <td>{CarData.heureSup}€</td>
                          </tr>
                          <tr>
                            <td>Kilomètre supplémentaire</td>
                            <td>{CarData.KmSup}€</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : service === "transfert avec chauffeur" ? (
                  <div className={styles.car_info_section}>
                    <h6 style={{color:"black"}} className="yellow-underline">Date & Heure</h6>
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
                  <h6 style={{color:"black"}}>CARACTÉRISTIQUES DU VÉHICULE</h6>
                  <div
                    className="row_s  row_s_special"
                    style={{ marginLeft: 10 }}
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
                          {CarData.speed}
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
                          {CarData.speed}
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
                          {CarData.transmition}
                        </span>
                      </div>
                    </div>
                    <div className="col2 car-feature-size-mobile">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          // marginLeft: 20,
                          marginBottom: 20,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          style={{ height: 24, width: 24, marginLeft: 10 }}
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
                          {CarData.NbSg}
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
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: -10,
                            marginBottom: 20,
                          }}
                        >
                          <img
                            style={{ height: 24, width: 24, marginLeft: 15 }}
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
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            // marginLeft: 20,
                            marginBottom: 20,
                          }}
                        >
                          <img
                            style={{ height: 24, width: 24, marginLeft: 15 }}
                            src={fuel}
                            alt="speed"
                          />
                          <span style={{ fontSize: 12, color: "black" }}>
                            {CarData.fuel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <form className={styles.car_info_section}>
                  <h6 style={{color:"black"}} htmlFor="fromDate">CHANGER DE SERVICE</h6>
                  <div className={styles.big_separator} />
                  <div>
                    <DropdownList
                      value={service}
                      onChange={(nextValue) => setService(nextValue)}
                      className="dropdown_customized"
                      data={CarData.categorie_location}
                      id="drop"
                      selected={null}
                    />
                  </div>
                </form>
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
              <div style={{backgroundColor:"#ececec"}}>
                <CarsSlider
                  serviceStyle="gallery-style"
                  textAlign="text-start"
                  carData={CarData}
                  CarsInfo={CarsInfo}
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
