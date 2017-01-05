import {
  observable
} from 'mobx';
import {
  lifeExpectancy
} from './constants';

const moment = require('moment');

class AppState {
  @observable timer = 0;
  @observable years = [1, 2, 3, 4, 5];
  @observable expectedYears = [];
  @observable birthday = {};


  constructor() {
    const todayObj = moment();
    let weekCount = 0;
    if (todayObj.week() > 52) {
      weekCount = 52;
    } else {
      weekCount = todayObj.week();
    }

    this.today = {
      date: todayObj,
      week: weekCount,
      day: todayObj.dayOfYear(),
      year: todayObj.year(),
    };

    this.birthday = null;

    this.setExpectedYears(1983);
  }

  resetTimer() {
    this.timer = 0;
  }


  setExpectedYears(startYear) {
    const deathYear = startYear + lifeExpectancy;
    const years = [];
    for (let i = startYear; i <= deathYear; i++) {
      years.push(i);
    }
    this.expectedYears = years;
  }


}

export default AppState;
