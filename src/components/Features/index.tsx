"use client"
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import BusinessCategories from "@/components/Features/businessCategories";
import {SlidingTabBar} from "@/components/Features/businessCategories";
import React, { useRef, useState, useEffect } from 'react'

// Initialize tabs functionality

let allTabs = [
  {
    id: "home",
    name: "Front-End",
    logo1: "/react.svg",
    logo2: "/tailwind.svg",
    logo3: "/html2.svg",
    logo4: "/wix1.svg",
    logo5: "/nextjs.svg",
    logo6: "/flutter.svg",
    logo7: "/css.svg",
    logo8: "/javascript.svg",


  },
  {
    id: "blog",
    name: "Back-End",
    logo1: "/java.svg",
    logo2: "/springboot.svg",
    logo3: "/scala.svg",
    logo4: "/go.svg",
    logo5: "/node-js.svg",
    logo6: "/prometheus.svg",
    logo7: "/sql-server.svg",
    logo8: "/airflow.svg",

  },
  {
    id: "projects",
    name: "Infrastructure",
    logo1: "/azure.svg",
    logo2: "/aws.svg",
    logo3: "/elastic.svg",
    logo4: "/terraform.svg",
    logo5: "/docker.svg",
    logo6: "/kubernetes.svg",
    logo7: "/git.svg",
    logo8: "/gcp.svg",


  },
  {
    id: "arts",
    name: "AI/ML",
    logo1: "/python.svg",
    logo2: "/chatgpt.svg",
    logo3: "/tensorflow.svg",
    logo4: "/claude.svg",
    logo5: "/HuggingFace.svg",
    logo6: "/pytorch.svg",
    logo7: "/uipath.svg",
    logo8: "/keras.svg",


  },
  {
    id: "arts",
    name: "Data",
    logo1: "/databricks.svg",
    logo2: "/tableau.svg",
    logo3: "/spark.svg",
    logo4: "/kafka.svg",
    logo5: "/dbt.svg",
    logo6: "/postgres.svg",
    logo7: "/hadoop.svg",
    logo8: "/snowflake.svg",


  },
];

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <section id="features" className="py-16 sm:py-10 md:py-20 lg:py-28">
     
        <div className="container">
          <SectionTitle
            title="End to End Tech Support"
            paragraph="We help you build from Front of your Business to End."
            center
          />
      <div className="relative bottom-40 py-10 sm:py-20 md:py-20 lg:py-28 ">
        
      <BusinessCategories allTabs={allTabs} currentIndex={currentIndex}/>

      <div className="relative bottom-40  left-80 mx-28 py-16 lg:left-50   md:py-20 lg:py-28 ">
      <SlidingTabBar  allTabs={allTabs} setCurrentIndex={setCurrentIndex}/>
    </div>
    </div>
   
        </div>
      </section>
    </>
  );
};

export default Features;
