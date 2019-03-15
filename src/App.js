import React, { Component } from 'react';
import TableComponent from './Components/Table';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TableComponent />
      </div>
    );
  }
}

export default App;
