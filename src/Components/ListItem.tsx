import React from 'react';
import { backgroundColors } from '../Constants/constants';

const ListItem = (props: any) => {
  const { title, author, id, visited } = props.post;
  const { handleClick, handleDismiss } = props;

  return (
    <div
      className="item"
      style={{ cursor: 'default', backgroundColor: visited ? backgroundColors.visited : backgroundColors.notVisited }}
      onClick={() => { handleClick(props.post) }
    }>
      <div className="content">
        <div style={styles.header}>
          <div className="header">{author}</div>
          <span style={{ cursor: 'pointer' }} onClick={(event) => { handleDismiss(event, id) }}>Dismiss</span>
        </div>
        {title}
      </div>
    </div>
  );
};

export default ListItem;

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#2185d0'
  }
};
