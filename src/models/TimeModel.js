import { observable } from 'mobx';

export default class TimeModel {
    store;
    id;
    @observable birthday;
    @observable gender;

    constructor(store, id, birthday, gender) {
        this.store = store;
        this.id = id;
        this.birthday = birthday;
        this.gender = gender;
    }

    destroy() {
        this.store.remove(this);
    }

    setBirthday(birthday) {
        this.birthday = birthday;
    }

    toJS() {
        return {
            id: this.id,
            birthday: this.birthday,
            gender: this.gender
        };
    }

    static fromJS(store, object) {
        return new TimeModel(store, object.id, object.birthday, object.gender);
    }
}