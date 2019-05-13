import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../ducks/authReducer";
import adminRoutes from "../../adminRoutes";

function AdminPortal(props) {
  return (
    <div>
      <ul className="portal_nav">
        <Link className="link" to="/">
          <li className="navbar_link" onClick={() => props.logout()}>
            Logout
          </li>
        </Link>
      </ul>
      {adminRoutes}
    </div>
  );
}
function mapStateToProps(state) {
  return {};
}
export default connect(
  mapStateToProps,
  { logout }
)(AdminPortal);
