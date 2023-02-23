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
  CloseOutlined,
  ToTopOutlined
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
    loading: true,
    price: []
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

  getPrice = () => {
    axios.get("https://klinika.onrender.com/price")
      .then(res => {
        this.setState({ price: res.data })
      })
      .catch(err => {
        window.location.reload()
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

  postOperator = () => {
    var postForm = new FormData()
    postForm.append("name", document.querySelector("#name2").value)
    postForm.append("surname", document.querySelector("#surname2").value)
    postForm.append("email", document.querySelector("#email2").value)
    postForm.append("password", document.querySelector("#password2").value)
    postForm.append("telNumber", document.querySelector("#tel2").value)

    axios.post("https://klinika.onrender.com/operator", postForm)
      .then(res => {
        alert("Operator Qo'shildi")
        window.location.reload()
      })
      .catch(err => {
        alert("Operator Qo'shilmadi")
        console.log(err);
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
  openModal2 = () => {
    document.querySelector(".Modal10").style = "display: block"
  }
  closeModal2 = () => {
    document.querySelector(".Modal10").style = "display: none"
  }
  editPriceModal = (id) => {
    document.querySelector(".modal0").style = "display: block"
    document.querySelector("#PriceID").value = id
  }
  closeModal0 = () => {
    document.querySelector(".modal0").style = "display: none"
  }
  editPrice = () => {
    const ID = document.querySelector("#PriceID").value
    var newData4 = new FormData()
    newData4.append("price", document.querySelector("#Price").value)
    axios.put(`https://klinika.onrender.com/price/${ID}`, newData4)
    .then(res => {
      alert("O'zgartirildi")
      window.location.reload()
    })
    .catch(err => {
      alert("xato")
    }) 
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
    this.getPrice()
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

        <div className="Modal10">
          <CloseOutlined style={{ color: "#fff", fontSize: "26px", position: 'absolute', top: 10, right: 20, cursor: "pointer" }} onClick={this.closeModal2} />
          <Form
            layout="vertical"
            autoComplete="off"
          >
            <h4>Ismi</h4>
            <Input placeholder="Name" id="name2" />
            <h4>Familiya</h4>
            <Input placeholder="Familiya" id="surname2" />
            <h4>Email</h4>
            <Input placeholder="Email" id="email2" />
            <h4>Parol</h4>
            <Input placeholder="Parol" id="password2" />
            <h4>Telefon Raqami</h4>
            <Input placeholder="Telefon Raqami" id="tel2" />
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit" style={{ marginTop: 50 }} onClick={this.postOperator}>
                  Qo'shish
                </Button>
              </Space>
            </Form.Item>
          </Form>

        </div>

        <div className="modal0">
          <CloseOutlined style={{ color: "#fff", fontSize: "26px", position: 'absolute', top: 10, right: 20, cursor: "pointer" }} onClick={this.closeModal0} />
          <h4>Id</h4>
          <Input disabled id="PriceID" />
          <h4>Kunlik Narxi</h4>
          <Input placeholder="Narxi" type="number" id="Price" />
          <Button type="primary" htmlType="submit" style={{ marginTop: 50 }} onClick={this.editPrice}>
            Tahrirlash
          </Button>
        </div>

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
                  Tahrirlash
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
                <Space wrap>
                  <Avatar size={40}
                    style={{
                      backgroundColor: '#87d068',
                    }}
                    icon={<UserOutlined />}
                  />
                  <h2 className="font-semibold m-0">
                    {
                      JSON.parse(sessionStorage.getItem("poster")).poster
                    }
                  </h2>
                </Space>

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
                {
                  this.state.price.map(item => {
                    return (<Space ><p>Kunlik Narx: {item.price}<EditOutlined onClick={() => { this.editPriceModal(item.id) }} style={{ color: "#52c41a", marginLeft: 20, cursor: "pointer" }} /></p></Space>)
                  })
                }
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


              {
                this.state.data.map(item => {
                  const name = JSON.parse(sessionStorage.getItem("poster")).poster
                  if (name === item.name) {
                    return (<Descriptions title="Oliver Liam">
                      <Descriptions.Item label="Ismi" span={3}>
                        {item.name}
                      </Descriptions.Item>
                      <Descriptions.Item label="Familiyasi" span={3}>
                        {item.surname}
                      </Descriptions.Item>
                      <Descriptions.Item label="Telefon Raqami" span={3}>
                        {item.telNumber}
                      </Descriptions.Item>
                      <Descriptions.Item label="Email" span={3}>
                        {item.email}
                      </Descriptions.Item>
                      <Descriptions.Item label="categoriya" span={3}>
                        {item.category}
                      </Descriptions.Item>
                    </Descriptions>)
                  }
                })
              }




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
                )
              }
            </Card>
            <div className="uploadfile pb-15 shadow-none">
              <Button
                onClick={this.openModal2}
                className="ant-full-box" id="addBtn"
                icon={<ToTopOutlined />}
              >
                Operator Qo'shish
              </Button>
            </div>
          </Col>
        </Row>
      </>
    )
  }
}
