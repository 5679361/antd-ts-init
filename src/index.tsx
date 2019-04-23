import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer, inject, Provider} from 'mobx-react';
import Test from './components/Test'
import appState from './stores/appState'
import { Button } from 'antd'


@inject('appState')
@observer
class TimerView extends React.Component<any> {
    componentDidMount() {
        console.log('2')
    }
    render() {
        return (
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Button 
                    onClick={this.onReset}
                >
                    父组件增加
                </Button>
                <Test appState={appState} />
            </div>
        );
     }

     onReset = () => {
         this.props.appState.setCount(++this.props.appState.count);
     }
};

ReactDOM.render(
    <Provider appState={appState}>
        <TimerView  />
    </Provider>
, document.getElementById('root'));