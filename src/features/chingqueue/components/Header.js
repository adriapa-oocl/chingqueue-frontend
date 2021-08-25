import {Layout, Modal, Button } from 'antd';
import '../styles/header.css'
import React, { useEffect, useState } from 'react';
import UserLogin from './UserLogin';
import RegistrationForm from './RegistrationForm';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { RemoveUserFromState } from '../components/reducers/UserReducer';
import { selectAllUser } from '../components/reducers/UserReducer'

const Header = () => {
  const userFromState = useSelector(selectAllUser)  
  const dispatch = useDispatch()
  const { Header } = Layout;

  const [user,setUser] = useState('guest')

  useEffect(() => {
    if (userFromState.length === 0) {
      setUser('guest')
    } else {
      setUser(userFromState[0].userName)
    }
  }, [userFromState])
  
  

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
        <Link to = "/">
          <img  className="responsive " alt="ChingQueue" src="https://i.imgur.com/bP82k1G.png" />
        </Link>
        
        <span className="username">
        Welcome, {user}!
        <Button type="primary" className="SignIn" onClick={user === 'guest' ? showLogInModal : handleLogOut}>
        {user === 'guest' ? 'Sign-In' : 'Log-out'}
        </Button>
        <Button type="primary" className="SignIn" onClick={showSignupModal}>
        Sign Up 
        </Button>  
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
