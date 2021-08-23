import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { LoginUser } from '../../apis/UserApi'
import { useDispatch } from 'react-redux'
import { AddUserToState } from '../components/reducers/UserReducer'

function UserLogin() {
    const dispatch = useDispatch()
    const validateLogin = (userCreds) => {
        const loginCreds = {username: userCreds.username, password: userCreds.password}
        LoginUser(loginCreds).then((response) => {
            message.success('Hello, ' + response.data.username)
            dispatch(AddUserToState(response.data))
        }).catch(() => {
            onFinishFailed();
        })
      };
    
      const onFinishFailed = () => {
        message.error('Invalid User!');
      };

    return (
        <div className="login-form">
            <h1>Log-in to ChingQueue!</h1><br/>
            <Form name="loginForm"
                labelCol={{span: 11,}}
                wrapperCol={{span: 3,}}
                initialValues={{remember: true,}}
                onFinish={validateLogin}
                onFinishFailed={onFinishFailed}
            >
            <Form.Item label="Username" name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="Password" name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                offset: 8,
                span: 8,
                }}
            >
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
        </div>
    )
}

export default UserLogin
