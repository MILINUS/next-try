import React, { useState } from "react";
import SEO from "../common/SEO";
import FooterFour from "../common/footer/FooterFour";

import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import ServiceFive from "../elements/service/ServiceFive";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import BannerImage from "../components/blog/itemProp/images/Acceil.jpg";
import "../elements/gallery/Gallery.module.scss";
import { DropdownList } from "react-widgets";
import CarsSlider from "../elements/service/carsSlider";
import HeaderMain from "../common/header/HeaderMain";
import { Link } from "react-router-dom";
import B from "./Mac/Berline.jpeg";
import Limited from "./Mac/Limited.jpeg";
import Limo from "./Mac/Limo.jpeg";
import Sport from "./Mac/Sportive.jpeg";
import SUV from "./Mac/SUV.jpeg";
import Van from "./Mac/VAN.jpeg";
import CC from "./Mac/CC.jpeg";
const BannerData = [
  {
    image: BannerImage,
    title: "Digital Agency.",
    description:
      "We help our clients succeed by creating brand identities, digital experiences, and print materials.",
  },
];  
const FirebaseStorage1=`https://firebasestorage.googleapis.com/v0/b/sport-cars-luxury.appspot.com/o/`
const FirebaseStorage2='?alt=media&token=73f41327-4bc0-4da9-a2ea-7e452085d11b'
const Fire2ForUrus='?alt=media&token=0c588385-12e3-4850-9b6d-de93a74fe7e8'

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
        original:`${FirebaseStorage1}Porshe_MACAN%2F4.jpg${FirebaseStorage2}`,
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
        thumbnail:`${FirebaseStorage1}BENTLEY_BENTAYGA%2F8.jpg${FirebaseStorage2}`,
      },
      {
        original: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F1.jpg${FirebaseStorage2}`,
        thumbnail: `${FirebaseStorage1}BENTLEY_BENTAYGA%2F1.jpg${FirebaseStorage2}`,
      },
      {
        original:`${FirebaseStorage1}BENTLEY_BENTAYGA%2F2.jpg${FirebaseStorage2}`,
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

const DigitalAgency = () => {
  const [service, setService] = useState("");
  const [carType, setCarType] = useState("");
  const [Clicked, setClicked] = useState(false);
  return (
    <>
      <SEO title="Digital Agency" />
      <main className="page-wrapper main_layout" >
        <HeaderMain btnStyle="btn-small" />
        <div style={{background:"#fff"}} className="r-header r-header-inner r-header-strip-01 ">
          {/* Start Slider Area  */}
          <Slider
            className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow"
            {...BannerActivation}
          >
            {BannerData.map((data, index) => (
              <div key={index} className="single-slide">
                <div
                  className="height-950 img-filter bg_image"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})`,
                  }}
                >
                  <div className="container">
                    <div className="row row--30 align-items-center">
                      <div className="order-2 order-lg-1 col-lg-7">
                        <div className="inner text-start"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          {/* End Slider Area  */}
          {/* <Separator /> */}
          <div
            className="r-car-search "
            style={{
              display: "flex",
              height: "100%",
              position: "relative",
              zIndex: 1,
              width: "100%",
              backgroundColor: "transparent",
            }}
          >
            <div className="search-container search_media" style={{}}>
              <form className="special-container-search">
                <div className="search_media row_s_s">
                  <div className="search_container ">
                    <div className="formgroup ">
                      <label
                        style={{
                          marginBottom: 0,
                          fontSize: 12,
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Service
                      </label>
                      <DropdownList
                        placeholder="Service"
                        style={{marginTop:Clicked?15:0}}
                        className="dropdown_customized width-button-container"
                        value={service}
                        data={[
                          "location de voiture",
                          "location avec chauffeur",
                          "transfert avec chauffeur",
                        ]}
                        onChange={(e) => setService(e)}
                      />
                      {Clicked &&service==="" &&(
                        <span style={{color:"red",fontSize: 10,marginTop:Clicked?5:0}}>Veuillez choisir un Service</span>
                      )}
                    </div>
                    <div className="formgroup">
                      <label
                        style={{
                          marginBottom: -5,
                          fontSize: 12,
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Type de Véhicule
                      </label>
                      <div className="content">
                        <DropdownList
                          value={carType}
                          className="dropdown_customized width-button-container"
                          placeholder="Type de vehicule"
                          data={[
                            "Cabriolet",
                            // "Edition Limitée",
                            "Berlines De Luxe",
                            "Voitures-Sportives",
                            "SUV",
                            "Minivans De Luxe",
                            "Limousine",
                          ]}
                          
                          onChange={(e) => setCarType(e)}
                        />
                      </div>
                    </div>
                    {Clicked && service !== "" ? (
                      <Link
                        to={{
                          pathname: "/Location-Voiture",
                          state: {
                            data: { carType: carType, service: service },
                          },
                        }}
                        className="formgroup width-button-container"
                       
                      >
                        <button type="button"
                          onClick={() => setClicked(true)}
                          
                          className="width-button-container speial-stupid-button"
                        >
                          RECHERCHE
                        </button>
                      </Link>
                    ) : (
                      <div className="formgroup width-button-container">
                        <button type="button"
                          onClick={() => setClicked(true)}
                          className="width-button-container speial-stupid-button"
                        >
                          RECHERCHE
                        </button>
                      </div>
                    )}
                    <div className="formgroup width-button-container ">
                      <button type="button"
                        className="speial-stupid-button"
                        onClick={() => {
                          setService("");
                          setCarType("");
                        }}
                      >
                        EFFACER
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div style={{ height: 80 }} />
          <section
            style={{
              // width: "200%",
              // marginLeft: -850,
              backgroundColor: "transparent",
              // marginBottom: -100,
            }}
            id="f-car-categories"
            className="f-car-categories digital_slider "
          >
            {/* <div className="r-sec-head  r-sec-head-c">
                <h2>
                  <b>Catégories</b>
                </h2>
                <span>Veuillez sélectionner une catégorie</span>
              </div> */}
            <div className="Details_container categoriesContainer clearfix ">
              <div className="car-categories-image-wrapper">
              {/* <Link
                to={{
                  pathname: "/Location-Voiture",
                  state: {
                    data: { carType: "Edition Limitée", service: service },
                  },
                }}
                  onClick={() => setCarType("Edition Limitée")}
                  className="car-category-image "
                >
                  <img
                    src={Limited}
                    className="img-fluid"
                    alt="car category"
                    id="Cabriolet"
                  />
                  <p className="text-center">Edition Limitée</p>
                </Link> */}
                <Link
                  onClick={() => setCarType("Cabriolet")}
                  className="car-category-image "
                  to={{
                    pathname: "/Location-Voiture",
                    state: {
                      data: { carType: "Cabriolet", service: service },
                    },
                  }}
                >
                  <img
                    src={CC}
                    className="img-fluid"
                    alt="car category"
                    id="Cabriolet"
                  />
                  <p className="text-center">Cabriolet</p>
                </Link>
              
                <Link
                to={{
                  pathname: "/Location-Voiture",
                  state: {
                    data: { carType: "Berlines De Luxe", service: service },
                  },
                }}
                  onClick={() => setCarType("Berlines De Luxe")}
                  className="car-category-image "
                >
                  <img
                    src={B}
                    className="img-fluid"
                    alt="car category"
                    id="Cabriolet"
                  />
                  <p className="text-center">Berlines De Luxe</p>
                </Link>
                <Link
                to={{
                  pathname: "/Location-Voiture",
                  state: {
                    data: { carType: "Voitures-Sportives", service: service },
                  },
                }}
                  onClick={() => setCarType("Voitures-Sportives")}
                  className="car-category-image "
                >
                  <img
                    src={Sport}
                    className="img-fluid"
                    alt="car category"
                    id="Cabriolet"
                  />
                  <p className="text-center">Voitures-Sportives</p>
                </Link>
                <Link
                to={{
                  pathname: "/Location-Voiture",
                  state: {
                    data: { carType: "SUV", service: service },
                  },
                }}
                  onClick={() => setCarType("SUV")}
                  className="car-category-image "
                >
                  <img
                    src={SUV}
                    className="img-fluid"
                    alt="car category"
                    id="Cabriolet"
                  />
                  <p className="text-center">SUV</p>
                </Link>
                <Link
                to={{
                  pathname: "/Location-Voiture",
                  state: {
                    data: { carType: "Minivans De Luxe", service: service },
                  },
                }}
                  onClick={() => setCarType("Minivans De Luxe")}
                  className="car-category-image "
                >
                  <img
                    src={Van}
                    className="img-fluid"
                    alt="car category"
                    id="Cabriolet"
                  />
                  <p className="text-center">Minivans De Luxe</p>
                </Link>
                {/* <Link
                to={{
                  pathname: "/Location-Voiture",
                  state: {
                    data: { carType: "Limousine", service: service },
                  },
                }}
                  onClick={() => setCarType("Limousine")}
                  className="car-category-image "
                >
                  <img
                    src={Limo}
                    className="img-fluid"
                    alt="car category"
                    id="Cabriolet"
                  />
                  <p className="text-center">Limousine</p>
                </Link> */}
              </div>
            </div>
          </section>
        </div>
        {/* Start Service Area  */}
        <div className="media_separator" style={{ marginTop: "20%" }} />
        <div style={{background:"#fff"}} className="search_media special-search-media">
          <div className="rn-service-area rn-section-gap ">
            <div className="container ">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="About Our Company."
                    title="Nos Services"
                    description="Vous souhaitez prendre le volant d'un véhicule de luxe lors d'un week-end, d'un voyage d'affaires ou sans raison particulière ? Optez pour la location de voitures de luxe avec nos bureaux à Paris, Cannes, Monaco et Nice."
                  />
                </div>
              </div>
              <ServiceFive
                //  CarsInfo={CarsInfo}
                serviceStyle="gallery-style"
                textAlign="text-start"
              />
            </div>
          </div>
        </div>
        {/* End Service Area  */}
        <div className="media_separator" />
        {/* <Separator /> */}

        {/* <Separator /> */}
        <div style={{background:"#fff"}} className="blog-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="NOTRE SÉLECTION POUR VOUS"
                  title="LES COUPS DE COEUR DE NOS CLIENTS"
                  description="Une excellente expérience à la prise en charge et au retour du véhicule
                                    "
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
            <div>
              <CarsSlider
                serviceStyle="gallery-style"
                textAlign="text-start"
                CarsInfo={CarsInfo}
              />
            </div>
          </div>
        </div>
        <FooterFour />
      </main>
    </>
  );
};
export default DigitalAgency;
