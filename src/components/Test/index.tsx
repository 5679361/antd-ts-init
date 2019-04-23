import * as React from 'react';
import {inject, observer} from 'mobx-react';
import { Button, Input } from 'antd'


export interface TestProps {
    appState: {
        count: number,
        name: string,
        setCount: (count: number) => void
    };
}

@inject('appState')
@observer
class Test extends React.Component <TestProps, {}> {
    onClickButton = (e: any) => {
        this.props.appState.setCount(0);
    }
    
    render() {
      return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Input value={ this.props.appState.count ? this.props.appState.count : this.props.appState.name } style={{width: 200}} />
            <Button
                onClick={ this.onClickButton }
            >
                子组件重置
            </Button>
        </div>
      )
    }
}
export default Test;