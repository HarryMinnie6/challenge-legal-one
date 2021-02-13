import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      logs: [],
    };
  }

  componentDidMount() {
    fetch("/logs")
      .then((res) => res.json())
      .then((logs) =>
        this.setState({ logs }, () => console.log("fetched logs", logs))
      );
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}
export default Home;
