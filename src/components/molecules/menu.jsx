import React from 'react';
import { Link } from "react-router-dom";
import SearchBox from '../atoms/search-box';

const liStyle = {
  display: 'inline',
  width: '100px'
};

const Menu = () => (
  <ul style={{display: 'flex'}}>
    <li style={liStyle}><Link to='/'>ランキング</Link></li>
    <li style={liStyle}><Link to='/exhibit'>出品する</Link></li>
    <li style={liStyle}><Link to='/mypage'>マイページ</Link></li>
    <li style={liStyle}>
      <SearchBox></SearchBox>
    </li>
  </ul>
);

export default Menu;