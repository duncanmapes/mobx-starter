import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Week extends Component {


  loadWeek = () => {
    // console.log(this,'test the focus');
  }

  render() {
    return (
      <li onMouseOver={this.loadWeek} className="week" key={this.props.weekCount.toString()} />
    );
  }


}

export default Week;
