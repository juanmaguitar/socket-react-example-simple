import React, { Component } from 'react';
import subscribeToTimer from './utils/subscribeToTimer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'no timestamp yet'
    };
    subscribeToTimer(timestamp => this.setState({ 
      timestamp 
    }));
  }
  render() {
    return (
      <div className="App">
        <p className="App-intro">
        This is the timer value: {this.state.timestamp}
        </p>
      </div>
    );
  }
}

export default App;
