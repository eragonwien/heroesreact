import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to React Router Tutorial</h2>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/Login'}>Login</Link></li>
          <li><Link to={'/Signup'}>Signup</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;