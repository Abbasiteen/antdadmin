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
  getRoom = () => {
    axios.get("https://klinika.onrender.com/room")
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

  deleteRoom = (id) => {
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
      this.getRoom()
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
  openCreate = () => {
    document.querySelector(".modal5").style = "display: flex"
  }
  closeCreate = () => {
    document.querySelector(".modal5").style = "display: none"
  }

  componentDidMount() {
    this.getRoom()
  }
  render() {
    const columns = [
      {
        title: "Xona Raqami",
        dataIndex: "number",
        key: "number",
        width: "30%",
      },
      {
        title: "Odam soni",
        dataIndex: "limit",
        key: "limit",
        width: "30%",
      },
      {
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => { return <Space><EditOutlined onClick={() => this.openEdit(record.id)} style={{ color: "#52c41a", marginLeft: 20, cursor: "pointer" }} /><DeleteOutlined onClick={() => { this.deleteRoom(record.id) }} style={{ color: "#f5222d", marginLeft: 20, cursor: "pointer" }} /></Space> }
      },
    ];
    return (
      <div>

        <div className="modal5">
          <CloseOutlined style={{ fontSize: "26px", position: 'absolute', top: 20, right: 20, cursor: "pointer", color: "#fff !important" }} onClick={this.closeCreate} />
        </div>

        <div className="modal4">
          <CloseOutlined style={{ fontSize: "26px", position: 'absolute', top: 20, right: 20, cursor: "pointer", color: "#fff !important" }} onClick={this.closeEdit} />
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
                    onClick={this.openCreate}
                    className="ant-full-box" id="addBtn"
                    icon={<ToTopOutlined />}
                  >
                    Xona Qo'shish
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
