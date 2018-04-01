import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './App.clean.less';
/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router.
  You should adjust it according to the requirement of your app.
*/
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };

  render() {
    return (
      <div className={styles["home-app"]}>
        {this.props.children}
      </div>
    );
  }
}
