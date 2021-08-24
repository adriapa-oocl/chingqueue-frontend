import {Layout, Input, Modal, Button } from 'antd';
import '../styles/header.css'
import React, { useState } from 'react';
import Settings from './Settings';
import UserLogin from './UserLogin';
import RegistrationForm from './RegistrationForm';



const Header = () => {
  
  const { Header } = Layout;
  const { Search } = Input;
  const onSearch = value => console.log(value);

  const [isLogInModalVisible, setIsLogInModalVisible] = useState(false);
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);

  const showLogInModal = () => {
    setIsLogInModalVisible(true);
  };

  const showSignupModal = () => {
    setIsSignupModalVisible(true);
  };

  const handleCancel = () => {
    setIsLogInModalVisible(false);
    setIsSignupModalVisible(false);
  };
  
  return( 
    
    <React.Fragment>
    <Header >
      
        <div className="location">
        <img  className="responsive " alt="ChingQueue" src="https://i.imgur.com/bP82k1G.png" />
        <Search className="search" placeholder="input search text" onSearch={onSearch} enterButton />
        
        <span className="username">
        Username text here
        <Button type="primary" className="SignIn" onClick={showLogInModal}>
        Sign In 
        </Button>
        <Button type="primary" className="SignIn" onClick={showSignupModal}>
        Sign Up 
        </Button>  
        <Settings className="Settings"/>
        </span>

      <>
      <Modal title="Log-in to ChingQueue!" visible={isLogInModalVisible} onCancel={handleCancel} okButtonProps={{ style: { display: 'none' } }}>
        <UserLogin onCloseLoginModal={setIsLogInModalVisible}/>
      </Modal>
      <Modal title="Register" visible={isSignupModalVisible} onCancel={handleCancel} okButtonProps={{ style: { display: 'none' } }}>
        <RegistrationForm onCloseRegisterModal={setIsSignupModalVisible}/>
      </Modal>
      </>
    </div>     
     
    </Header>
    
    </React.Fragment>
    
    
    )
}



export default Header
