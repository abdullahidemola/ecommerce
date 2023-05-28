import React from "react";

import "./contact.scss";

import {
  TwitterLogo,
  FacebookLogo,
  InstagramLogo,
  Envelope,
  MapPin,
  Phone,
} from "phosphor-react";

import Button from "../../utilities/Button";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="form-and-text">
        <div className="form">
          <form action="submit">
            <div className="flex">
              <div className="name">
                <label htmlFor="name">name</label>
                <br />
                <input type="text" placeholder="your name" />
                <br />
              </div>

              <div className="phone">
                <label htmlFor="phone">phone</label>
                <br />
                <input type="text" placeholder="your phone" /> <br />
              </div>
            </div>

            <div className="flex">
              <div className="car-model">
                <label htmlFor="car">car model</label>
                <br />
                <input type="text" placeholder="car model" />
                <br />
              </div>
              <div className="email-address">
                <label htmlFor="email">email address</label>
                <br />
                <input
                  type="text"
                  placeholder="your email"
                  className="ma"
                />{" "}
                <br />
              </div>
            </div>
            <label htmlFor="message">message</label>
            <br />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="message"
            ></textarea>
            <br />
            <Button>get an appointment now</Button>
          </form>
        </div>
        <div className="appointment">
          <h2>get a free appointment</h2>

          <div className="icon-container">
            <div className="icon">
              <InstagramLogo size={32} weight="thin" />
            </div>
            <div className="icon">
              <FacebookLogo size={32} weight="thin" />
            </div>
            <div className="icon">
              <TwitterLogo size={32} weight="thin" />
            </div>
          </div>

          <div className="email">
            <div className="icon email-icon">
              <Envelope size={32} weight="thin" />
            </div>
            <span className="text">mechanic@example.com</span>
          </div>

          <div className="address-container">
            <div className="icon location-icon">
              <MapPin size={32} weight="thin" />
            </div>
            <p>2118 thornridge cir. syracuse, connecticut</p>
          </div>
          <p className="outside">4517 washington ave. washington DC</p>

          <div className="phone-container">
            <div className="icon phone-icon">
              <Phone size={32} weight="thin" />
            </div>
            <p>+234123456789</p>
          </div>

          <p className="outside">+2348022567272</p>
        </div>
      </div>
      <footer className="footer">
        <h1>mechanic</h1>
        <ul>
          <li>home</li>
          <li>service</li>
          <li>about</li>
          <li>pricing</li>
          <li>store</li>
          <li>blog</li>
        </ul>
      </footer>
    </div>
  );
};

export default Contact;
