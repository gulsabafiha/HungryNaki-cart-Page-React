import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faUser,
  faCartPlus,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import './Header.css';

const Header = () => {
  const searchicon = <FontAwesomeIcon icon={faSearch} />;
  const Bellicon = <FontAwesomeIcon icon={faBell} />;
  const Usericon = <FontAwesomeIcon icon={faUser} />;
  const CartPlusicon = <FontAwesomeIcon icon={faCartPlus} />;
  const LocationArrowicon = <FontAwesomeIcon icon={faMapMarker} />;

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Deliver to
              </a>
            </li>
            <ul class="nav-item">
              <a class="nav-link" href="#">
                {LocationArrowicon} Current Location
              </a>
            </ul>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dhaka Uttara
              </a>
            </li>
            <li>
              <a class="navbar-brand brand-img" href="#">
                <img
                  src="https://hungrynaki.com/_nuxt/img/logo-primary.e6f0682.svg"
                  height="32.63px"
                  width="120px"
                />
              </a>
            </li>
          </ul>
          <form class="d-flex">
            
            <a type="submit">{searchicon} Search</a>
          </form>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">{Bellicon} Notification</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <img src="https://hungrynaki.com/_nuxt/img/iconNoHNCredit.6fb296c.svg" />{" "}
                HN Credits
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{CartPlusicon} Cart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{Usericon} My Account</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
