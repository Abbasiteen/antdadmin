
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
} from "antd";

function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const { Title } = Typography;
const {  Content } = Layout;

export default class SignIn extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <>
        <Layout style={{margin:"auto"}} className="layout-default layout-signin">
          <Content className="signin">
            <Row gutter={[24, 0]} justify="space-around">
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
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  layout="vertical"
                  className="row-col"
                >
                  <Form.Item
                    className="username"
                    label="Login"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos logini kiriting!",
                      },
                    ]}
                  >
                    <Input placeholder="Login" />
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
                    <Input placeholder="Password" />
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
                <img src="https://www.prokuratura.uz/img/ill/mib_mini.png" alt="" />
              </Col>
            </Row>
          </Content>
        </Layout>
      </>
    );
  }
}
