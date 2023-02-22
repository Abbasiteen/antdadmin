import { ToTopOutlined } from "@ant-design/icons";
import axios from "axios";

import React, { Component } from 'react'
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Button,
  Spin,
  Space,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CloseOutlined 
} from "@ant-design/icons";

import "../assets/styles/All.css"






export default class Persons extends Component {
  state = {
    data: [],
    loading: true,
    isModalOpen: false
  }
  getPersons = () => {
    axios.get("https://klinika.onrender.com/users")
      .then(res => {
        this.setState({ data: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        this.setState({ loading: false })
      })
  }

  deletePerson = (id) => {
    axios.delete(`https://klinika.onrender.com/users/${id}`).then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  }

  putPersons = (id) => {
    const formdata = new FormData()
    formdata.append("UserName", "Abbas2")

    axios.put(`https://prokror.onrender.com/works/person/${id}`, formdata).then(res => {
      console.log('edited');
      this.getPersons()
    }).catch(err => {
      console.log("err");
      console.log(err);
    })
  }
  openEdit = (id) => {
    document.querySelector(".modal4").style = "display: flex"
  }
  closeEdit = () => {
    document.querySelector(".modal4").style = "display: none"
  }

  componentDidMount() {
    this.getPersons()
  }
  render() {
    const columns = [
      {
        title: "Ism",
        dataIndex: "username",
        key: "function",
        width: "15%",
      },
      {
        title: "Familiyasi",
        dataIndex: "surname",
        key: "function",
      },

      {
        title: "Yoshi",
        key: "age",
        dataIndex: "age",
      },
      {
        title: "Telefon Raqami",
        key: "telNumber",
        dataIndex: "telNumber",
      },
      {
        title: "Dedline",
        dataIndex: "dedline",
        key: "dedline",
      },
      {
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => { return <Space><EditOutlined onClick={() => this.openEdit(record.id)} style={{ color: "#52c41a", marginLeft: 20, cursor: "pointer" }} /><DeleteOutlined onClick={() => { this.deletePerson(record.id) }} style={{ color: "#f5222d", marginLeft: 20, cursor: "pointer" }} /></Space> }
      },
    ];
    return (
      <div>

        <div className="modal4">
          <CloseOutlined style={{ color: "#fff", fontSize: "26px", position: 'absolute', top: 20, right: 20, cursor: "pointer" }} onClick={this.closeEdit} />
        </div>

        <div className="tabled">
          <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
              <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="Odamlar Jadvali"
              >
                <div className="table-responsive">
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
                </div>
                <div className="uploadfile pb-15 shadow-none">
                  <Button
                    className="ant-full-box" id="addBtn"
                    icon={<ToTopOutlined />}
                  >
                    Odam Qo'shish
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
