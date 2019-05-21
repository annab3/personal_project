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
            className="ontact_card_logo"
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
      <div className="text_container3">
        <p>
          Mykenzie has been a leader in animal hospitality for over 10 years
          with a background in animal behavior. Specializing in furry friends of
          the canine variety, no one is better suited to run things here at Dev
          Dogs. Contact Mykenzie with any questions, concerns or to schedule a
          tour.
        </p>
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
      <div className="text_container3">
        <p>
          Located in the heart of downtown Dallas, Dev Dogs is the place for
          your pet to be! Visit our newly renovated, state-of-the art facilities
          and see what we are barking about!
        </p>
      </div>
    </div>
  );
}
