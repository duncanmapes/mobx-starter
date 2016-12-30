import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { DaysArray, MonthsArray, YearsArray } from '../constants';

@observer
class InfoForm extends Component {

  render() {
    const daySelect = DaysArray.map(day =>
      <option key={day} value={day}>
        {day}
      </option>,
    );

    const monthsSelect = MonthsArray.map(month =>
      <option key={month.month} value={month.month}>
        {month.name}
      </option>,
    );

    const YearSelect = YearsArray.map(year =>
      <option key={year} value={year}>
        {year}
      </option>,
    );


    return (
      <form>
        <div>
          <select id="form-select-gender">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div>
          <select id="form-select-day">
            {daySelect}
          </select>
          <select id="form-select-month">
            {monthsSelect}
          </select>
          <select id="form-select-year">
            {YearSelect}
          </select>


        </div>

      </form>
    );
  }


}

export default InfoForm;
