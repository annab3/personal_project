import React from "react";

export default function Home() {
  return (
    <div className="home_container">
      <video muted autoPlay="autoPlay" playsInline="playsInline" loop="loop">
        <source src="https://s3.us-east-2.amazonaws.com/dev-dogs/bucketFolder/IMG_5054(2).mp4" />
      </video>
      <img
        className="home_overlay_logo"
        alt="alt logo"
        src="https://s3.us-east-2.amazonaws.com/dev-dogs/bucketFolder/dm_white_logo.png"
      />
      <img
        className="phone_home_image"
        alt="a group of dogs ouside sitting aroundn a bench"
        src="https://s3.us-east-2.amazonaws.com/dev-dogs/bucketFolder/IMG_0080.jpeg"
      />
      <h3>Testimonials</h3>
    </div>
  );
}
