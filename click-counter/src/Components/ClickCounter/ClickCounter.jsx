import React, { Component } from "react";
import styles from "./ClickCounter.module.css";
class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component DidMount Called.....");
  }
  increaseCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.counterContainer}>
          <h1>
            The Button has been Clicked <span>{this.state.count}</span> times
          </h1>
          <p>Click the button to increase the count.</p>
          <button onClick={this.increaseCount}>Click Me!</button>
        </div>
      </div>
    );
  }
}

export default ClickCounter;
