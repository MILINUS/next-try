import React from "react";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import TR from "./TR.png";
import car from "./car.png";
import speed from "./speed.svg";
import fuel from "./fuel.svg";
const CarsSlider = ({ CarsInfo, textAlign, serviceStyle,carData }) => {
  console.log("DATA1", CarsInfo);
  console.log("DATA2",carData)
  const pathname = window.location.pathname;
  console.log("Route",pathname)
  return (
    <div  style={{background:"transparent"}} className="row row--15 service-wrapper">
      {CarsInfo.filter((e)=>e?.id !==carData?.id).map((val, i) => (
        
        <Link
          to={{
            pathname: `${process.env.PUBLIC_URL + "/gallery/" + val.path }`,
            state: { data: val },
          }}
          style={{ cursor: "pointer",background:"transparent" }}
          className="col-lg-4 col-md-6 col-sm-12 col-12"
          key={i}
        >
          <AnimationOnScroll
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div style={{background:"#f5f8fa"}} className={`service ${serviceStyle} ${textAlign}`}>
              <div className="inner">
                <div className="content">
                  <h4 style={{color:"black"}} className="title">
                    {val.title} {val.subtitle}
                  </h4>
                  <h6  style={{color:"black"}}>
                    A partir de{" "}
                    <span style={{ color: "#f6cc51" }}>{val.price8plus}€</span> par
                    jour
                  </h6>
                </div>
                <div className="image">
                  <img
                    style={{ borderRadius: 5, marginBottom: 20 }}
                    src={`${val.image[0].original}`}
                    alt="card Images"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    style={{ height: 26, width: 26, marginLeft: -10 }}
                    src={car}
                    alt="car"
                  />
                  <span style={{ fontSize: 13, color: "black" }}>
                    {val.year}
                  </span>
                  <div style={{ width: 5 }} />
                  <img
                    style={{ height: 22, width: 22 }}
                    src={speed}
                    alt="speed"
                  />
                  <div style={{ fontSize: 13, color: "black" }}>
                    {val.speed}
                  </div>
                  <div style={{ width: 5 }} />
                  <img style={{ height: 22, width: 22 }} src={TR} alt="fuel" />
                  <div style={{ fontSize: 13, color: "black" }}>
                    {val.transmition}
                  </div>
                  <div style={{ width: 5 }} />
                  <img
                    style={{ height: 22, width: 22 }}
                    src={fuel}
                    alt="fuel"
                  />
                  <div style={{ fontSize: 13, color: "black" }}>{val.fuel}</div>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </Link>
      ))}
    </div>
  );
};
export default CarsSlider;
