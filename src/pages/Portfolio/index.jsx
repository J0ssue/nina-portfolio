import React from "react";
import { useNavigate } from "react-router-dom";
import portfolioConfig from "../../configs/portfolioConfig";

import { Image } from "antd";
import { ButtonPrimary } from "../../components/common/Buttons";

import "./styles.scss";

const Portfolio = () => {
  const navigate = useNavigate();

  const renderPhotos = portfolioConfig.projects.map((project, i) => (
    <div
      key={i}
      className="portfolio__image-container relative flex flex-row justify-center items-center overflow-hidden md:w-2/4"
    >
      <div className="portfolio__project-cta absolute flex flex-col justify-center">
        <h2 className="font-ninaBold text-white text-small-title uppercase">
          {project.title}
        </h2>
        <ButtonPrimary
          isSecondary
          className="bg-transparent border border-white text-white"
          onClick={() => {
            navigate(project.path);
          }}
        >
          {portfolioConfig.buttonText}
        </ButtonPrimary>
      </div>
      <Image preview={false} src={project.cover} />
    </div>
  ));

  return (
    <div className="portfolio container flex-1">
      <h1 className="font-ninaBold text-large-title uppercase text-center mb-18">
        {portfolioConfig.title}
      </h1>
      <div className="flex flex-col items-stretch flex-wrap md:flex-row">
        {renderPhotos}
      </div>
    </div>
  );
};

export default Portfolio;
