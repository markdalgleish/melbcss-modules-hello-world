import styles from './SomeComponent.css';

import React, { Component } from 'react';

export default class SomeComponent extends Component {

  render() {
    return (
      <div>
        <h1 className={styles.heading}>Hello World!!</h1>
      </div>
    );
  }

};
