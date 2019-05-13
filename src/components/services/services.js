import React from "react";

export default function Services() {
  return (
    <div className="services_container">
      {/* <div class="parallax" /> */}
      <div className="text_container">
        <img
          className="frenchie_img"
          src="https://live.staticflickr.com/3913/14467302850_c5a84ee72b_z.jpg"
          alt="french bulldog in wooden dogbed"
        />
        <p>
          It’s important to get to know your pup care provider, as you are
          trusting us with a furry member of your family. With Dev Dogs, you can
          rest assured your dog is in the best, most qualified hands in the
          business. We provide fun and dependable dog care services parents and
          pups love.
        </p>
      </div>
      <div className="parallax" />
      <div className="boarding_price_container">
        <table className="reservation_table">
          <tbody>
            <tr>
              <th>Overnight Camp Service</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>
                Interview Day Required free assessment prior to first day or
                overnight stay.
              </td>
              <td>FREE</td>
            </tr>
            <tr>
              <td>
                Overnight: One Dog Day care included in all overnight stays.{" "}
              </td>
              <td>$40.00</td>
            </tr>
            <tr>
              <td>
                Overnight: Two Dogs Day care included in all overnight stays.
              </td>
              <td>$72.00</td>
            </tr>
            <tr>
              <td>
                Overnight: Three Dogs Day care included in all overnight stays.
              </td>
              <td>$104.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
