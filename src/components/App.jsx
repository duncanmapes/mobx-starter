import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Year from './Year';
import { lifeExpectancy } from '../constants';
require('../scss/main.scss');
@observer
class App extends Component {
  render() {
    let Years = lifeExpectancy.map((year) => <Year key={year} appState={this.props.appState} thisYear={year} />);
  
    return (
      <div>
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
