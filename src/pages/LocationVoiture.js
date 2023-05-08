import React, { useEffect, useState } from "react";
import "../elements/gallery/Gallery.module.scss";
import BlogList from "../components/blog/itemProp/BlogList";
import { DropdownList } from "react-widgets";
import { useLocation } from "react-router-dom";
import B from "./Mac/Berline.jpeg";
import Sport from "./Mac/Sportive.jpeg";
import SUV from "./Mac/SUV.jpeg";
import Van from "./Mac/VAN.jpeg";
import CC from "./Mac/CC.jpeg";
import FooterFour from "../common/footer/FooterFour";
import HeaderMain from "../common/header/HeaderMain";
import { FirestoreDb } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
const LocationVoiture = () => {
  const [carList, setCarList] = useState([]);
  const [dataChange,setDataChange]=useState(false)
  const addTocities=async()=>{
    await getDocs(collection(FirestoreDb, " Cars"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));          
                setCarList(newData);
                setDataChange(true)  
            })
  }
  useEffect(()=>{
   addTocities()
  },[dataChange])

  const location = useLocation();
  const SearchData = location?.state?.data;
  console.log("test", location.state);
  const [service, setService] = useState(
    SearchData?.service ? SearchData?.service : ""
  );
  const [carType, setCartype] = useState(
    SearchData?.carType ? SearchData?.carType : ""
  );
  const [brand, setBrand] = useState("");
  console.log("This is the page search Data", service, carType, brand);
  console.log("This is the search Data", SearchData);
  return (
    <>
      <main className="page-wrapper">
        <div className="page_container">
          <HeaderMain />
          <div className="search_container">
            <div className="formgroup">
              <DropdownList
                value={service}
                onChange={(nextValue) => setService(nextValue)}
                className="dropdown_customized"
                placeholder="service"
                defaultValue="Yellow"
                data={[
                  "location de voiture",
                  "location avec chauffeur",
                  // "transfert avec chauffeur",
                ]}
              />
            </div>
            <div className="formgroup">
              <DropdownList
                value={brand}
                onChange={(nextValue) => setBrand(nextValue)}
                className="dropdown_customized"
                placeholder="Marque du vehicule"
                defaultValue="Yellow"
                data={[
                  "Ferrari",
                  "Mercedes",
                  "Porsche",
                  "Bentley",
                  "Tesla",
                  "ROLLS ROYCE",
                  "Range Rover",
                  "Maybach",
                  "MASERATI",
                ]}
              />
            </div>
            <div className="formgroup">
              <button
                onClick={() => {
                  setBrand("");
                  setService("");
                  setCartype("");
                }}
              >
                EFFACER
              </button>
            </div>
          </div>
          <section id="f-car-categories" className="f-car-categories ">
            <div className="r-sec-head  r-sec-head-c">
              <h2>
                <b>Catégories</b>
              </h2>
              <span>Veuillez sélectionner une catégorie</span>
            </div>
            <div className="Details_container categoriesContainer clearfix ">
              <div
                className="car-categories-image-wrapper"
                style={{ height: 200, marginTop: 20, marginBottom: -15 }}
              >
                <div
                  style={{
                    width: carType === "Cabriolet" ? 160 : 120,
                    height: carType === "Cabriolet" ? 160 : 120,
                  }}
                  onClick={() => setCartype("Cabriolet")}
                  className="car-category-image "
                >
                  <img
                    src={CC}
                    className="img-fluid"
                    alt="car category"
                    id="Cabriolet"
                  />
                  <p
                    className="text-center"
                    style={{ color: carType === "Cabriolet" ? "gold" : "grey" }}
                  >
                    Cabriolet
                  </p>
                </div>
                {/* <div
                  onClick={() => setCartype("Edition Limitée")}
                  className="car-category-image "
                >
                  <img
                    src={Limited}
                    className="img-fluid"
                    alt="car category"
                    id="Cabriolet"
                  />
                  <p
                    className="text-center"
                    style={{
                      color: carType === "Edition Limitée" ? "gold" : "grey",
                    }}
                  >
                    Edition Limitée
                  </p>
                </div> */}
                <div
                  style={{
                    width: carType === "Berlines De Luxe" ? 160 : 120,
                    height: carType === "Berlines De Luxe" ? 160 : 120,
                  }}
                  onClick={() => setCartype("Berlines De Luxe")}
                  className="car-category-image "
                >
                  <img
                    src={B}
                    className="img-fluid"
                    alt="car category"
                    id="Cabriolet"
                  />
                  <p
                    className="text-center"
                    style={{
                      color: carType === "Berlines De Luxe" ? "gold" : "grey",
                    }}
                  >
                    Berlines De Luxe
                  </p>
                </div>
                <div
                  style={{
                    width: carType === "Voitures-Sportives" ? 160 : 120,
                    height: carType === "Voitures-Sportives" ? 160 : 120,
                  }}
                  onClick={() => setCartype("Voitures-Sportives")}
                  className="car-category-image "
                >
                  <img
                    src={Sport}
                    className="img-fluid"
                    alt="car category"
                    id="Cabriolet"
                  />
                  <p
                    className="text-center"
                    style={{
                      color: carType === "Voitures-Sportives" ? "gold" : "grey",
                    }}
                  >
                    Voitures-Sportives
                  </p>
                </div>
                <div
                  style={{
                    width: carType === "SUV" ? 160 : 120,
                    height: carType === "SUV" ? 160 : 120,
                  }}
                  onClick={() => setCartype("SUV")}
                  className="car-category-image "
                >
                  <img
                    src={SUV}
                    className="img-fluid"
                    alt="car category"
                    id="Cabriolet"
                  />
                  <p
                    className="text-center"
                    style={{ color: carType === "SUV" ? "gold" : "grey" }}
                  >
                    SUV
                  </p>
                </div>
                <div
                  style={{
                    width: carType === "Minivans De Luxe" ? 160 : 120,
                    height: carType === "Minivans De Luxe" ? 160 : 120,
                  }}
                  onClick={() => setCartype("Minivans De Luxe")}
                  className="car-category-image "
                >
                  <img
                    src={Van}
                    className="img-fluid"
                    alt="car category"
                    id="Cabriolet"
                  />
                  <p
                    className="text-center"
                    style={{
                      color: carType === "Minivans De Luxe" ? "gold" : "grey",
                    }}
                  >
                    Minivans De Luxe
                  </p>
                </div>
                {/* <div
                  onClick={() => setCartype("Limousine")}
                  className="car-category-image "
                >
                  <img
                    src={Limo}
                    className="img-fluid"
                    alt="car category"
                    id="Cabriolet"
                  />
                  <p
                    className="text-center"
                    style={{ color: carType === "Limousine" ? "gold" : "grey" }}
                  >
                    Limousine
                  </p>
                </div> */}
              </div>
            </div>
          </section>
          <div className="blog-area rn-section-gap">
            <div className="container">
              <div className="row row--15 CarsSliderInLocation">
                {carList.map((item, index) => (
                  <>
                    {carType === "" && brand === "" && service === "" ? (
                      <div
                        key={item.id}
                        className="col-lg-4 col-md-6 col-12 mt--30"
                      >
                        <BlogList
                          StyleVar="box-card-style-default"
                          item={item}
                          service={service}
                        />
                      </div>
                    ) : carType === "" && brand === "" ? (
                      item.categorie_location?.includes(service) && (
                        <div
                          key={item.id}
                          className="col-lg-4 col-md-6 col-12 mt--30"
                        >
                          <BlogList
                            StyleVar="box-card-style-default"
                            item={item}
                            service={service}
                          />
                        </div>
                      )
                    ) : carType === "" && service === "" ? (
                      item.brand === brand && (
                        <div
                          key={item.id}
                          className="col-lg-4 col-md-6 col-12 mt--30"
                        >
                          <BlogList
                            StyleVar="box-card-style-default"
                            item={item}
                            service={service}
                          />
                        </div>
                      )
                    ) : service === "" && brand === "" ? (
                      item.type === carType && (
                        <div
                          key={item.id}
                          className="col-lg-4 col-md-6 col-12 mt--30"
                        >
                          <BlogList
                            StyleVar="box-card-style-default"
                            item={item}
                            service={service}
                          />
                        </div>
                      )
                    ) : service === "" ? (
                      item.brand === brand &&
                      item.type === carType && (
                        <div
                          key={item.id}
                          className="col-lg-4 col-md-6 col-12 mt--30"
                        >
                          <BlogList
                            StyleVar="box-card-style-default"
                            item={item}
                            service={service}
                          />
                        </div>
                      )
                    ) : brand === "" ? (
                      item.categorie_location?.includes(service) &&
                      item.type === carType && (
                        <div
                          key={item.id}
                          className="col-lg-4 col-md-6 col-12 mt--30"
                        >
                          <BlogList
                            StyleVar="box-card-style-default"
                            item={item}
                            service={service}
                          />
                        </div>
                      )
                    ) : carType === "" ? (
                      item.categorie_location?.includes(service) &&
                      item.brand === brand && (
                        <div
                          key={item.id}
                          className="col-lg-4 col-md-6 col-12 mt--30"
                        >
                          <BlogList
                            StyleVar="box-card-style-default"
                            item={item}
                            service={service}
                          />
                        </div>
                      )
                    ) : (
                      item.categorie_location?.includes(service) &&
                      item.brand === brand &&
                      item.type === carType && (
                        <div
                          key={item.id}
                          className="col-lg-4 col-md-6 col-12 mt--30"
                        >
                          <BlogList
                            StyleVar="box-card-style-default"
                            item={item}
                            service={service}
                          />
                        </div>
                      )
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
          <FooterFour />
        </div>
      </main>
    </>
  );
};

export default LocationVoiture;
