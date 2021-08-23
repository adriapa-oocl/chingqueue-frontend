import { Menu, Dropdown } from 'antd';

function Settings(){
    
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
        Account Settings
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
        Ticket Reservations
      </a>
    </Menu.Item>
    <Menu.Item danger>Logout</Menu.Item>
  </Menu>
);

return(
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="https://www.google.com" onClick={e => e.preventDefault()}>
      <img src="https://image.flaticon.com/icons/png/512/747/747496.png" alt="logout button" height="27px" width="27px"></img>
    </a>
  </Dropdown>
  );
}



export default Settings;