import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../ducks/authReducer";
import adminRoutes from "../../adminRoutes";

function AdminPortal(props) {
  if (!props.client.username || props.client.is_admin === false) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div>
        <ul className="portal_nav">
          <Link className="link" to="/">
            <li className="logout_button" onClick={() => props.logout()}>
              Logout
            </li>
          </Link>
        </ul>
        {adminRoutes}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    client: state.authReducer.client
  };
}
export default connect(
  mapStateToProps,
  { logout }
)(AdminPortal);
