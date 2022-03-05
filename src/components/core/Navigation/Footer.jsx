import { InstagramOutlined, FacebookOutlined } from "@ant-design/icons";
import { renderNavigationLinks } from "./helpers";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-n-grayish text-white text-body-1-sm w-full p-8 md:flex md:flex-row md:items-center">
      <p className="font-ninaBrandRegular text-brand tracking-tight m-0 text-center">
        Nina's Photos
      </p>

      <ul className="font-ninaPublicSans text-body-1-sm uppercase flex flex-column justify-center m-0 md:flex-1 md:justify-start md:ml-11">
        {renderNavigationLinks(navigate)}
      </ul>

      <ul className="flex flex-row justify-center md:m-0">
        <li className="mr-2">
          <a
            href="https://instagram.com/ninas_photos"
            target="_blank"
            className="text-white"
          >
            <InstagramOutlined />
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com/nina.art.7121"
            target="_blank"
            className="text-white"
          >
            <FacebookOutlined />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
