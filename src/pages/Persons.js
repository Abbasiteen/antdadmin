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
  Input
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
        window.location.reload()
        console.log(err)
      })
      .finally(() => {
        this.setState({ loading: false })
      })
  }

  postRoom = () => {
    var formData = new FormData()
    formData.append("number", document.querySelector("#Roominp1").value)
    formData.append("limit", document.querySelector("#Roominp2").value)
    axios.post("https://klinika.onrender.com/room", formData)
    .then((res) => {
      alert("Xona Qo'shildi")
      window.location.reload()
    })
    .catch(err => {
      alert("xona Qo'shilmadi")
    })
  }

  deleteRoom = (id) => {
    axios.delete(`https://klinika.onrender.com/room/${id}`).then(res => {
      alert("O'chirildi")
      window.location.reload()
    }).catch(err => {
      console.log(err);
    })
  }

  editRoom = () => {
    const ID = document.querySelector("#RoomID").value
    const formdata = new FormData()
    formdata.append("number", document.querySelector("#RoomInp3").value)
    formdata.append("limit", document.querySelector("#RoomInp4").value)

    axios.put(`https://klinika.onrender.com/room/${ID}`, formdata).then(res => {
      alert("Xona Tahrirlandi")
      window.location.reload()
    }).catch(err => {
      alert("Xona Tahrirlanmadi")
    })
  }
  openEdit = (id, num, limit) => {
    document.querySelector(".modal4").style = "display: block"
    document.querySelector("#RoomID").value = id
    document.querySelector("#RoomInp3").value = num
    document.querySelector("#RoomInp4").value = limit
  }
  closeEdit = () => {
    document.querySelector(".modal4").style = "display: none"
  }
  openCreate = () => {
    document.querySelector(".modal5").style = "display: block"
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
        render: (text, record) => { return <Space><EditOutlined onClick={() => this.openEdit(record.id, record.number, record.limit)} style={{ color: "#52c41a", marginLeft: 20, cursor: "pointer" }} /><DeleteOutlined onClick={() => { this.deleteRoom(record.id) }} style={{ color: "#f5222d", marginLeft: 20, cursor: "pointer" }} /></Space> }
      },
    ];
    return (
      <div>

        <div className="modal5">
          <h4 className="Room_text">Xona Raqami</h4>
          <Input placeholder="Xona Raqami" type="number" id="Roominp1" />
          <h4 className="Room_text">Odam Soni</h4>
          <Input placeholder="Odam Soni" id="Roominp2" />
          <CloseOutlined className="close_modal" style={{ fontSize: "26px", position: 'absolute', top: 20, right: 20, cursor: "pointer"}} onClick={this.closeCreate} />
          <Button type="primary" typeof="submit" htmlType="submit" onClick={this.postRoom}>
            Qo'shish
          </Button>
        </div>

        <div className="modal4">
          <h4 className="Room_text">ID</h4>
          <Input disabled id="RoomID" />
          <h4 className="Room_text">Xona Raqami</h4>
          <Input placeholder="Xona Raqami" type="number" id="RoomInp3" />
          <h4 className="Room_text">Odam Soni</h4>
          <Input placeholder="Odam Soni" id="RoomInp4" />
          <Button type="primary" typeof="submit" htmlType="submit" onClick={this.editRoom}>
            Tahrirlash
          </Button>
          <CloseOutlined style={{ fontSize: "26px", position: 'absolute', top: 20, right: 20, cursor: "pointer", color: "#fff !important" }} onClick={this.closeEdit} />
        </div>

        <div className="tabled">
          <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
              <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="Xonalar Jadvali"
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
