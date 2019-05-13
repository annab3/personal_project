import React from "react";

export default function Contact() {
  return (
    <div className="contact_page">
      <div className="contact_card">
        <img
          alt="Mykenzie Rodgers"
          src="https://s3.us-east-2.amazonaws.com/dev-dogs/bucketFolder/Screen+Shot+2019-05-10+at+4.39.54+PM.png"
        />
        <div>
          <img
            alt="logo"
            id="contact_card_logo"
            src="https://s3.us-east-2.amazonaws.com/dev-dogs/bucketFolder/dm_white_logo.png"
          />
          <h2>Mykenzie Rodgers</h2>
          <h3>General Manager</h3>
          <br />
          <h3>(844) 433-8686</h3>
          <h3>500 S Ervay St #101</h3>
          <h3>Dallas, TX 75201</h3>
        </div>
      </div>
      <iframe
        title="map"
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.5627024058012!2d-96.79766498499919!3d32.77733608097196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e991e6210712d%3A0x430d37caf37ec215!2s500+S+Ervay+St+%23101%2C+Dallas%2C+TX+75201!5e0!3m2!1sen!2sus!4v1557460536025!5m2!1sen!2sus"
        width="600"
        height="450"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}
