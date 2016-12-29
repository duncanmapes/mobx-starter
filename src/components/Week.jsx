import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class Week extends Component {

  render() {
    return (
      <li onMouseOver={this.loadWeek} className="week" key={this.props.weekCount.toString()}></li>
    ); 
  }

  loadWeek = () => {
    console.log(this,'test the focus');
  }

};

export default Week;
