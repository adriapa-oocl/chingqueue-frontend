import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function Settings(){
    
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Account Settings
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Ticket Reservations
      </a>
    </Menu.Item>
    <Menu.Item danger>Logout</Menu.Item>
  </Menu>
);

return(
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      <img src="https://image.flaticon.com/icons/png/512/747/747496.png" height="27px" width="27px"></img>
    </a>
  </Dropdown>
  );
}



export default Settings;