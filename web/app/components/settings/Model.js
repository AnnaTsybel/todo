export default class Model {
    constructor() {
        this.models = JSON.parse(localStorage.getItem('users')) || [];

    }

}