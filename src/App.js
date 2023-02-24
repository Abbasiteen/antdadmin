import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import React, { Component } from 'react'
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Main from "./components/layout/Main";
import RoomsTable from "./pages/RoomsTable";
import 'antd/dist/antd.min.css'
import "./assets/styles/main.css";
import "./assets/styles/new.css";
import Analiz from "./pages/Analiz"

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
import Dedline from "./pages/Dedline";

// function onChange(checked) {
//   console.log(`switch to ${checked}`);
// }
const { Title } = Typography;
const { Content } = Layout;



export default class componentName extends Component {
  state = {
    token: sessionStorage.getItem("token11"),
    loader:true
  }

  addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
  }
  postLogin = () => {
    const d = new Date();
    var now = new Date();
    var month = (now.getMonth() + 1);
    var day = now.getDate();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    var today = month + '-' + day + '-' + now.getFullYear();

    let h = this.addZero(d.getHours());
    let m = this.addZero(d.getMinutes());
    let s = this.addZero(d.getSeconds());
    let time = h + ":" + m + ":" + s;
    var formdata = new FormData()
    formdata.append("username", document.querySelector("#nickname").value)
    formdata.append("password", document.querySelector("#password").value)
    
    var dd= new FormData()
    dd.append("day",today )
    dd.append("hour",time )
    var block = document.querySelector("#nickname").value
    sessionStorage.setItem("poster",JSON.stringify({"poster":block}))
    dd.append("name",block)
    dd.append("page","login")
    axios.post("https://klinika.onrender.com/login", formdata).then(res => {
      console.log(res.data);
      this.setState({ token: res.data })
      sessionStorage.setItem("token11", res.data)
   
      axios.post("https://klinika.onrender.com/history",dd)
    }).catch(err=>{
      alert("Parol xato terildi")
    })
  }
componentDidMount(){
  setTimeout(() => {
    this.setState({ loader: false })
  }, 5000);
}

  render() {
    return (
      <div>
        {this.state.token ? (<Switch>
         
         {this.state.loader?(
            <main className="abas11">
              <div className="preloader">
                <div className="preloader__square"></div>
                <div className="preloader__square"></div>
                <div className="preloader__square"></div>
                <div className="preloader__square"></div>
              </div>
              <div className="status">Loading<span className="status__dot">.</span><span className="status__dot">.</span><span className="status__dot">.</span></div>
            </main>
         ):(<Main>
            <Route path="/nazorat" exact component={SignUp} />
            <Route exact path="/" component={Home} />
              <Route exact path="/ishlar" component={Tables} />
              <Route exact path="/dedline" component={Dedline} />
              <Route exact path="/analiz" component={Analiz} />
            <Route exact path="/comment" component={Billing} />
            <Route exact path="/xonalar" component={Persons} />
            <Route exact path="/buyurtma" component={RoomsTable} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/dashboard" component={Home} />
          </Main>)}
       
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
