import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Categorized_Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  /*
  bind component functions here
  use this syntax --> this.func = this.func.bind(this)
  */


  render() {
    return (
      <div>
        <span>Categorization Component</span>
        <div>
          <button>
            {this.state.count}
          </button>
        </div>
      </div>
    );
  }

}