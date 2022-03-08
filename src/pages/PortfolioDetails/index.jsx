import React from "react";
import { useParams } from "react-router-dom";
import portfolioConfig from "../../configs/portfolioConfig";

import { Image } from "antd";

const PortfolioDetails = () => {
  const params = useParams();

  const detailsConfig = portfolioConfig.projects.filter(
    (project) => project.title === params.id
  );

  const renderGallery = detailsConfig[0].gallery.map((image, i) => (
    <div className="w-full md:w-3/12 m-1" key={i}>
      <Image src={image}></Image>
    </div>
  ));

  return (
    <div>
      <Image.PreviewGroup>
        <div className="flex flex-row flex-wrap justify-between">
          {renderGallery}
        </div>
      </Image.PreviewGroup>
    </div>
  );
};

export default PortfolioDetails;
