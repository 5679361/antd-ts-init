''
import { observable, action } from 'mobx'

class AppState {
    constructor() {
        console.log('1')
    }
    @observable count = 0;
    @observable name = '萝卜';
    
    @action
    setCount(count) {
        this.count = count
    }
}

export default new AppState()