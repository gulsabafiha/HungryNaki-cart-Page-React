import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Payment.css';

const Payment = () => {
  const plus = <FontAwesomeIcon icon={faPlus} />;
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-3">
          <h3>Payment Methods</h3>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <img className='img-input' src="https://static.hungrynaki.com/hungrynaki-v4/icons/payment-gateways/card.svg" />
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Online Payment"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <img src="https://static.hungrynaki.com/hungrynaki-v4/icons/payment-gateways/cash.svg" />
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Cash on delivery"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <img src="https://static.hungrynaki.com/hungrynaki-v4/icons/payment-gateways/mobile.svg" />
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Mobile Payment"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="col-lg-9">
          <div>
            <div >
              <h3>Delivery Method</h3>
              <div className="d-flex flex-row">
                <div className='delivery-1'>
                  <h5>HOME DELIVERY</h5>
                  <p>Home Delivery</p>
                  <p>+880</p>
                  <p>Deliver To:</p>
                </div>
                <div className='delivery-2'>
                  <h5>HOME DELIVERY CONTACT LESS</h5>
                  <p>Leave Order at Door or Gate</p>
                  <p>+880</p>
                  <p>Deliver To:</p>
                </div>
              </div>
            </div>
            <div>
              <h5 className='mt-5'>Select Delivery Address</h5>
              <div className='delivery-3'>
                <p>{plus}</p>
                <h4>Add New Address</h4>
              </div>
            </div>
            <div className='my-5'>
              <h4>Encourage Our Delivery Executives</h4>
              <p>
                <small>
                  Our Delivery Executives are real life Superheroes. Your
                  precious contribution will encourage them for being out there
                  at this tough time.
                </small>
              </p>
              <div className='bdt'>
                <div className='bdt-div'>
                  <p>BDT 20</p>
                </div>
                <div className='bdt-div'>
                  <p>BDT 20</p>
                </div>
                <div className='bdt-div'>
                  <p>BDT 20</p>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
