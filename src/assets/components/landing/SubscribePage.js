import React, { Component } from "react";

export class SubscribePage extends Component {
  render() {
    return (
      <div className="subscribe">
        <h2>SubscribePage</h2>
        <p>Subscribe to get notifications about Advice</p>
        <form>
          <input type="text" />
          <button>Subscribe</button>
        </form>
      </div>
    );
  }
}

export default SubscribePage;
