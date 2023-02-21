
import React, { Component } from "react";
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
  message,
} from "antd";
import axios from "axios";

function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const { Title } = Typography;
const { Content } = Layout;

export default class SignIn extends Component {
  loginPost = () => {
    var newData = new FormData()
    newData.append("nickname", document.querySelector("#nickname").value)
    newData.append("password", document.querySelector("#password").value)
    axios.post(`https://prokror.onrender.com/login`, newData)
      .then(res => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("XAto")
      })
  }
  render() {
    return (
      <>
        <Layout style={{ margin: "auto" }} className="layout-default layout-signin">
          <Content className="signin">
            <Row gutter={[24, 0]} justify="space-around" style={{ alignItems: 'center', minHeight: '80vh' }}>
              <Col
                xs={{ span: 24, offset: 0 }}
                lg={{ span: 6, offset: 2 }}
                md={{ span: 12 }}
              >
                <Title className="mb-15">Tizimga kirish</Title>
                <Title className="font-regular text-muted" level={5}>
                  Login va parolni kiriting. Sayt o`zini o`zi himoyalaydi. Buzib kirishga urunish sizni ma`lumotlariz saqlanadi!
                </Title>
                <Form
                  layout="vertical"
                  className="row-col"
                >
                  <Form.Item
                    className="username"
                    label="Login"
                    name="nickname"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos logini kiriting!",
                      },
                    ]}
                  >
                    <Input placeholder="Login" id="nickname" />
                  </Form.Item>

                  <Form.Item
                    className="username"
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos parolni kiriting!",
                      },
                    ]}
                  >
                    <Input placeholder="Password" id="password" />
                  </Form.Item>

                  <Form.Item
                    name="remember"
                    className="aligin-center"
                    valuePropName="checked"
                  >
                    <Switch defaultChecked onChange={onChange} />
                    Saqlab qo`yish
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%" }}
                      onClick={this.loginPost}
                    >
                      Yuborish
                    </Button>
                  </Form.Item>

                </Form>
              </Col>
              <Col
                className="sign-img"
                style={{ padding: 12 }}
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                md={{ span: 12 }}
              >
                <img src="https://klike.net/uploads/posts/2022-09/1662526271_s-2.jpg" alt="" />
              </Col>
            </Row>
          </Content>
        </Layout>
      </>
    );
  }
}
