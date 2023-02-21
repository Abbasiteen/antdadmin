import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Button,
 
  Spin,
  Space,
  Form,
  message,
  Input,

} from "antd";
import { ToTopOutlined } from "@ant-design/icons";
import { CloseOutlined } from "@ant-design/icons"

import "../pages/table.css"
import axios from "axios";
import React, { Component } from 'react'








export default class Billing extends Component {
  state = {
    data: [],
    loading: true
  }
  getData = () => {
    axios.get("https://prokror.onrender.com/category")
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
  onFinish = () => {
    message.success(`Categoriya qo'shildi!`);
  };
  onFinishFailed = () => {
    message.error('Submit failed!');
  };
  postCategory = () => {
    var newData = new FormData()
    newData.append("CategoryName", document.querySelector("#categoryInp").value)
    axios.post("https://prokror.onrender.com/category", newData)
      .then(res => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        document.querySelector("#categoryInp").value = ''
      })
  }
  createModal = () => {
    document.querySelector(".createModal").style = "display: flex;"
  }
  close_modal = () => {
    document.querySelector(".createModal").style = "display: none;"
  }
  deleteCategory = (Id) => {
    axios.delete(`https://prokror.onrender.com/category/${Id}`)
      .then(res => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  editCategoryModal = (Id) => {
    document.querySelector(".editModal").style = "display: flex"
    document.querySelector("#categoryInp3").value = Id
  }
  closeEditModal = () => {
    document.querySelector(".editModal").style = "display: none"
  }
  editCategory = () => {
    const inp = document.querySelector("#categoryInp3").value
    var newForm = new FormData()
    newForm.append("CategoryName", document.querySelector("#categoryInp2").value)
    axios.put(`https://prokror.onrender.com/category/${inp}`, newForm)
    .then(res => {
      console.log(res.data)
    })
  }

  componentDidMount() {
    this.getData()
  }
  render() {
    const columns = [
      {
        title: "Categoriya Nomlari",
        dataIndex: "CategoryName",
        key: "CategoryName",
        width: "32%",
      },
      {
        title: "FUNCTION",
        dataIndex: "function",
        key: "function",
      },

      {
        title: "STATUS",
        key: "status",
        render: (text, record) => {
          return (<div>{record.Object.length}</div>)
        }
      },
      {
        title: "action",
        key: "employed",
        render: (text, record) => { return <div><Button onClick={() => { this.deleteCategory(record.Id) }} danger>O'chirish</Button><Button onClick={() => { this.editCategoryModal(record.Id) }} style={{ border: "1px solid #52c41a", color: "#52c41a", marginLeft: "20px" }}>Tahrirlash</Button></div> }
      },
    ];
    return (
      <>

        <div className="createModal">
          <Form
            layout="vertical"
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
          >
            <CloseOutlined onClick={this.close_modal} className="close_modal2" />
            <Form.Item>
              <h4 className="category_text">Categoriya Nomi</h4>
              <Input placeholder="Categoriya nomini kiriting" id="categoryInp" />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" typeof="submit" htmlType="submit" onClick={this.postCategory}>
                  Qo'shish
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>

        <div className="editModal">
          <Form
            layout="vertical"
            autoComplete="off"
          >
            <CloseOutlined onClick={this.closeEditModal} className="close_modal2" />
            <Form.Item>
              <h4 className="category_text">Categoriya Nomi</h4>
              <Input disabled id="categoryInp3" style={{ marginBottom: "20px", marginTop: "10px" }} />
              <Input placeholder="Categoriya nomini kiriting" id="categoryInp2" />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" typeof="submit" htmlType="submit" onClick={this.editCategory}>
                  Tahrirlash
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>

        <div className="tabled">
          <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
              <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="Categoriya"
                extra={
                  <>
                    <Radio.Group defaultValue="all">
                      <Radio.Button value="all">All</Radio.Button>
                      <Radio.Button value="online">ONLINE</Radio.Button>
                      <Radio.Button value="store">STORES</Radio.Button>
                    </Radio.Group>
                  </>
                }
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
                  <Button onClick={this.createModal}
                    className="ant-full-box" id="addBtn"
                    icon={<ToTopOutlined />}
                  >
                    Categoriya Qo'shish
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
