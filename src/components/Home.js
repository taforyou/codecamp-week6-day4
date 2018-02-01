import React, { Component } from "react";
import PlayerAPI from "../api";
import { Link } from "react-router-dom";

// The FullRoster iterates over all of the players and creates
// a link to their profile page.

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Tornadoes Website!</h1>
      </div>
    );
  }
}

export default Home;
