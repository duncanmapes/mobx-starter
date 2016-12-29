import { observable } from 'mobx';
const moment = require('moment');
import { lifeExpectancy } from './constants';

class AppState {
    @observable timer = 0;
    @observable years = [1, 2, 3, 4, 5];
    @observable expectedYears = [];


    constructor() {

        let todayObj = moment();
        var weekCount = 0;
        if (todayObj.week() > 52) {
            var weekCount = 52;
        } else {
            var weekCount = todayObj.week();
        }

        this.today = {
            date: todayObj,
            week: weekCount,
            day: todayObj.dayOfYear(),
            year: todayObj.year()
        }

        this.setExpectedYears(1983);

        //this.years = [1, 2, 3, 4, 5];
    }

    resetTimer() {
        this.timer = 0;
    }


    setExpectedYears(startYear) {
        let deathYear = startYear + lifeExpectancy;
        let years = [];
        for (var i = startYear; i <= deathYear; i++) {
            years.push(i);
        }
        this.expectedYears = years;
        console.log('years', years);
    }


}

export default AppState;