import React, { PureComponent } from 'react';
import styles from './PageNotFound.scss';

export default class PageNotFound extends PureComponent {
  render() {
    return (
      <div className={styles["common-page-not-found"]}>
        Page not found.
      </div>
    );
  }
}
