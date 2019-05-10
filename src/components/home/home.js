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
      <div className="text_container">
        <img
          className="frenchie_img"
          src="https://live.staticflickr.com/3913/14467302850_c5a84ee72b_z.jpg"
          alt="french bulldog in wooden dogbed"
        />
        <p>
          Stressing about finding a reliable and trustworthy person to watch
          your pup while you’re away? Dev Dogs offers premier dog care services
          in Dallas. We offer pet overnight boarding services they can count on.
          Our facility offers climate-controlled play yards, our trained team
          provide individualized attention to each pup, and our overnight pups
          receive an evening treat along with a comfy cot and fleece blanket to
          rest.
        </p>
      </div>
    </div>
  );
}
