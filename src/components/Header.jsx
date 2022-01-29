import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return <>
    <nav id='header' >
      <Link to='/' >
        <i className="fa-solid fa-house"></i>
      </Link>
    </nav>
  </>
};

export default Header;
