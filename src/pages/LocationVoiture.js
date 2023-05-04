import React, { useState } from "react";
import "../elements/gallery/Gallery.module.scss";
import BlogList from "../components/blog/itemProp/BlogList";
import RR1 from "./Cars/RRCULINAN/1.jpg";
import RR2 from "./Cars/RRCULINAN/2.jpg";
import RR3 from "./Cars/RRCULINAN/3.jpg";
import T1 from "./Cars/TESTLA_Y/1.jpg";
import T2 from "./Cars/TESTLA_Y/2.jpg";
import T3 from "./Cars/TESTLA_Y/3.jpg";
import BB1 from "./Cars/BENTLEY_BENTAYGA/1.jpg";
import BB2 from "./Cars/BENTLEY_BENTAYGA/2.jpg";
import BB3 from "./Cars/BENTLEY_BENTAYGA/3.jpg";
import BB4 from "./Cars/BENTLEY_BENTAYGA/4.jpg";
import BB5 from "./Cars/BENTLEY_BENTAYGA/5.jpg";
import BB6 from "./Cars/BENTLEY_BENTAYGA/6.jpg";
import BB7 from "./Cars/BENTLEY_BENTAYGA/7.jpg";
import BB8 from "./Cars/BENTLEY_BENTAYGA/8.jpg";
import BB9 from "./Cars/BENTLEY_BENTAYGA/9.jpg";
import F1 from "./Cars/FERRARI296/1.jpg";
import F2 from "./Cars/FERRARI296/2.jpg";
import F3 from "./Cars/FERRARI296/3.jpg";
import G1 from "./Cars/Mercedes_G/1.jpg";
import G2 from "./Cars/Mercedes_G/2.jpg";
import G3 from "./Cars/Mercedes_G/3.jpg";
import G4 from "./Cars/Mercedes_G/4.jpg";
import GLS1 from "./Cars/Mercedes_GLS/1.jpg";
import GLS2 from "./Cars/Mercedes_GLS/2.jpg";
import GLS3 from "./Cars/Mercedes_GLS/3.jpg";
import P911 from "./Cars/Porshe_911/1.jpg";
import GT31 from "./Cars/GT3/1.jpg";
import GT32 from "./Cars/GT3/2.jpg";
import GT33 from "./Cars/GT3/3.jpg";
import GT34 from "./Cars/GT3/4.jpg";
import RRV1 from "./Cars/RANGE_ROVER_VOGUE/1.jpg";
import RRV2 from "./Cars/RANGE_ROVER_VOGUE/2.jpg";
import RRV3 from "./Cars/RANGE_ROVER_VOGUE/3.jpg";
import RRV4 from "./Cars/RANGE_ROVER_VOGUE/4.jpg";
import MACAN1 from "./Cars/Porshe_MACAN/1.jpg";
import MACAN2 from "./Cars/Porshe_MACAN/2.jpg";
import MACAN3 from "./Cars/Porshe_MACAN/3.jpg";
import MACAN4 from "./Cars/Porshe_MACAN/4.jpg";
import MAZ1 from "./Cars/MAZERATI/1.jpg";
import MAZ2 from "./Cars/MAZERATI/2.jpg";
import MAZ3 from "./Cars/MAZERATI/3.jpg";
import MAZ4 from "./Cars/MAZERATI/4.jpg";
import PCUT1 from "./Cars/911_992_CUT/1.jpg";
import PCUT2 from "./Cars/911_992_CUT/1.jpg";
import PCUT3 from "./Cars/911_992_CUT/1.jpg";
import S1 from "./Cars/MERCEDES_S/1.jpg";
import S2 from "./Cars/MERCEDES_S/2.jpg";
import S3 from "./Cars/MERCEDES_S/3.jpg";
import S4 from "./Cars/MERCEDES_S/4.jpg";
import S5 from "./Cars/MERCEDES_S/5.jpg";
import V1 from "./Cars/MERCEDES_V/1.jpeg";
import GTC1 from "./Cars/BENTLEY_GTC/1.jpg";
import GTC2 from "./Cars/BENTLEY_GTC/2.jpg";
import BTC1 from "./Cars/BENTLEY_CONTINENTAL/1.jpg";
import BTC2 from "./Cars/BENTLEY_CONTINENTAL/2.jpg";
import BTC3 from "./Cars/BENTLEY_CONTINENTAL/3.jpg";
import BTC4 from "./Cars/BENTLEY_CONTINENTAL/4.jpg";
import URUS1 from "./Cars/URUS/1.jpg";
import URUS2 from "./Cars/URUS/2.JPG";
import URUS3 from "./Cars/URUS/3.JPG";
import URUS4 from "./Cars/URUS/4.JPG";
import URUS5 from "./Cars/URUS/5.JPG";
import URUS6 from "./Cars/URUS/6.JPG";
import M1 from "./Cars/MACAN/1.JPG";
import M2 from "./Cars/MACAN/2.jpg";
import M3 from "./Cars/MACAN/3.jpg";
import M4 from "./Cars/MACAN/4.jpg";
import M5 from "./Cars/MACAN/5.jpg";
import M6 from "./Cars/MACAN/6.jpg";
import Layout from "../common/Layout";
import { DropdownList } from "react-widgets";
import { useLocation } from "react-router-dom";
import B from "./Mac/Berline.jpeg"
import Limited from "./Mac/Limited.jpeg"
import Limo from "./Mac/Limo.jpeg"
import Sport from "./Mac/Sportive.jpeg"
import SUV from "./Mac/SUV.jpeg"
import Van from "./Mac/VAN.jpeg"
import CC from "./Mac/CC.jpeg"
const LocationVoiture = () => {

  const CarsInfo = [
    {
      id:0,
      AssReduc:"100",
      title: "Porsche",
      Power:"V6-462hp",
      KmSup: "4",
      NbSg: "5",
      heureSup:"",
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
      id:1,
      AssReduc:"100",
      title: "Range Rover",
      KmSup: "11",
      Power:"V8-518hp",
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
      id:2,
      AssReduc:"100",
      Power:"V8-600hp",
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
          original: BB8,
          thumbnail: BB8,
        },
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
        {
          original: BB6,
          thumbnail: BB6,
        },
        {
          original: BB7,
          thumbnail: BB7,
        },
     
        {
          original: BB9,
          thumbnail: BB9,
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
      id:3,
      AssReduc:"100",
      Power:"V12-563hp",
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
      id:4,
      AssReduc:"100",
      Power:"V8-641hp",
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
          original: URUS3,
          thumbnail: URUS3,
        },
        {
          original: URUS2,
          thumbnail: URUS2,
        },
      
        {
          original: URUS4,
          thumbnail: URUS4,
        },
        {
          original: URUS5,
          thumbnail: URUS5,
        },
        {
          original: URUS6,
          thumbnail: URUS6,
        },
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
      id:5,
      AssReduc:"100",
      Power:"V8-454hp",
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
    {
      id:6,
      AssReduc:"100",
      Power:"V8-550hp",
      title: "MERCEDES",
      KmSup: "9",
      NbSg: "5",
      tarifHeure4: "700",
      tarifHeure8: "1200",
      heureSup:"150",
      description:
        "Le Mercedes-Benz GLS 600 Maybach est un SUV de luxe ultra-spacieux et haut de gamme qui offre un confort et une performance incomparables. Ce véhicule est conçu pour offrir une expérience de conduite sans compromis qui allie la puissance, le luxe et le style.Sous le capot, vous trouverez un moteur V8 biturbo de 4,0 litres qui développe une puissance de 550 chevaux. Avec une transmission automatique à 9 vitesses et une transmission intégrale, le GLS 600 Maybach peut atteindre une vitesse maximale de 130 mph, offrant une conduite douce et silencieuse pour vos trajets.L'intérieur est tout aussi impressionnant, avec des sièges en cuir de qualité supérieure, des finitions en bois et une sellerie unique signée Maybach pour offrir un confort et un luxe incomparables. Avec des fonctionnalités de réglage électrique pour les sièges, la climatisation et les systèmes de divertissement, chaque voyage est une expérience de luxe personnalisée.Le GLS 600 Maybach est également équipé de nombreuses fonctionnalités de sécurité avancées telles que le régulateur de vitesse adaptatif, la caméra à 360 degrés et le freinage d'urgence automatique. Avec toutes ces fonctionnalités, vous pouvez conduire en toute confiance, sachant que vous êtes protégé dans toutes les situations.Si vous cherchez un SUV de luxe ultra-spacieux qui offre une expérience de conduite inégalée, le Mercedes-Benz GLS 600 Maybach est le choix parfait. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que ce véhicule extraordinaire a à offrir.",
      price4to7: "1200",
      price8plus: "1000",
      franchise: "30000",
      reductedFranchise: "25000",
      subtitle: "GLS MAYBACH",
      price: "1500",
      year: "2022",
      transmition: "Automatique",
      fuel: "ESSENCE",
      speed: "250km/h",
      image: [
        {
          original: GLS1,
          thumbnail: GLS1,
        },
        {
          original: GLS2,
          thumbnail: GLS2,
        },
        {
          original: GLS3,
          thumbnail: GLS3,
        },
      ],
      categorie_location: [
        "location de voiture",
        "location avec chauffeur",
        "transfert avec chauffeur",
      ],
      type: "SUV",
      brand: "Maybach",
    },
    {
      id:7,
      AssReduc:"100",
      Power:"384hp-660Nm",
      title: "Tesla",
      KmSup: "2",
      NbSg: "5",
      heureSup:"90",
      tarifHeure4: "490",
      tarifHeure8: "790",
      price: "200",
      price4to7: "180",
      price8plus: "150",
      franchise: "30000",
      reductedFranchise: "25000",
      description:
        "Le Tesla Model Y est un SUV électrique haut de gamme qui offre une performance exceptionnelle et des fonctionnalités de pointe. Avec son design futuriste et sa technologie de pointe, ce véhicule est conçu pour offrir une expérience de conduite inoubliable.Le Model Y est équipé d'un moteur électrique qui développe une puissance de 384 chevaux et peut passer de 0 à 60 mph en seulement 3,5 secondes. Avec une autonomie allant jusqu'à 326 miles, vous pouvez faire de longs trajets sans avoir à vous arrêter pour recharger.L'intérieur est tout aussi impressionnant, avec un design minimaliste et épuré, un grand écran tactile de 15 pouces et des fonctionnalités avancées telles que la conduite autonome, le freinage d'urgence automatique et la surveillance des angles morts.Le Model Y offre également un grand espace de rangement, avec un grand coffre arrière et un compartiment de rangement à l'avant. Les sièges en cuir synthétique de qualité supérieure offrent un confort et un soutien exceptionnels pour une expérience de conduite confortable.Si vous cherchez un SUV électrique haut de gamme qui offre des performances exceptionnelles et des fonctionnalités de pointe, le Tesla Model Y est le choix parfait. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que ce véhicule extraordinaire a à offrir.",
      subtitle: "model Y",
      year: "2022",
      transmition: "Automatique",
      fuel: "Eléctrique",
      speed: "250km/h",
      image: [
        {
          original: T1,
          thumbnail: T1,
        },
        {
          original: T2,
          thumbnail: T2,
        },
        {
          original: T3,
          thumbnail: T3,
        },
      ],
      categorie_location: [
        "location de voiture",
        "location avec chauffeur",
        "transfert avec chauffeur",
      ],
      type: "SUV",
      brand: "Tesla",
    },

    {
      id:8,
      AssReduc:"100",
      Power:"V8-542hp",
      title: "Bentley",
      KmSup: "7",
      NbSg: "4",
      tarifHeure4: "",
      tarifHeure8: "",
      price4to7: "1800",
      price8plus: "1500",
      franchise: "30000",
      reductedFranchise: "25000",
      price: "2000",
      description: "Le Bentley Continental GTC est un cabriolet de luxe qui offre une expérience de conduite exceptionnelle avec un design élégant et un confort incomparable. Ce véhicule est conçu pour offrir une performance de pointe avec une touche de luxe britannique.Sous le capot, vous trouverez un moteur V8 biturbo de 4,0 litres qui développe une puissance de 542 chevaux. Avec une transmission automatique à huit vitesses et une traction intégrale, le Continental GTC peut atteindre une vitesse maximale de 198 mph, offrant une expérience de conduite incroyablement dynamique et réactive.L'intérieur est tout aussi impressionnant, avec des sièges en cuir de qualité supérieure, des finitions en bois et des accents en chrome. Les sièges sont entièrement réglables pour un confort personnalisé, et les fonctionnalités avancées telles que le système audio haut de gamme et les commandes de climatisation à trois zones offrent une expérience de conduite de luxe ultime.Le Continental GTC est également équipé de nombreuses fonctionnalités de sécurité avancées telles que le freinage d'urgence automatique, la détection de piétons et la caméra à 360 degrés, offrant une protection maximale pour vous et vos passagers.Si vous cherchez un cabriolet de luxe qui offre une expérience de conduite inoubliable avec un confort incomparable, le Bentley Continental GTC est le choix parfait. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que ce véhicule extraordinaire a à offrir.",
      subtitle: "Continental gtc",
      year: "2022",
      transmition: "Automatique",
      fuel: "ESSENCE",
      speed: "335km/h",
      image: [
        {
          original: GTC2,
          thumbnail: GTC2,
        },
        {
          original: GTC1,
          thumbnail: GTC1,
        },
      ],
      categorie_location: ["location de voiture"],
      type: "Voitures-Sportives",
      brand: "Bentley",
    },
    {
      id:9,
      AssReduc:"100",
      Power:"V6-818hp",
      title: "Ferrari",
      KmSup: "12",
      NbSg: "2",
      tarifHeure4: "",
      tarifHeure8: "",
      price4to7: "3200",
      price8plus: "3000",
      franchise: "30000",
      reductedFranchise: "25000",
      price: "3500",
      description: "Le Ferrari 296 GTB est une voiture de sport révolutionnaire qui allie la puissance brute et la technologie de pointe pour offrir une expérience de conduite inoubliable. Ce véhicule est conçu pour offrir une performance exceptionnelle, une maniabilité agile et un design élégant qui attire l'attention.Sous le capot, vous trouverez un moteur hybride V6 biturbo de 2,9 litres qui développe une puissance de 818 chevaux. Le système hybride permet une accélération fulgurante de 0 à 62 mph en seulement 2,9 secondes, offrant une expérience de conduite dynamique et réactive.L'intérieur est tout aussi impressionnant, avec des sièges en cuir de qualité supérieure, un écran tactile de 16 pouces et des fonctionnalités avancées telles que la connectivité Bluetooth, la navigation par satellite et la climatisation automatique à deux zones. Les sièges sont également entièrement réglables pour un confort personnalisé.Le Ferrari 296 GTB est équipé de nombreuses fonctionnalités de sécurité avancées telles que le freinage d'urgence automatique, la surveillance des angles morts et la caméra de recul, offrant une protection maximale pour vous et vos passagers.Si vous cherchez une voiture de sport révolutionnaire qui offre une expérience de conduite inoubliable avec un design élégant et des fonctionnalités de pointe, le Ferrari 296 GTB est le choix parfait. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que ce véhicule extraordinaire a à offrir.",
      subtitle: "296 GTB",
      year: "2022",
      transmition: "Automatique",
      fuel: "HYBRIDE",
      speed: "330km/h",
      image: [
        {
          original: F1,
          thumbnail: F1,
        },
        {
          original: F2,
          thumbnail: F2,
        },
        {
          original: F3,
          thumbnail: F3,
        },
      ],
      categorie_location: ["location de voiture"],
      type: "Voitures-Sportives",
      brand: "Ferrari",
    },
    {
      id:10,
      AssReduc:"100",
      Power:"V8-510hp",
      title: "MERCEDES",
      KmSup: "4",
      NbSg: "5",
      heureSup:"100",
      tarifHeure4: "490",
      tarifHeure8: "790",
      price4to7: "420",
      price8plus: "420",
      franchise: "30000",
      reductedFranchise: "25000",
      description: "Le Mercedes-Benz Class S 580E est une berline hybride rechargeable de luxe qui allie performance et efficacité énergétique pour offrir une expérience de conduite exceptionnelle avec un design élégant et une technologie de pointe.Sous le capot, vous trouverez un moteur V6 biturbo de 3,0 litres combiné avec un moteur électrique pour une puissance totale de 510 chevaux. Avec une transmission automatique à neuf vitesses et une batterie haute capacité, le Class S 580E offre une conduite silencieuse, fluide et efficace qui vous permettra de parcourir jusqu'à 100 kilomètres en mode électrique.L'intérieur est tout aussi impressionnant, avec des sièges en cuir de qualité supérieure, des finitions en bois et des accents en chrome. Les sièges avant sont entièrement réglables pour un confort personnalisé, et les fonctionnalités avancées telles que le système audio haut de gamme et les commandes de climatisation à quatre zones offrent une expérience de conduite de luxe ultime.Le Class S 580E est également équipé de nombreuses fonctionnalités de sécurité avancées telles que le freinage d'urgence automatique, la surveillance des angles morts et la caméra à 360 degrés, offrant une protection maximale pour vous et vos passagers.Si vous cherchez une berline de luxe hybride rechargeable qui offre une performance exceptionnelle avec une efficacité énergétique élevée, le Mercedes-Benz Class S 580E est le choix parfait. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que ce véhicule extraordinaire a à offrir.",
      subtitle: "classe s 580E",
      price: "420",
      year: "2022",
      transmition: "Automatique",
      fuel: "HYBRIDE",
      speed: "250km/h",
      image: [
        {
          original: S2,
          thumbnail: S2,
        },
        {
          original: S1,
          thumbnail: S1,
        },
        {
          original: S3,
          thumbnail: S3,
        },
        {
          original: S4,
          thumbnail: S4,
        },
        {
          original: S5,
          thumbnail: S5,
        },
      ],
      categorie_location: [
        "location de voiture",
        "location avec chauffeur",
        "transfert avec chauffeur",
      ],
      type: "Limousine",
      brand: "Mercedes",
    },
    {
      id:11,
      AssReduc:"100",
      Power:"V8-650hp",
      title: "Bentley",
      KmSup: "8",
      NbSg: "4",
      tarifHeure4: "",
      tarifHeure8: "",
      price4to7: "2000",
      price8plus: "1800",
      franchise: "30000",
      reductedFranchise: "25000",
      description: "Le Bentley Continental est une voiture de grand tourisme luxueuse et puissante qui allie élégance, performance et raffinement. C'est une voiture qui attire l'attention et qui est capable de vous emmener sur de longues distances avec une grande facilité.Sous le capot, vous trouverez un moteur V8 biturbo ou un W12 biturbo, tous deux offrant une puissance exceptionnelle pour une conduite sportive et dynamique. La transmission automatique à huit vitesses permet des changements de vitesse rapides et fluides, et la suspension pneumatique assure un confort de conduite supérieur.L'intérieur du Bentley Continental est tout aussi impressionnant, avec des sièges en cuir de haute qualité, des finitions en bois exotiques et des équipements haut de gamme tels que le système de navigation, le système audio haut de gamme et les commandes de climatisation à deux zones. Les sièges avant sont entièrement réglables pour un confort personnalisé et les sièges arrière offrent également beaucoup d'espace pour les passagers.Le Bentley Continental est également équipé de nombreuses fonctionnalités de sécurité avancées telles que le freinage d'urgence automatique, la surveillance des angles morts et la caméra de recul, pour offrir une protection maximale pour vous et vos passagers.Si vous cherchez une voiture de grand tourisme luxueuse qui allie puissance, élégance et raffinement, le Bentley Continental est le choix parfait. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que cette voiture extraordinaire a à offrir.",
      subtitle: "continental",
      price: "2200",
      year: "2022",
      transmition: "Automatique",
      fuel: "ESSENCE",
      speed: "301km/h",
      image: [
        {
          original: BTC1,
          thumbnail: BTC1,
        },
        {
          original: BTC2,
          thumbnail: BTC2,
        },
        {
          original: BTC3,
          thumbnail: BTC3,
        },
        {
          original: BTC4,
          thumbnail: BTC4,
        },
      ],
      categorie_location: [
        "location de voiture"
      ],
      type: "Voitures-Sportives",
      brand: "Bentley",
    },
    {
      id:12,
      AssReduc:"100",
      Power:"V6-440hp",
      title: "Porsche",
      KmSup: "4",
      NbSg: "5",
      tarifHeure4: "",
      tarifHeure8: "",
      description:
        "Le Porsche Macan est un SUV compact de luxe qui allie performance, maniabilité et polyvalence pour offrir une expérience de conduite exceptionnelle.Sous le capot, vous trouverez un moteur quatre cylindres turbo de 2,0 litres ou un V6 turbo de 3,0 litres, offrant une puissance et une accélération exceptionnelles. La transmission PDK à sept vitesses permet des changements de vitesse rapides et fluides, et la suspension active offre une maniabilité supérieure dans toutes les conditions de conduite.L'intérieur du Macan est tout aussi impressionnant, avec des sièges en cuir de haute qualité, des finitions en aluminium brossé et des équipements haut de gamme tels que le système de navigation, le système audio haut de gamme et les commandes de climatisation à deux zones. Les sièges avant sont entièrement réglables pour un confort personnalisé, et les sièges arrière offrent également beaucoup d'espace pour les passagers.Le Macan est également équipé de nombreuses fonctionnalités de sécurité avancées telles que le freinage d'urgence automatique, la surveillance des angles morts et la caméra de recul, pour offrir une protection maximale pour vous et vos passagers.Si vous cherchez un SUV de luxe compact qui offre une performance exceptionnelle avec une maniabilité et une polyvalence supérieures, le Porsche Macan est le choix parfait. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que ce véhicule extraordinaire a à offrir.",
      subtitle: "MACAN",
      price: "550",
      franchise: "10000",
      price4to7: "450",
      price8plus: "400",
      reductedFranchise: "6000",
      year: "2022",
      transmition: "Automatique",
      fuel: "ESSENCE",
      speed: "261km/h",
      image: [
     
        {
          original: M2,
          thumbnail: M2,
        },
        {
          original: M3,
          thumbnail: M3,
        },
        {
          original: M4,
          thumbnail: M4,
        },
        {
          original: M5,
          thumbnail: M5,
        },
        {
          original: M6,
          thumbnail: M6,
        },
        {
          original: M1,
          thumbnail: M1,
        },
      ],
      categorie_location: ["location de voiture"],
      type: "SUV",
      brand: "Porsche",
    },
    {
      id:13,
      AssReduc:"100",
      Power:"V6-450hp",
      title: "Porsche",
      KmSup: "8",
      NbSg: "4",
      tarifHeure4: "",
      tarifHeure8: "",
      description: "Le Porsche 911 Type 992 Carrera 4S Cabriolet est une voiture de sport emblématique qui allie puissance, élégance et sophistication pour offrir une expérience de conduite incomparable.Sous le capot, vous trouverez un moteur turbo à six cylindres à plat, offrant une puissance exceptionnelle de 450 chevaux. La transmission PDK à huit vitesses permet des changements de vitesse rapides et fluides, tandis que la transmission intégrale garantit une adhérence maximale dans toutes les conditions de conduite.L'intérieur du 911 Carrera 4S Cabriolet est tout aussi impressionnant, avec des sièges sport en cuir de haute qualité, des finitions en aluminium brossé et des équipements haut de gamme tels que le système de navigation, le système audio haut de gamme et les commandes de climatisation à deux zones. Les sièges avant sont entièrement réglables pour un confort personnalisé, tandis que la capote souple s'ouvre en seulement 12 secondes pour offrir une expérience de conduite ultime à ciel ouvert.Le 911 Carrera 4S Cabriolet est également équipé de nombreuses fonctionnalités de sécurité avancées telles que le freinage d'urgence automatique, la surveillance des angles morts et la caméra de recul, pour offrir une protection maximale pour vous et vos passagers.Si vous cherchez une voiture de sport de luxe qui allie puissance, élégance et sophistication, le Porsche 911 Type 992 Carrera 4S Cabriolet est le choix parfait. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que cette voiture extraordinaire a à offrir.",
      subtitle: "911 TYPE 992 carrera 4S CABRIOLÉE",
      price: "1100",
      franchise: "20000",
      price4to7: "900",
      price8plus: "700",
      reductedFranchise: "15000",
      year: "2022",
      transmition: "Automatique",
      fuel: "ESSENCE",
      speed: "308km/h",
      image: [
        {
          original: P911,
          thumbnail: P911,
        },
      ],
      categorie_location: ["location de voiture"],
      type: "Cabriolet",
      brand: "Porsche",
    },
    {
      id:14,
      AssReduc:"100",
      Power:"V6-450hp",
      title: "Porsche",
      KmSup: "8",
      NbSg: "4",
      tarifHeure4: "",
      tarifHeure8: "",
      description: "Le Porsche 911 Type 992 Carrera 4S Coupé est une voiture de sport emblématique qui allie puissance, élégance et sophistication pour offrir une expérience de conduite incomparable.Sous le capot, vous trouverez un moteur turbo à six cylindres à plat, offrant une puissance exceptionnelle de 450 chevaux. La transmission PDK à huit vitesses permet des changements de vitesse rapides et fluides, tandis que la transmission intégrale garantit une adhérence maximale dans toutes les conditions de conduite.L'intérieur du 911 Carrera 4S Coupé est tout aussi impressionnant, avec des sièges sport en cuir de haute qualité, des finitions en aluminium brossé et des équipements haut de gamme tels que le système de navigation, le système audio haut de gamme et les commandes de climatisation à deux zones. Les sièges avant sont entièrement réglables pour un confort personnalisé, et la disposition des commandes est intuitive et facile à utiliser.Le 911 Carrera 4S Coupé est également équipé de nombreuses fonctionnalités de sécurité avancées telles que le freinage d'urgence automatique, la surveillance des angles morts et la caméra de recul, pour offrir une protection maximale pour vous et vos passagers.Si vous cherchez une voiture de sport de luxe qui allie puissance, élégance et sophistication, le Porsche 911 Type 992 Carrera 4S Coupé est le choix parfait. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que cette voiture extraordinaire a à offrir.",
      subtitle: "911 TYPE 992 carrera 4S COUPÉE",
      price: "1100",
      franchise: "20000",
      price4to7: "900",
      price8plus: "700",
      reductedFranchise: "15000",
      year: "2022",
      transmition: "Automatique",
      fuel: "ESSENCE",
      speed: "308km/h",
      image: [
        {
          original: PCUT1,
          thumbnail: PCUT1,
        },
        {
          original: PCUT2,
          thumbnail: PCUT2,
        },
        {
          original: PCUT3,
          thumbnail: PCUT3,
        },
      ],
      categorie_location: ["location de voiture"],
      type: "Voitures-Sportives",
      brand: "Porsche",
    },
    {
      id:15,
      AssReduc:"100",
      Power:"V6-502hp",
      title: "Porsche",
      KmSup: "8",
      NbSg: "4",
      tarifHeure4: "",
      tarifHeure8: "",
      description: "Le Porsche 911 Type 992 GT3 est une voiture de sport haut de gamme conçue pour offrir une expérience de conduite incomparable sur la piste et sur la route.Sous le capot, vous trouverez un moteur à six cylindres à plat, développant une puissance exceptionnelle de 502 chevaux. La boîte de vitesses PDK à sept rapports assure des changements de vitesse rapides et fluides pour une expérience de conduite ultime.L'intérieur du 911 GT3 est conçu pour un maximum de confort et de commodité, avec des sièges baquets en alcantara et des équipements haut de gamme tels que le système de navigation, le système audio haut de gamme et les commandes de climatisation à deux zones. Les sièges avant sont entièrement réglables pour un confort personnalisé, tandis que le volant sport en alcantara avec des palettes de changement de vitesse offre une expérience de conduite immersive.Le 911 GT3 est également équipé de nombreuses fonctionnalités de sécurité avancées telles que le contrôle de stabilité, la surveillance des angles morts et la caméra de recul, pour offrir une protection maximale pour vous et vos passagers.Si vous cherchez une voiture de sport de luxe qui offre des performances exceptionnelles sur la piste et sur la route, le Porsche 911 Type 992 GT3 est le choix parfait. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que cette voiture extraordinaire a à offrir.",
      subtitle: "911 TYPE 992 GT3",
      price: "1100",
      franchise: "20000",
      price4to7: "900",
      price8plus: "700",
      reductedFranchise: "15000",
      year: "2022",
      transmition: "Automatique",
      fuel: "ESSENCE",
      speed: "317km/h",
      image: [
        {
          original: GT34,
          thumbnail: GT34,
        },
        {
          original: GT32,
          thumbnail: GT32,
        },
        {
          original: GT33,
          thumbnail: GT33,
        },
        {
          original: GT31,
          thumbnail: GT31,
        },
      ],
      categorie_location: ["location de voiture"],
      type: "Voitures-Sportives",
      brand: "Porsche",
    },

    {
      id:16,
      AssReduc:"100",
      Power:"V4-239hp",
      title: "MERCEDES",
      KmSup: "3",
      NbSg: "8",
      heureSup:"80",
      tarifHeure4: "400",
      tarifHeure8: "700",
      price4to7: "300",
      price8plus: "300",
      franchise: "10000",
      reductedFranchise: "7500",
      description:
        "Le Mercedes-Benz Class V 300 Extra Long est un véhicule polyvalent de luxe qui offre un espace et un confort exceptionnels pour les passagers, ainsi que des performances de conduite exceptionnelles.Avec sa longueur supplémentaire, le Class V 300 peut accueillir jusqu'à huit passagers dans un confort absolu, avec des sièges en cuir de haute qualité, un système de climatisation à trois zones et un système de divertissement haut de gamme pour une expérience de voyage ultime.Sous le capot, vous trouverez un moteur diesel puissant de 2,0 litres qui offre une puissance de 239 chevaux et une accélération rapide pour une conduite agréable et fluide. La transmission automatique à neuf vitesses assure des changements de vitesse rapides et fluides pour une expérience de conduite optimale.Le Class V 300 Extra Long est également équipé d'une gamme de fonctionnalités de sécurité avancées pour une protection maximale, telles que l'assistance au freinage d'urgence, la surveillance des angles morts et la caméra de recul.Que vous recherchiez un véhicule spacieux pour transporter votre famille ou un groupe de voyageurs, le Mercedes-Benz Class V 300 Extra Long est le choix parfait. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que cette voiture extraordinaire a à offrir.",
      subtitle: "CLASS V 300 Extra long",
      price: "300",
      year: "2022",
      transmition: "Automatique",
      fuel: "DIESEL",
      speed: "194km/h",
      image: [
        {
          original: V1,
          thumbnail: V1,
        },
      ],
      categorie_location: [
        "location de voiture",
        "location avec chauffeur",
        "transfert avec chauffeur",
      ],
      type: "Minivans De Luxe",
      brand: "Mercedes",
    },
    {
      id:17,
      AssReduc:"100",
      Power:"V8-577hp",
      title: "Mercedes",
      KmSup: "7",
      NbSg: "5",
      heureSup:"180",
      tarifHeure4: "850",
      tarifHeure8: "1500",
      price4to7: "1100",
      price8plus: "900",
      franchise: "30000",
      reductedFranchise: "25000",
      description: "Le Mercedes-Benz Class G 63 AMG est un SUV de luxe emblématique, conçu pour offrir des performances de conduite exceptionnelles, un confort ultime et un style impressionnant.Sous le capot, le G 63 AMG est équipé d'un moteur V8 biturbo de 4,0 litres qui offre une puissance incroyable de 577 chevaux et un couple impressionnant de 627 lb-pi. La transmission automatique à neuf vitesses assure des changements de vitesse rapides et fluides pour une expérience de conduite ultime.L'intérieur du G 63 AMG est conçu pour un maximum de confort et de commodité, avec des sièges sport en cuir Nappa, un volant sport en cuir avec des palettes de changement de vitesse, et des équipements haut de gamme tels que le système de navigation, le système audio haut de gamme et la climatisation à trois zones. Les sièges avant sont également équipés d'une fonction de massage pour une relaxation totale lors des longs trajets.Le G 63 AMG est également équipé de nombreuses fonctionnalités de sécurité avancées telles que l'assistance au freinage d'urgence, la surveillance des angles morts, la caméra de recul, et bien plus encore, pour offrir une protection maximale pour vous et vos passagers.Avec son look extérieur musclé et son intérieur de luxe, le Mercedes-Benz Class G 63 AMG est le choix parfait pour ceux qui recherchent une expérience de conduite exceptionnelle dans un SUV de luxe. Contactez-nous dès maintenant pour  découvrir par vous-même tout ce que cette voiture extraordinaire a à offrir.",
      subtitle: "Classe G63",
      price: "1250",
      year: "2022",
      transmition: "Automatique",
      fuel: "ESSENCE",
      speed: "280km/h",
      image: [
        {
          original: G1,
          thumbnail: G1,
        },
        {
          original: G2,
          thumbnail: G2,
        },
        {
          original: G3,
          thumbnail: G3,
        },
        {
          original: G4,
          thumbnail: G4,
        },
      ],
      categorie_location: [
        "location de voiture",
        "location avec chauffeur",
        "transfert avec chauffeur",
      ],
      type: "SUV",
      brand: "Mercedes",
    },
  ];
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
          <Layout>
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
                    "transfert avec chauffeur",
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
                <div className="car-categories-image-wrapper">
                  <div
                    onClick={() => setCartype("Cabriolet")}
                    className="car-category-image "
                  >
                    <img
                      src={CC}
                      className="img-fluid"
                      alt="car category"
                      id="Cabriolet"
                    />
                    <p className="text-center" style={{color:carType==="Cabriolet"?"gold":"grey"}}>Cabriolet</p>
                  </div>
                  <div
                    onClick={() => setCartype("Edition Limitée")}
                    className="car-category-image "
                  >
                    <img
                      src={Limited}
                      className="img-fluid"
                      alt="car category"
                      id="Cabriolet"
                    />
                    <p className="text-center" style={{color:carType==="Edition Limitée"?"gold":"grey"}}>Edition Limitée</p>
                  </div>
                  <div
                    onClick={() => setCartype("Berlines De Luxe")}
                    className="car-category-image "
                  >
                    <img
                      src={B}
                      className="img-fluid"
                      alt="car category"
                      id="Cabriolet"
                    />
                    <p className="text-center" style={{color:carType==="Berlines De Luxe"?"gold":"grey"}}>Berlines De Luxe</p>
                  </div>
                  <div
                    onClick={() => setCartype("Voitures-Sportives")}
                    className="car-category-image "
                  >
                    <img
                      src={Sport}
                      className="img-fluid"
                      alt="car category"
                      id="Cabriolet"
                    />
                    <p className="text-center" style={{color:carType==="Voitures-Sportives"?"gold":"grey"}}>Voitures-Sportives</p>
                  </div>
                  <div
                    onClick={() => setCartype("SUV")}
                    className="car-category-image "
                  >
                    <img
                      src={SUV}
                      className="img-fluid"
                      alt="car category"
                      id="Cabriolet"
                    />
                    <p className="text-center" style={{color:carType==="SUV"?"gold":"grey"}}>SUV</p>
                  </div>
                  <div
                    onClick={() => setCartype("Minivans De Luxe")}
                    className="car-category-image "
                  >
                    <img
                      src={Van}
                      className="img-fluid"
                      alt="car category"
                      id="Cabriolet"
                    />
                    <p className="text-center" style={{color:carType==="Minivans De Luxe"?"gold":"grey"}}>Minivans De Luxe</p>
                  </div>
                  <div
                    onClick={() => setCartype("Limousine")}
                    className="car-category-image "
                  >
                    <img
                      src={Limo}
                      className="img-fluid"
                      alt="car category"
                      id="Cabriolet"
                    />
                    <p className="text-center" style={{color:carType==="Limousine"?"gold":"grey"}}>Limousine</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="blog-area rn-section-gap">
              <div className="container">
                <div className="row row--15 CarsSliderInLocation">
                  {CarsInfo.map((item, index) => (
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
          </Layout>
        </div>
      </main>
    </>
  );
};

export default LocationVoiture;
