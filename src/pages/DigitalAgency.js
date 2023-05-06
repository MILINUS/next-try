import React, { useEffect, useState } from "react";
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
import Sport from "./Mac/Sportive.jpeg";
import SUV from "./Mac/SUV.jpeg";
import Van from "./Mac/VAN.jpeg";
import CC from "./Mac/CC.jpeg";
import { FirestoreDb } from "../Firebase";
import { collection, getDocs,query,where } from "firebase/firestore";
const BannerData = [
  {
    image: BannerImage,
    title: "Digital Agency.",
    description:
      "We help our clients succeed by creating brand identities, digital experiences, and print materials.",
  },
];


const DigitalAgency = () => {
  const [service, setService] = useState("");
  const [carType, setCarType] = useState("");
  const [Clicked, setClicked] = useState(false);
  const [carList, setCarList] = useState([]);
  const [dataChange, setDataChange] = useState(false);
  const addTocities = async () => {
    const carsRef=collection(FirestoreDb, " Cars")
    const q= query(carsRef,where("id","<",6))
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
    addTocities();
  }, [dataChange]);
  return (
    <>
      <SEO title="Digital Agency" />
      <main className="page-wrapper main_layout">
        <HeaderMain btnStyle="btn-small" />
        <div
          style={{ background: "#fff" }}
          className="r-header r-header-inner r-header-strip-01 "
        >
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
                        style={{ marginTop: Clicked ? 15 : 0 }}
                        className="dropdown_customized width-button-container"
                        value={service}
                        data={[
                          "location de voiture",
                          "location avec chauffeur",
                          "transfert avec chauffeur",
                        ]}
                        onChange={(e) => setService(e)}
                      />
                      {Clicked && service === "" && (
                        <span
                          style={{
                            color: "red",
                            fontSize: 10,
                            marginTop: Clicked ? 5 : 0,
                          }}
                        >
                          Veuillez choisir un Service
                        </span>
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
                        <button
                          type="button"
                          onClick={() => setClicked(true)}
                          className="width-button-container speial-stupid-button"
                        >
                          RECHERCHE
                        </button>
                      </Link>
                    ) : (
                      <div className="formgroup width-button-container">
                        <button
                          type="button"
                          onClick={() => setClicked(true)}
                          className="width-button-container speial-stupid-button"
                        >
                          RECHERCHE
                        </button>
                      </div>
                    )}
                    <div className="formgroup width-button-container ">
                      <button
                        type="button"
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
            <div
              // style={{ marginLeft: 250 }}
              className="Details_container categoriesContainer clearfix stupid_slider "
            >
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
        <div
          style={{ background: "#fff" }}
          className="search_media special-search-media"
        >
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
        <div
          style={{ background: "#fff" }}
          className="blog-area rn-section-gap"
        >
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
                CarsInfo={carList}
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
