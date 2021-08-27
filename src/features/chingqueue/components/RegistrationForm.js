import { Form, Input, Button, message } from 'antd';
import  {addUser}  from '../../apis/UserApi';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function RegistrationForm(props) {

    const validateRegistration = (userCreds) =>{
        let registrationCreds = {full_name:userCreds.fullName, username: userCreds.username, password: userCreds.password, contact_num: userCreds.phone, address: userCreds.address  };
        addUser(registrationCreds).then(()=>{
          message.success('Registration successful! You may now sign in.')
        props.onCloseRegisterModal()
        }).catch(()=>{
            onFinishFailed();
        })
    }

    const onFinishFailed = () =>{
      message.error('Invalid User Details')
    };

    const [form] = Form.useForm();
    return (
        <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={validateRegistration}
    
      scrollToFirstError
    >
      <Form.Item
        name="username"
        label="Username"
        rules={[{
        required:true,
        message:'Please input your username!'
        }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          })
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
      name="fullName"
      label="Full name"
      rules={[{
          required:true,
          message:"Please input your full name!"
      }]
      }
    >
      <Input />
    </Form.Item>

      <Form.Item
        name="phone"
        label="Contact number"
        rules={[{
          required:true,
          message:"Please input your contact number!"
        }]
      }
      >  
        <Input/>
      </Form.Item>
      <Form.Item
      name="address"
      label="Home address"
    >
      <Input />
    </Form.Item>

      <br></br>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    )
}

export default RegistrationForm


