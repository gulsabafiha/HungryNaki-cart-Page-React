import React from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Additional.css";

const Additional = () => {
  const info = <FontAwesomeIcon icon={faInfoCircle} />;
  return (
    <div className="container mt-5">
      <div className='row'>
        <div className='col-lg-3'>
          <p
            style={{ fontSize: "22px", fontWeight: "600px", color: "#292f48" }}
          >
            Addditonal Items
          </p>
        </div>
        <div className='col-lg-9'>
          <p
            style={{ fontSize: "22px", fontWeight: "600px", color: "#292f48" }}
          >
            Promo Code
          </p>
          <p style={{ color: "#17a2b8" }}>
            {info} If you have a Promo Code, Enter Here
          </p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Manually Enter PromoCode For Discount"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text input-color" id="basic-addon2">
              Add Promo Code
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Additional;
