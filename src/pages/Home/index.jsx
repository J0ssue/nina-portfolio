import React from "react";

import defaultHero from "../../assets/images/defaultHero.jpg";
import aboutMe from "../../assets/images/aboutMe.png";
import homepageConfig from "../../configs/homepageConfig.json";

import { Image } from "antd";
import { ButtonPrimary } from "../../components/common/Buttons";

const Home = () => {
  const navigateToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="p-8 flex-1">
      <header className="mb-24">
        <Image className="mb-6" src={defaultHero} />
        <h1 className="font-ninaBold text-medium-title-sm leading-10">
          {homepageConfig.heroIntroduction}
        </h1>
        <ButtonPrimary onClick={navigateToAbout}>About me</ButtonPrimary>
      </header>

      <section id="about">
        <Image className="mb-6" src={aboutMe} />
        <h2 className="font-ninaBold text-medium-title-sm capitalize">
          {homepageConfig.about.title}
        </h2>
        <p className="font-ninaPublicSans text-body-1-sm">
          {homepageConfig.about.message}
        </p>

        <ButtonPrimary isDisabled isSecondary onClick={navigateToAbout}>
          {homepageConfig.about.buttonText}
        </ButtonPrimary>
        <hr className="my-9" />
      </section>

      <section>
        <h2 className="mb-10 font-ninaBold text-medium-title-sm capitalize text-center leading-10">
          {homepageConfig.contact.title}
        </h2>

        <ButtonPrimary
          className="block m-auto"
          isDisabled
          isSecondary
          onClick={navigateToAbout}
        >
          {homepageConfig.about.buttonText}
        </ButtonPrimary>
      </section>
    </div>
  );
};

export default Home;
