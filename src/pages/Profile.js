import {
  Row,
  Col,
  Card,
  Button,
  Descriptions,
  Avatar,
  Radio,
  Space,
  Spin,
  Table,
  Input,
  Form,
} from "antd";

import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  UserOutlined,
  EditOutlined,
  DeleteOutlined,
  CloseOutlined
} from "@ant-design/icons";

import React, { Component } from 'react'
import BgProfile from "../assets/images/bg-profile.jpg";
import profilavatar from "../assets/images/face-1.jpg";
import "../assets/styles/All.css"
import axios from "axios";

const pencil = [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
      className="fill-gray-7"
    ></path>
    <path
      d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
      className="fill-gray-7"
    ></path>
  </svg>,
];


export default class Profile extends Component {
  state = {
    data: [],
    loading: true
  }
  getData = () => {
    axios.get("https://klinika.onrender.com/operator")
      .then(res => {
        this.setState({ data: res.data })
      })
      .catch(err => {
        window.location.reload()
      })
      .finally(() => {
        this.setState({ loading: false })
      })
  }

  deleteData = (id) => {
    axios.delete(`https://klinika.onrender.com/operator/${id}`)
      .then(res => {
        alert("Operator O'chirildi")
        window.location.reload()
      })
      .catch((err) => {
        alert("Operator O'chirilmadi")
      })
  }

  editOpenModal = (id, name, surname, password, tel, email) => {
    document.querySelector(".editModal2").style = "display:block"
    document.querySelector("#Id").value = id
    document.querySelector("#name").value = name
    document.querySelector("#surname").value = surname
    document.querySelector("#password").value = password
    document.querySelector("#tel").value = tel
    document.querySelector("#email").value = email
  }
  closeEdit = () => {
    document.querySelector(".editModal2").style = "display:none"
  }

  editData = () => {
    const ID = document.querySelector("#Id").value
    var newData = new FormData()
    newData.append("name", document.querySelector("#name").value)
    newData.append("surname", document.querySelector("#surname").value)
    newData.append("password", document.querySelector("#password").value)
    newData.append("telNumber", document.querySelector("#tel").value)
    newData.append("email", document.querySelector("#email").value)
    axios.put(`https://klinika.onrender.com/operator/${ID}`, newData)
      .then(res => {
        alert('Operator Tahrirlandi')
        window.location.reload()
      })
      .catch((err) => {
        alert('Operator Tahrirlanmadi')
      })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const columns = [
      {
        title: "Ismi",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Familiyasi",
        dataIndex: "surname",
        key: "surname",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Paroli",
        dataIndex: "password",
        key: "password",
      },
      {
        title: "Telefon Raqami",
        dataIndex: "telNumber",
        key: "telNumber",
      },
      {
        title: "action",
        key: "employed",
        render: (text, record) => { return <Space><EditOutlined onClick={() => { this.editOpenModal(record.id, record.name, record.surname, record.password, record.telNumber, record.email) }} style={{ color: "#52c41a", marginLeft: 20, cursor: "pointer" }} /><DeleteOutlined onClick={() => { this.deleteData(record.id) }} style={{ color: "#f5222d", marginLeft: 20, cursor: "pointer" }} /></Space> }
      },
    ];
    return (
      <>
        <div className="editModal2">
          <CloseOutlined style={{ color: "#fff", fontSize: "26px", position: 'absolute', top: 10, right: 20, cursor: "pointer" }} onClick={this.closeEdit} />
          <Form
            layout="vertical"
            autoComplete="off"
          >
            <h4>Id</h4>
            <Input disabled id="Id" />
            <h4>Ismi</h4>
            <Input placeholder="Name" id="name" />
            <h4>Familiya</h4>
            <Input placeholder="Familiya" id="surname" />
            <h4>Email</h4>
            <Input placeholder="Email" id="email" />
            <h4>Parol</h4>
            <Input placeholder="Parol" id="password" />
            <h4>Telefon Raqami</h4>
            <Input placeholder="Telefon Raqami" id="tel" />
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit" style={{ marginTop: 50 }} onClick={this.editData}>
                  Submit
                </Button>
              </Space>
            </Form.Item>
          </Form>

        </div>
        <div
          className="profile-nav-bg"
          style={{ backgroundImage: "url(" + BgProfile + ")" }}
        ></div>

        <Card
          className="card-profile-head"
          bodyStyle={{ display: "none" }}
          title={
            <Row justify="space-between" align="middle" gutter={[24, 0]}>
              <Col span={24} md={12} className="col-info">
                <Avatar.Group>
                  <Avatar size={74} shape="square" src={profilavatar} />

                  <div className="avatar-info">
                    <h4 className="font-semibold m-0">Sarah Jacob</h4>
                    <p>CEO / Co-Founder</p>
                  </div>
                </Avatar.Group>
              </Col>
              <Col
                span={24}
                md={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Radio.Group defaultValue="a">
                  <Radio.Button value="a">OVERVIEW</Radio.Button>
                  <Radio.Button value="b">TEAMS</Radio.Button>
                  <Radio.Button value="c">PROJECTS</Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
          }
        ></Card>

        <Row gutter={[24, 0]}>
          <Col span={24} md={8} className="mb-24">
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Profile Information</h6>}
              className="header-solid h-full card-profile-information"
              extra={<Button type="link">{pencil}</Button>}
              bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
            >
              <p className="text-dark">
                {" "}
                Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer
                is no. If two equally difficult paths, choose the one more painful
                in the short term (pain avoidance is creating an illusion of
                equality).{" "}
              </p>
              <hr className="my-25" />
              <Descriptions title="Oliver Liam">
                <Descriptions.Item label="Full Name" span={3}>
                  Sarah Emily Jacob
                </Descriptions.Item>
                <Descriptions.Item label="Mobile" span={3}>
                  (44) 123 1234 123
                </Descriptions.Item>
                <Descriptions.Item label="Email" span={3}>
                  sarahjacob@mail.com
                </Descriptions.Item>
                <Descriptions.Item label="Location" span={3}>
                  USA
                </Descriptions.Item>
                <Descriptions.Item label="Social" span={3}>
                  <a href="#pablo" className="mx-5 px-5">
                    {<TwitterOutlined />}
                  </a>
                  <a href="#pablo" className="mx-5 px-5">
                    {<FacebookOutlined style={{ color: "#344e86" }} />}
                  </a>
                  <a href="#pablo" className="mx-5 px-5">
                    {<InstagramOutlined style={{ color: "#e1306c" }} />}
                  </a>
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
          <Col style={{ width: "60%" }} className="mb-28">
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Conversations</h6>}
              className="header-solid h-full"
              bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
            >
              {
                this.state.loading === true ? (
                  <Space style={{ display: "flex", justifyContent: "center", height: "200px", alignItems: "center", width: "100%" }}>
                    <Spin tip="Loading" size="large"></Spin>
                  </Space>
                ) : (
                  <Table
                    columns={columns}
                    dataSource={this.state.data}
                    pagination={false}
                    className="ant-border-space"
                  />
                  /* <List
                    itemLayout="horizontal"
                    dataSource={this.state.data}
                    split={false}
                    className="conversations-list"
                    renderItem={(item) => (
                      <List.Item actions={[<Button type="link">REPLY</Button>]}>
                        <List.Item.Meta
                          avatar={
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                          }
                          title={item.name}
                          description={item.surname}
                        />
                        <List.Item.Meta
                          title={item.name}
                          description={item.surname}
                        />
                      </List.Item>
                    )}
                  /> */
                )
              }
            </Card>
          </Col>
        </Row>
      </>
    )
  }
}
