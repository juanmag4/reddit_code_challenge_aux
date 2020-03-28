import React from 'react';

const ListItem = (props: any) => {
  const { title, author, id } = props.post;
  const { handleClick, handleDismiss } = props;

  return (
    <div className="item" style={{ cursor: 'default' }} onClick={() => { handleClick(id) }}>
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
}
