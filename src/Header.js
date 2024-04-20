import { useState } from "react";
import image1 from "./images/icon-arrow-down.svg";
import image2 from "./images/icon-arrow-up.svg";

const Header = () => {
  const [featuresOpen, setIsFeatureOpen] = useState(false);
  const featureToggle = () => {
    setIsFeatureOpen(!featuresOpen);
  };

  const [companyOpen, setCompanyOpen] = useState(false);
  const companyToggle = () => {
    setCompanyOpen(!companyOpen);
  };

  const [arrow, setArrow] = useState(image1);

  const handleDropdown = () => {
    setArrow(arrow === image1 ? image2 : image1);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggledropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const toggledropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };

  return (
    <div className="header-wrapper">
      <h1>snap</h1>
      <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li
            className={`drop ${dropdownOpen ? "set" : ""}`}
            onClick={toggledropdown}
          >
            <a href="#" onClick={featureToggle}>
              features
              <div className="">
                <img src={arrow} alt="" onClick={handleDropdown} />
              </div>
            </a>
            {featuresOpen && (
              <ul className="feature-dropdown dropdowns">
                <li>todo list</li>
                <li>calender</li>
                <li>reminder</li>
                <li>planing</li>
              </ul>
            )}
          </li>
          <li
            className={`drop2 ${dropdownOpen2 ? "set2" : ""}`}
            onClick={toggledropdown2}
          >
            <a href="#" onClick={companyToggle}>
              company{" "}
              <div className="">
                <img src={arrow} alt="" onClick={handleDropdown} />
              </div>
            </a>
            {companyOpen && (
              <ul className="compony-dropdown dropdowns">
                <li>history</li>
                <li>our team</li>
                <li>blog</li>
              </ul>
            )}
          </li>
          <li>careers</li>
          <li>about</li>
        </ul>
        <div className="header-links">
          <a href="/">login</a>
          <a href="/" className="register">
            Register
          </a>
        </div>
      </div>

      <button className="menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </div>
  );
};

export default Header;
