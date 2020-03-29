import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div className="ui three item menu">
      <Link to="/" className="item">Posts</Link>
      <Link to="/gallery" className="item">Gallery</Link>
    </div>
  );
};

export default Header;
