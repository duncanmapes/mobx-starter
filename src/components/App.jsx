import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Year from './Year';

require('../scss/main.scss');

@observer
class App extends Component {

  propTypes = {
    addNewYear: React.PropTypes.func.isRequired,
    years: React.PropTypes.number,
  }

  loadYears = () => {
    const theLastYear = this.props.appState.years[this.props.appState.years.length - 1];
    const theNextYear = theLastYear + 1;

    this.props.appState.addNewYear(theNextYear);
  }

  render() {
    const Years = this.props.appState.expectedYears.map(year =>
      <Year key={year} appState={this.props.appState} thisYear={year} />,
    );

    return (
      <div>
        <div>Today is: {this.props.appState.today.week}</div>
        <ul className="yearsWrapper">{Years}</ul>
      </div>
    );
  }
}

export default App;
