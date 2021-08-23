import {Layout, Input, Image, Modal, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import '../styles/header.css'
import React, { useState } from 'react';
import Settings from './Settings';


const Header = () => {
  
  const { Header } = Layout;
  const { Search } = Input;
  const onSearch = value => console.log(value);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  
  return( 
    
    <React.Fragment>
    <Header >
      
        <div className="location">
        <img  className="responsive " alt="ChingQueue" src="https://i.imgur.com/bP82k1G.png" />
        <Search className="search" placeholder="input search text" onSearch={onSearch} enterButton />
        
        <span className="username">
        Username text here
        <Button type="primary" className="SignIn" onClick={showModal}>
        Sign In 
        </Button> 
        <Settings className="Settings"/>
        </span>

      <>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      </>
    </div>     
     
    </Header>
    
    </React.Fragment>
    
    
    )
}



export default Header
