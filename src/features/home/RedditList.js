import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './RedditList.less';

export default class RedditList extends PureComponent {
  static propTypes = {
    list: PropTypes.array,
  };

  static defaultProps = {
    list: [],
  };

  render() {
    return (
      <ul className={styles["home-reddit-list"]}>
        {
          this.props.list.length > 0 ?
            this.props.list.map(item => <li key={item.data.id}><a href={item.data.url}>{item.data.title}</a></li>)
            : <li className={styles["no-items-tip"]}>No items yet.</li>
        }
      </ul>
    );
  }
}
