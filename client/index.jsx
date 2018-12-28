import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Categorized_Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  /*
  bind component functions here
  use this syntax --> this.func = this.func.bind(this)
  */


 render() {
   return (
     <div>
      <span>Categorization Component</span>
     </div>
   )
 };

}

ReactDOM.render(<Categorized_Lists />, document.getElementById('george-categories-component'))