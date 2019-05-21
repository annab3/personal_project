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
      <div className="testimonial1">
        <h2 className="title">Testimonials</h2>
      </div>

      <div className="testimonial">
        <div className="text_container">
          <img
            className="frenchie_img"
            alt="dog"
            src="https://s3.us-east-2.amazonaws.com/dev-dogs/bucketFolder/Boxer-Dogs-Portrait-Boxer-Dog-Look-German-Boxer-2752260.jpg"
          />
          <p>
            My dogs spend a lot of time in kennels due to my work travel. This
            is the first time they've hopped out of car and RUN for the doors to
            get in. A sure sign to me that they had a great time. From what I've
            seen so far the staff goes above and beyond as well. Highly
            recommended! -Leslie Kreeger
          </p>
        </div>
      </div>
      <div className="testimonial2">
        <div className="text_container2">
          <p>
            Our dog Lily stayed here for a few weeks this summer. I know she had
            a good time and enjoyed playing. New owners and staff are great and
            very caring. You can tell they love dogs. She will be going back!
            -Frances Martin Bankester
          </p>
          <img
            className="frenchie_img"
            alt="dog"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Maltese_puppy.jpeg/440px-Maltese_puppy.jpeg"
          />
        </div>
      </div>
      <div className="testimonial">
        <div className="text_container">
          <img
            className="frenchie_img"
            alt="dog"
            src="https://media.defense.gov/2017/Jul/24/2001783439/825/780/0/170711-F-EJ686-1058.JPG"
          />
          <p>
            I went home to Alaska for few weeks to spend Christmas with my
            family and unfortunately it was too expensive to take my dog along.
            I was nervous about leaving Pepper behind and with someone else
            seeing that we never crossed that bridge. Talking to Mr. Rodgers
            about their facilities, the process, and her daily activities at the
            resort made me feel better about leaving her behind. 3,800 miles
            away I was able to enjoy my friends and family without worrying
            about my puppy. I want to say thank you to the entire staff for
            taking care of her and keeping her in good health and spirits.
            Amazing Job! - Jarael Hornsby
          </p>
        </div>
      </div>
    </div>
  );
}
