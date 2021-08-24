import {Layout, Input, Modal, Button } from 'antd';
import '../styles/header.css'
import React, { useState } from 'react';
import Settings from './Settings';
import UserLogin from './UserLogin';
import RegistrationForm from './RegistrationForm';
import { useDispatch } from 'react-redux'
import { RemoveUserFromState } from '../components/reducers/UserReducer';

const Header = () => {
  
  const dispatch = useDispatch()
  const { Header } = Layout;
  const { Search } = Input;
  const onSearch = value => console.log(value);

  const [user,setUser] = useState('guest')

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

  const handleLogOut = () => {
    dispatch(RemoveUserFromState())
    setUser('guest')
  };
  
  return( 
    
    <React.Fragment>
    <Header >
      
        <div className="location">
        <img  className="responsive " alt="ChingQueue" src="https://i.imgur.com/bP82k1G.png" />
        <Search className="search" placeholder="input search text" onSearch={onSearch} enterButton />
        
        <span className="username">
        Welcome, {user}!
        <Button type="primary" className="SignIn" onClick={user === 'guest' ? showLogInModal : handleLogOut}>
        {user === 'guest' ? 'Sign-In' : 'Log-out'}
        </Button>
        <Button type="primary" className="SignIn" onClick={showSignupModal}>
        Sign Up 
        </Button>  
        <Settings className="Settings"/>
        </span>

      <>
      <Modal title="Log-in to ChingQueue!" visible={isLogInModalVisible} onCancel={handleCancel} okButtonProps={{ style: { display: 'none' } }} destroyOnClose={true}>
        <UserLogin onCloseLoginModal={setIsLogInModalVisible} currentUser={setUser}/>
      </Modal>
      <Modal title="Register" visible={isSignupModalVisible} onCancel={handleCancel} okButtonProps={{ style: { display: 'none' } }} destroyOnClose={true}>
        <RegistrationForm onCloseRegisterModal={setIsSignupModalVisible}/>
      </Modal>
      </>
    </div>     
     
    </Header>
    
    </React.Fragment>
    
    
    )
}



export default Header
