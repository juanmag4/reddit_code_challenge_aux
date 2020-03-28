import React from 'react';

const List = (props: any) => {
  const { children } = props;
  return (
    <div className="ui segment" style={{ overflowY: 'scroll', height: '763px' }}>
      <div className="ui relaxed divided list">
        {children}        
      </div>
    </div>
  );
};

export default List;
