import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Week from './Week';
import { weeksInYear } from '../constants';

@observer
class Year extends Component {
   
  render() {

    const weeks = weeksInYear.map((week) => <Week key={week} weekCount={week} yearCount={this.props.thisYear} />);
    
    return (
        <li className="year-item" data-year={this.props.thisYear}>
            <ul className="weeks-year">
                {weeks}
            </ul>
        </li>
    );
  }

};

export default Year;
