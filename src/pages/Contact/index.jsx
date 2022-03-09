import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Form, Input, Button, Alert } from "antd";
import { InstagramOutlined, FacebookOutlined } from "@ant-design/icons";

import contactpageConfig from "../../configs/contactpageConfig.json";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  useEffect(() => {
    return () => {
      setSuccess(false);
      setError(false);
    };
  }, []);

  const onFinish = (values) => {
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        { ...values, from_email: values.email },
        import.meta.env.VITE_USER_ID
      )
      .then(
        (result) => {
          if (result.text === "OK" && form.current) {
            form.current.resetFields();
            setSuccess(true);
          }
          setLoading(false);
        },
        (error) => {
          setError(true);
          setLoading(false);
          alert(error.text);
        }
      );
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };

  return (
    <div className="p-8">
      <div className="md:flex md:flex-row">
        <h1 className="font-ninaBold text-medium-title-sm capitalize md:text-center md:w-2/4">
          {contactpageConfig.title}
        </h1>

        <div className="md:w-2/4">
          <p className="font-ninaPublicSans text-body-2">
            {contactpageConfig.message}
          </p>

          <ul className="flex flex-row mt-10 md:m-0">
            <li className="mr-2">
              <a
                href="https://instagram.com/ninas_photos"
                target="_blank"
                className="text-n-grayish"
              >
                <InstagramOutlined
                  style={{
                    fontSize: "36px",
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/nina.art.7121"
                target="_blank"
                className="text-n-grayish"
              >
                <FacebookOutlined
                  style={{
                    fontSize: "36px",
                  }}
                />
              </a>
            </li>
          </ul>
        </div>
        <hr className="mt-8 md:hidden" />
      </div>
      <hr className="mt-8 hidden md:block" />
      <div className="flex flex-col items-start overflow-hidden md:flex-row md:mt-8">
        <h2 className="font-ninaBold text-medium-title-sm capitalize mt-10 w-full text-center md:w-2/4">
          {contactpageConfig.form.title}
        </h2>
        <Form
          ref={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="w-full md:w-2/4"
        >
          <Form.Item
            label="Name"
            name="from_name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input className="bg-n-light-gray" placeholder="First Last" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="from_email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="user@emailprovider.com" />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please input a message!" }]}
          >
            <Input placeholder="Write message" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button loading={loading} htmlType="submit" type="primary">
              SEND MESSAGE
            </Button>
          </Form.Item>
          {success && (
            <Alert
              message={contactpageConfig.form.successMessage}
              closable
              type="success"
            />
          )}
        </Form>
      </div>
    </div>
  );
};

export default Contact;
