import React from 'react';
import {Link} from "react-router-dom";
// import CalltoActionSeven from "../../elements/calltoaction/CalltoActionSeven";
import footerOne from "../../data/footer/footerOne.json";
import ScrollTop from "./ScrollTop";
import NewsletterOne from "./NewsletterOne";
// import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import RR1 from "../../pages/Cars/RRCULINAN/1.jpg";
import RR2 from "../../pages/Cars/RRCULINAN/2.jpg";
import RR3 from "../../pages/Cars/RRCULINAN/3.jpg";
import BB1 from "../../pages/Cars/BENTLEY_BENTAYGA/1.jpg";
import BB2 from "../../pages/Cars/BENTLEY_BENTAYGA/2.jpg";
import BB3 from "../../pages/Cars/BENTLEY_BENTAYGA/3.jpg";
import BB4 from "../../pages/Cars/BENTLEY_BENTAYGA/4.jpg";
import BB5 from "../../pages/Cars/BENTLEY_BENTAYGA/5.jpg";
import RRV1 from "../../pages/Cars/RANGE_ROVER_VOGUE/1.jpg";
import RRV2 from "../../pages/Cars/RANGE_ROVER_VOGUE/2.jpg";
import RRV3 from "../../pages/Cars/RANGE_ROVER_VOGUE/3.jpg";
import RRV4 from "../../pages/Cars/RANGE_ROVER_VOGUE/4.jpg";
import MACAN1 from "../../pages/Cars/Porshe_MACAN/1.jpg";
import MACAN2 from "../../pages/Cars/Porshe_MACAN/2.jpg";
import MACAN3 from "../../pages/Cars/Porshe_MACAN/3.jpg";
import MACAN4 from "../../pages/Cars/Porshe_MACAN/4.jpg";
import MAZ1 from "../../pages/Cars/MAZERATI/1.jpg";
import MAZ2 from "../../pages/Cars/MAZERATI/2.jpg";
import MAZ3 from "../../pages/Cars/MAZERATI/3.jpg";
import MAZ4 from "../../pages/Cars/MAZERATI/4.jpg";
import URUS1 from "../../pages/Cars/URUS/1.jpg";
// const footerIntem =  footerOne[0];
const footerIntemOne =  footerOne[1];
// const footerIntemThree =  footerOne[3];
// const footerIntemFour =  footerOne[4];


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
          original: MACAN1,
          thumbnail: MACAN1,
        },
        {
          original: MACAN2,
          thumbnail: MACAN2,
        },
        {
          original: MACAN3,
          thumbnail: MACAN3,
        },
        {
          original: MACAN4,
          thumbnail: MACAN4,
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
          original: RRV1,
          thumbnail: RRV1,
        },
        {
          original: RRV2,
          thumbnail: RRV2,
        },
        {
          original: RRV3,
          thumbnail: RRV3,
        },
        {
          original: RRV4,
          thumbnail: RRV4,
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
          original: BB1,
          thumbnail: BB1,
        },
        {
          original: BB2,
          thumbnail: BB2,
        },
        {
          original: BB3,
          thumbnail: BB3,
        },
        {
          original: BB4,
          thumbnail: BB4,
        },
        {
          original: BB5,
          thumbnail: BB5,
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
          original: RR2,
          thumbnail: RR2,
        },
        {
          original: RR1,
          thumbnail: RR1,
        },
        {
          original: RR3,
          thumbnail: RR3,
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
          original: URUS1,
          thumbnail: URUS1,
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
          original: MAZ1,
          thumbnail: MAZ1,
        },
        {
          original: MAZ2,
          thumbnail: MAZ2,
        },
        {
          original: MAZ3,
          thumbnail: MAZ3,
        },
        {
          original: MAZ4,
          thumbnail: MAZ4,
        },
      ],
      categorie_location: ["location de voiture"],
      type: "Voitures-Sportives",
      brand: "MASERATI",
    },
  ];
const indexOneLink = (footerIntemOne.quicklink);
// const indexThreeLink = (footerIntemThree.quicklink);

const FooterFour = () => {
    return (
        <>
            <footer className="rn-footer footer-style-default no-border">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* Start Single Widget  */}
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 style={{width:400}} className="title">Nos Meilleurs Vehicules</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {CarsInfo.map((data, index) => (
                                                <li key={index}><Link style={{width:400}} to={{
                                                    pathname: `${process.env.PUBLIC_URL + "/gallery/" + data.title}`,
                                                    state: { data: data },
                                                  }}>{data.title} {data.subtitle}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                           
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                         
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                           
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            
                            {/* End Single Widget  */}
                        </div>
                    </div>
                </div>
                {/* <NewsletterOne newsletetrStyle="rn-newsletter-default" extraClass="border-top-bottom" /> */}
                <div className="copyright-area copyright-style-one no-border">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="copyright-left">
                                    <ul className="ft-menu link-hover">
                                        {/* <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms And Condition</a></li> */}
                                        <p className="copyright-text">© CARS RENTAL PARIS {new Date().getFullYear()}</p>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="copyright-right text-center text-md-end">
                                    <p className="copyright-text">© CARS RENTAL PARIS {new Date().getFullYear()}</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollTop />
        </>
    )
}

export default FooterFour;
