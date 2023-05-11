import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import { FirestoreDb } from "../../Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
// const indexThreeLink = (footerIntemThree.quicklink);

const FooterFour = () => {
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
    addTocities();
  }, [dataChange]);
  return (
    <>
      <footer
        style={{ background: "#f5f8fa" }}
        className="rn-footer footer-style-default no-border"
      >
        <div style={{ background: "#f5f8fa" }} className="footer-top">
          <div style={{ background: "#f5f8fa" }} className="container">
            <div className="row">
              {/* Start Single Widget  */}
              <div
                style={{ background: "#f5f8fa" }}
                className="col-lg-2 col-md-6 col-sm-6 col-12"
              >
                <div className="rn-footer-widget">
                  <h4 style={{ width: 400, color: "black" }} className="title">
                    Nos Meilleurs Vehicules
                  </h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {carList.map((data, index) => (
                        <li key={index}>
                          <Link
                            style={{ width: 400 }}
                            to={{
                              pathname: `${
                                process.env.PUBLIC_URL + "/gallery/" + data.path
                              }`,
                              state: { data: data },
                            }}
                          >
                            {data.title} {data.subtitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ background: "#f5f8fa" }}
          className="copyright-area copyright-style-one no-border"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="copyright-left">
                  <ul className="ft-menu link-hover">
                    <p className="copyright-text">
                      © Sport Cars & LUXURY {new Date().getFullYear()}
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollTop />
    </>
  );
};

export default FooterFour;
