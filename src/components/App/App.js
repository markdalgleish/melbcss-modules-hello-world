import React, { Component } from 'react';

import SomeComponent from './components/SomeComponent/SomeComponent';
import AnotherComponent from './components/AnotherComponent/AnotherComponent';

export default class App extends Component {

  render() {
    return (
      <div>
        <SomeComponent />
        <AnotherComponent />
      </div>
    );
  }

};
