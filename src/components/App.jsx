import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Year from './Year';
import InfoForm from './InfoForm';

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

  checkForBirthday = () => {
    const birthday = this.props.appState.birthday;

    const Years = this.props.appState.expectedYears.map(year =>
      <Year key={year} appState={this.props.appState} thisYear={year} />,
    );

    if (birthday) {
      return <ul className="yearsWrapper">{Years}</ul>;
    }
    return <InfoForm appState={this.props.appState} />;
  }



  render() {


    const Main = this.checkForBirthday();

    return (
      <div>
        {Main}
      </div>
    );
  }
}

export default App;
