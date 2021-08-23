import {useState} from 'react'
import { Form, Input, Select, Row, Col, Checkbox, Button, AutoComplete, message } from 'antd';
import  {addUser}  from '../../apis/UserApi';
const { Option } = Select;

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

function RegistrationForm() {

    const validateRegistration = (userCreds) =>{
       
        let registrationCreds = {full_name:userCreds.fullName, username: userCreds.email, password: userCreds.password, contact_num: userCreds.phone, address: userCreds.address  };
        addUser(registrationCreds).then((response)=>{

        console.log(registrationCreds);
        console.log(response.data);


        }).catch(()=>{

            onFinishFailed();
        })



    };

    const onFinishFailed = (errorInfo) =>{

        console.log('Failed:', errorInfo);
        const onFinishFailed=()=>{
            message.error('Invalid');
        }

    };


    const [form] = Form.useForm();

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
  
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select
          style={{
            width: 70,
          }}
        >
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      </Form.Item>
    );
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  
    const onWebsiteChange = (value) => {
      if (!value) {
        setAutoCompleteResult([]);
      } else {
        setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
      }
    };
  
    const websiteOptions = autoCompleteResult.map((website) => ({
      label: website,
      value: website,
    }));
    return (
        <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={validateRegistration}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
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
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
      name="fullName"
      label="Full name"
    >
      <Input />
    </Form.Item>

      <Form.Item
        name="phone"
        label="Contact number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
    
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


