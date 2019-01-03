import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Categorized_Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.count = this.count.bind(this);
  };

  count = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <span>Categorization Component</span>
        <div>
          <button onClick={this.count} data-testid="counter-button">
            {this.state.count}
          </button>
        </div>
      </div>
    );
  }
}