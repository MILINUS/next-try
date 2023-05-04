import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import car from "./images/car.png";
import speed from "./images/speed.svg";
import fuel from "./images/fuel.svg";
import "../../../elements/gallery/Gallery.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { validateDate } from "@mui/x-date-pickers/internals";

const BlogList = ({ item, StyleVar,index,service }) => {
  console.log("This is the Service",service)
  return (
    <Link
      style={{ cursor: "pointer", width: "80%" }}
      to={{
        pathname: `${process.env.PUBLIC_URL + "/gallery/" + item.title}`,
        state: { data: item,service:service },
      }}
      className={`rn-card ${StyleVar}`}
      
    >
      <div style={{}} className="inner"  >
        <div className="thumbnail" >
          <img
            src={item.image[0].original}
            style={{ resizeMode: "cover", width: "100%" }}
            alt="Car"
          />
        </div>
        <div className="content">
          <h4  style={{ marginRight: 15 }}>{item.title} {item.subtitle}</h4>
          <p style={{ fontSize: 14 }}>
            disponible a partir de{" "}
            <span style={{ color: "#f6cc51" }}>{item.price}€</span> par jour
          </p>
          <ul
            className="rn-meta-list"
            style={{ width: "100%", textAlign: "center",columns:3 ,display:"flex",flexDirection:"column",alignItems:"flex-start"}}
          >{item.categorie_location.map((e)=>(
            <li style={{marginBottom:-10}}>-{e}</li>
          ))}
            {/* <li>location de voiture</li>
            <li className="separator">|</li>
            <li>location de voiture</li>
           
            <li className="last_li">location de voiture</li> */}
          </ul>
          <ul className="rn-meta-list" style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop:20
                  }}>
                  
                  <img style={{height:20,width:20,marginLeft:5}} src={car} alt="car" />
                  <div style={{width:2}}/>
                  <span style={{fontSize:10,color:"black"}}>{item.year}</span>
                  <div style={{width:7}}/>
                  <img style={{height:20,width:20}} src={speed} alt="speed" />
                  <div style={{width:2}}/>
                  <div style={{fontSize:10,color:"black"}}>{item.speed}</div>
                  <div style={{width:7}}/>
                  <div style={{fontSize:10,color:"black"}} >
                  <FontAwesomeIcon icon={faCogs} />
                
                    {item.transmition}
                  </div>
                  <div style={{width:7}}/>
                  <img style={{height:18,width:18}} src={fuel} alt="fuel" />
                  <div style={{width:2}}/>
                  <div style={{fontSize:10,color:"black"}}>{item.fuel}</div>
          </ul>
        </div>
      </div>
    </Link>
  );
};
BlogList.propTypes = {
  data: PropTypes.object,
};
export default BlogList;
