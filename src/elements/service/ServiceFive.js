import React from "react";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import GTC2 from "../../pages/Cars/BENTLEY_GTC/2.jpg";
import RRV1 from "../../pages/Cars/RANGE_ROVER_VOGUE/1.jpg";
import V1 from "../../pages/Cars/MERCEDES_V/1.jpeg";
const ServiceList = [
  {
    image: GTC2,
    title: "LOCATION DE VOITURES LUXUEUSES",
    description:
      "Cars Rental Paris vous propose une gamme très large de supercars, cabriolets et SUV de prestige à louer.",
    service: "location de voiture",
    Link: "/Location-Voiture",
  },
  {
    image: RRV1,
    title: "LOCATION AVEC CHAUFFEUR",
    service: "location avec chauffeur",
    description:
      "Cars Rental Paris propose une large gamme de services de limousine avec chauffeur pour répondre à vos besoins.",
    Link: "/Location-Voiture",
  },
  {
    image: V1,
    title: "TRANSFERT AVEC CHAUFFEUR",
    service: "transfert avec chauffeur",
    description:
      "Cars Rental Paris offre un service de transfert de qualité avec des limousines et des mini-fourgonnettes.",
    Link: "/Location-Voiture",
  },
];
const handleClick = (myLink) => () => {
  window.location.href = myLink;
};
const ServiceFive = ({ textAlign, serviceStyle }) => {
  return (
    <div className="row row--15 service-wrapper">
      {ServiceList.map((val, i) => (
        <div
          style={{ cursor: "pointer" }}
          onClick={handleClick(val.Link ? val.Link : "")}
          className="col-lg-4 col-md-6 col-sm-12 col-12"
          key={i}
        >
          <AnimationOnScroll
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`service ${serviceStyle} ${textAlign}`}>
              <div className="inner">
                <div className="content">
                  <h4 className="title">
                    <Link
                      to={{
                        pathname: "/Location-Voiture",
                        state: { data: { service: val.service } },
                      }}
                      dangerouslySetInnerHTML={{ __html: val.title }}
                    ></Link>
                  </h4>
                  <p
                    className="description"
                    dangerouslySetInnerHTML={{ __html: val.description }}
                  ></p>
                </div>
                <div className="image">
                  <img src={`${val.image}`} alt="card Images" />
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      ))}
    </div>
  );
};
export default ServiceFive;
