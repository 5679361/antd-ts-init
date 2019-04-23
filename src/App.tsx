import React, { Component } from 'react';
import { Button, DatePicker } from 'antd'
import { observer } from 'mobx-react'
import './App.css';


@observer
class App extends Component<any> {
  onChange = (e: any) => {
    console.log(this.props)
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Button>测试</Button>
        <div>
          <DatePicker onChange={ this.onChange } />
        </div>

      </div>
    );
  }
}

export default App;
