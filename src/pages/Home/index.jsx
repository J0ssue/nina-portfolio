import React, { useEffect } from "react";
import { imageLoader } from "./functions";

import ninaImage from "../../assets/images/nina.jpg";
import portrait from "../../assets/images/portrait.jpg";
import homepageConfig from "../../configs/homepageConfig.json";
import "./styles.scss";

import { ButtonPrimary } from "../../components/common/Buttons";

const Home = () => {
  const navigateToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    imageLoader();
  }, []);

  return (
    <div className="p-8 flex-1 homepage">
      <header className="homepage__hero mb-24">
        <img className="homepage__hero-image mb-6 lazy" src={portrait} alt="" />
        <h1 className="homepage__title font-ninaBold text-medium-title-sm leading-10 md:pr-14 md:pt-14 md:pb-24 md:bg-white">
          {homepageConfig.heroIntroduction}
        </h1>
        <ButtonPrimary
          className="homepage__hero-button"
          onClick={navigateToAbout}
        >
          About me
        </ButtonPrimary>
      </header>

      <section
        id="about"
        className="md:flex md:items-stretch md:mb-24 lg:items-center"
      >
        <div className="homepage__nina-image mb-6 md:mr-16">
          <img className="lazy" src={ninaImage} alt="nina" />
        </div>
        <div className="flex-1">
          <h2 className="font-ninaBold text-medium-title-sm capitalize">
            {homepageConfig.about.title}
          </h2>
          <p className="font-ninaPublicSans text-body-1-sm lg:text-body-2">
            {homepageConfig.about.message}
          </p>

          <ButtonPrimary isDisabled isSecondary onClick={navigateToAbout}>
            {homepageConfig.about.buttonText}
          </ButtonPrimary>
          <hr className="my-9" />
        </div>
      </section>

      <section className="md:flex md:justify-between md:items-center">
        <h2 className="homepage__contact-title mb-10 font-ninaBold text-medium-title-sm capitalize text-center leading-10 md:text-left md:mb-0">
          {homepageConfig.contact.title}
        </h2>

        <ButtonPrimary isDisabled isSecondary onClick={navigateToAbout}>
          {homepageConfig.contact.buttonText}
        </ButtonPrimary>
      </section>
    </div>
  );
};

export default Home;
