import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import React, { Component } from 'react'
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Main from "./components/layout/Main";
import 'antd/dist/antd.min.css'
import "./assets/styles/main.css";
import Persons from './pages/Persons'
import "./assets/styles/responsive.css";
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
} from "antd";
import axios from "axios";

function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const { Title } = Typography;
const { Content } = Layout;



export default class componentName extends Component {
  state = {
    token: localStorage.getItem("token11")
  }


  postLogin = () => {
    var formdata = new FormData()
    formdata.append("username", document.querySelector("#nickname").value)
    formdata.append("password", document.querySelector("#password").value)
var dd= new FormData()
    var block = document.querySelector("#nickname").value
    localStorage.setItem("poster",JSON.stringify({"poster":block}))
    dd.append("name",block)
    dd.append("pages","/login")
    axios.post("https://klinika.onrender.com/login", formdata).then(res => {
      console.log(res.data);
      this.setState({ token: res.data })
      localStorage.setItem("token11", res.data)
      axios.post("https://klinika.onrender.com/history",dd)
    }).catch(err=>{
      alert("Parol xato terildi")
    })
  }


  render() {
    return (
      <div>
        {this.state.token ? (<Switch>
          <Main>
            <Route path="/nazorat" exact component={SignUp} />
            <Route exact path="/" component={Home} />
            <Route exact path="/ishlar" component={Tables} />
            <Route exact path="/turlar" component={Billing} />
            <Route exact path="/odamlar" component={Persons} />
            <Route exact path="/profile" component={Profile} />
          </Main>
        </Switch>) : (
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
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          style={{ width: "100%" }}
                          onClick={() => { this.postLogin() }}
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

        )}

      </div>
    )
  }
}
