import React from 'react';

const List = (props: any) => {
  const { children } = props;
  return (
    <div className="ui segment" style={{ overflowY: 'scroll', height: '700px' }}>
      <div className="ui relaxed divided list">
        {children}        
      </div>
    </div>
  );
};

export default List;
