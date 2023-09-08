import React, { useState, useEffect, useContext } from "react";
import "../intro/intro.css";

import axios from "../../connector";
import { CurrentUserContext } from "../../index";
import Header from "../header";
import png from "./TrelloUICollage_4x (1).png";
const IntroPage = (props) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [introContent, setIntroContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(); // fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/intro");
      const data = response.data;
      setIntroContent(data.payload);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  return (
    <>
      <Header />
      <div className="intro-page">
        <div className="background-text">
          <h1 style={{ color: "white" }}>Welcome to Task Trail</h1>
          <p style={{ color: "white" }}>
            This application aims to help users organize their tasks effectively
            to achieve success.
          </p>
        </div>
        <div className="background-image">
          {/* Add your background image here */}
          <img src={png} alt="Background" />
        </div>
        <h1>{currentUser.title}</h1>
        <p>{introContent.description}</p>
        <p>{loading.subContent}</p>
      </div>
    </>
  );
};

export default IntroPage;
