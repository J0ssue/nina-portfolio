import { renderNavigationLinks } from "./helpers";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-n-grayish text-white text-body-1-sm w-full p-8">
      <p className="font-ninaBrandRegular text-brand tracking-tight m-0 text-center">
        Nina's Photos
      </p>

      <ul className="uppercase flex flex-column justify-center">
        {renderNavigationLinks(navigate)}
      </ul>
    </footer>
  );
};

export default Footer;
