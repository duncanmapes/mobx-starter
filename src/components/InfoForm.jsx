import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { DaysArray, MonthsArray, YearsArray } from '../constants';

@observer
class InfoForm extends Component {

  submitInfo = (e) => {
    e.preventDefault();

    const info = {
      gender: this.refs.gender.value,
      birthday: {
        year: this.refs.year.value,
        month: this.refs.month.value,
        day: this.refs.day.value
      }
    }

    this.updateState(info);
  }

  updateState = (data) => {
    this.props.appState.birthday = data.birthday;
    this.props.appState.gender = data.gender;
  }

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
      <form name="birth-info-form" onSubmit={this.submitInfo}>
        <div>
          <select ref="gender" id="form-select-gender">
            <option key="male" value="male">Male</option>
            <option key="female" value="female">Female</option>
          </select>
        </div>
        <div>
          <select ref="day" id="form-select-day">
            {daySelect}
          </select>
          <select ref="month" id="form-select-month">
            {monthsSelect}
          </select>
          <select ref="year" id="form-select-year">
            {YearSelect}
          </select>
        </div>
        <div>
          <button type="submit" >Submit</button>
        </div>

      </form>
    );
  }


}

export default InfoForm;
