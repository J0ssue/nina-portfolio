import { InstagramOutlined, FacebookOutlined } from "@ant-design/icons";
import { renderNavigationLinks } from "./helpers";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Footer.scss";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer bg-n-grayish text-white text-body-1-sm w-full p-8 md:flex md:flex-row md:items-center">
      <Link
        to="/"
        className="block font-ninaBrandRegular text-white text-brand tracking-tight m-0 text-center"
      >
        NK Photography
      </Link>

      <ul className="footer__nav-links font-ninaPublicSans text-body-1-sm uppercase flex flex-col items-center justify-center m-0 md:flex-row md:flex-1 md:justify-start md:ml-11 md:text-body-2">
        {renderNavigationLinks(navigate)}
      </ul>

      <ul className="flex flex-row justify-center mt-10 md:m-0">
        <li className="mr-2">
          <a
            href="https://instagram.com/ninas_photos"
            target="_blank"
            className="text-white"
          >
            <InstagramOutlined
              style={{
                fontSize: "36px",
              }}
            />
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com/nina.art.7121"
            target="_blank"
            className="text-white"
          >
            <FacebookOutlined
              style={{
                fontSize: "36px",
              }}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
