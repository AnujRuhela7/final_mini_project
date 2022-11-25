import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">React & Node</span> */}
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
    </div>
  )
}
