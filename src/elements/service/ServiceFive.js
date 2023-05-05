import React from "react";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
const FirebaseStorage1 = `https://firebasestorage.googleapis.com/v0/b/sport-cars-luxury.appspot.com/o/`;
const FirebaseStorage2 =
  "?alt=media&token=73f41327-4bc0-4da9-a2ea-7e452085d11b";
const ServiceList = [
  {
    image: `${FirebaseStorage1}BENTLEY_GTC%2F2.jpg${FirebaseStorage2}`,
    title: "LOCATION DE VOITURES LUXUEUSES",
    description:
      "Cars Rental Paris vous propose une gamme très large de supercars, cabriolets et SUV de prestige à louer.",
    service: "location de voiture",
    Link: "/Location-Voiture",
  },
  {
    image: `${FirebaseStorage1}RANGE_ROVER_VOGUE%2F1.jpg${FirebaseStorage2}`,
    title: "LOCATION AVEC CHAUFFEUR",
    service: "location avec chauffeur",
    description:
      "Cars Rental Paris propose une large gamme de services de limousine avec chauffeur pour répondre à vos besoins.",
    Link: "/Location-Voiture",
  },
  {
    image: `${FirebaseStorage1}MERCEDES_V%2F1.jpeg${FirebaseStorage2}`,
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
