import React from "react";
import { Link } from "react-router-dom";

export default class Logout extends React.Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>You are Logged out.</h1>
        <Link to="/">Login Again</Link>
      </div>
    );
  }
}
