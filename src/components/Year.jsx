import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Week from './Week';
import { weeksInYear } from '../constants';

@observer
class Year extends Component {

  render() {
    const weeks = weeksInYear.map(week =>
      <Week key={week} weekCount={week} yearCount={this.props.thisYear} />,
    );

    const isPast = this.props.appState.today.year > this.props.thisYear ? 'isPast' : '';
    const cssClasses = `${isPast} year-item`;

    return (
      <li className={cssClasses} data-year={this.props.thisYear}>
        <ul className="weeks-year">
          {weeks}
        </ul>
      </li>
    );
  }

}

export default Year;
