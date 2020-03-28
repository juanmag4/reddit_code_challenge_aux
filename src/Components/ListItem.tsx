import React from 'react';

const ListItem = (props: any) => {
  const { title, author, id } = props.post;
  const { handleClick } = props;

  return (
    <div className="item" style={{ cursor: 'pointer' }} onClick={() => { handleClick(id) }}>
      <div className="content">
        <div className="header">{author}</div>
        {title}
      </div>
    </div>
  );
};

export default ListItem;
