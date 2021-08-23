import React from 'react';
import {Layout, Input, Image } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import '../styles/header.css'


const Header = () => {
  const { Header } = Layout;
  const { Search } = Input;
  const onSearch = value => console.log(value);

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  
  return( 
    
    <Header >
      <div className="logo" />
        <div className="location">
        <img  className="responsive "src="https://i.imgur.com/bP82k1G.png" />
        <Search className="search" placeholder="input search text" onSearch={onSearch} enterButton />
      </div>
    </Header>
    
    
    )
}



export default Header
