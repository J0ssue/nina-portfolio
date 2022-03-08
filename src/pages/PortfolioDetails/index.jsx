import React from "react";
import { Image } from "antd";
import { useParams } from "react-router-dom";

import portfolioConfig from "../../configs/portfolioConfig";
import "./style.scss";

const PortfolioDetails = () => {
  const params = useParams();

  const detailsConfig = portfolioConfig.projects.filter(
    (project) => project.title === params.id
  );

  const renderGallery = detailsConfig[0].gallery.map((image, i) =>
    i === 0 ? (
      <div key={i} className="md:w-2/12 md:m-3">
        <Image
          src={image}
          preview={{
            getContainer: () => {
              console.log("here");
              return <div></div>;
            },
            maskClassName: "hello world",
          }}
        ></Image>
      </div>
    ) : (
      <div key={i} className="md:w-3/12 md:m-3">
        <Image src={image}></Image>
      </div>
    )
  );

  return (
    <div>
      <Image.PreviewGroup>
        <div className="flex flex-row flex-wrap">{renderGallery}</div>
      </Image.PreviewGroup>
    </div>
  );
};

export default PortfolioDetails;
