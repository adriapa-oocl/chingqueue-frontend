import React from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { LoginUser } from '../../apis/UserApi'

function UserLogin() {
    const validateLogin = (userCreds) => {
        let loginCreds = {username: userCreds.username, password: userCreds.password}
        LoginUser(loginCreds).then((response) => {
            console.log(response.data)
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

            <Form.Item name="remember" valuePropName="checked"
                wrapperCol={{
                offset: 7,
                span: 10,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                offset: 8,
                span: 9,
                }}
            >
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
        </div>
    )
}

export default UserLogin
