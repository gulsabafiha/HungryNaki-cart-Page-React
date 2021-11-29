import Repct from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer >
      
        <div>
          <h5>COMPANY</h5>

          <p>About Us</p>
          <p>Contact Us</p>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Cancellation & Refund Policy</p>
          <p>Privacy Policy</p>
          <p>Blog</p>
        </div>
        <div>
          <h5>COVERAGE AREA</h5>

          <p>Dhaka</p>
          <p>Keraniganj</p>
          <p>Gazipur</p>
          <p>Savar</p>
          <p>Narayanganj</p>
          <p>Chittagang</p>
          <p>Comilla</p>
          <p>Cox's Bazar</p>
          <p>Sylhet</p>
        </div>
        <div>
          <h5>HELP</h5>

          <p>Customer Support</p>
          <p>Live Chat</p>
        </div>
        <div>
          <h5>GET OUR WEEKLY NEWSTELLER</h5>
          <p>
            Want discount vouchers and the latest news from the hottest
            restaurants?
          </p>
          <input
            style={{
              width: "75%",
              backgroundColor: "#000",
              border: " none",
              padding: "8px 12px",
            }}
            type="text"
            placeholder="Enter your name"
          />
          <button className="sub-btn">submit</button>
          <h3 className="text-white mt-5">DOWNLOAD APP NOW</h3>
          <div className="d-flex flex-row m-5">
            <div>
              <img
                className="me-5"
                width="95px"
                height="35px"
                src="https://hungrynaki.com/_nuxt/img/apple_store.8a4fd82.png"
              />
            </div>
            <div>
              <img
                width="95px"
                height="35px"
                src="https://hungrynaki.com/_nuxt/img/google_play_store.71d5e45.png"
              />
            </div>
          </div>
        </div>
     
    </footer>
  );
};
export default Footer;
