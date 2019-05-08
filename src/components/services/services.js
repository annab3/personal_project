import React from "react";

export default function Services() {
  return (
    <div className="services_container">
      <table>
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
  );
}
