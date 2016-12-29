import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Year from './Year';
import { lifeExpectancy } from '../constants';
require('../scss/main.scss');
@observer
class App extends Component {
  render() {
    let Years = this.props.appState.expectedYears.map((year) => 
      <Year key={year} appState={this.props.appState} thisYear={year} />
    );
  
    return (
      <div>
      <div>Today is: {this.props.appState.today.week}</div>
        <ul className="yearsWrapper">{Years}</ul>
      </div>
    );
  }

  loadYears = () => {
    let theLastYear = this.props.appState.years[this.props.appState.years.length - 1];
    let theNextYear = theLastYear + 1;

    this.props.appState.addNewYear(theNextYear);
  }
};

export default App;
