import { observable } from 'mobx';

class AppState {
    @observable timer = 0;
    @observable years = [1, 2, 3, 4, 5];

    constructor() {

        //this.years = [1, 2, 3, 4, 5];
    }

    resetTimer() {
        this.timer = 0;
    }

    addNewYear(theNextYear) {
        this.years.push(theNextYear);
    }


}

export default AppState;