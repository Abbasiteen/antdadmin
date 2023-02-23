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
import {
  CloseOutlined,
  ToTopOutlined,
  EditOutlined,
  DeleteOutlined
} from "@ant-design/icons"

import "../pages/table.css"
import axios from "axios";
import React, { Component } from 'react'








export default class Billing extends Component {
  state = {
    data: [],
    loading: true
  }
  getData = () => {
    axios.get("https://klinika.onrender.com/comment")
      .then(res => {
        this.setState({ data: res.data })
      })
      .catch((err) => {
      window.location.reload()
      })
      .finally(() => {
        this.setState({ loading: false })
      })
  }
  deleteComment = (Id) => {
    axios.delete(`https://prokror.onrender.com/comment/${Id}`)
      .then(res => {
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  editCommentModal = (Id) => {
    document.querySelector(".editModal").style = "display: flex"
    document.querySelector("#categoryInp3").value = Id
  }
  closeEditModal = () => {
    document.querySelector(".editModal").style = "display: none"
  }
  editComment = () => {
    const inp = document.querySelector("#categoryInp3").value
    var newForm = new FormData()
    newForm.append("CategoryName", document.querySelector("#categoryInp2").value)
    axios.put(`https://klinika.onrender.com/comment/${inp}`, newForm)
      .then(res => {
        alert("yuborildi")
        window.location.reload()
      }).catch(err=>{
        alert('xato')
      })
  }

  componentDidMount() {
    this.getData()
  }
  render() {
    const columns = [
      {
        title: "Comment",
        dataIndex: "message",
        key: "message",
        width: "32%",
      },
      {
        title: "Kim yuborgan",
        dataIndex: "poster",
        key: "poster",
      },
      {
        title: "Sanasi",
        dataIndex: "date",
        key: "date"
      },
      {
        title: "Vaqti",
        dataIndex: "hour",
        key: "hour",
      },
      {
        title: "action",
        key: "employed",
        render: (text, record) => { return <Space><DeleteOutlined onClick={() => { this.deleteComment(record.id) }} style={{ color: "#f5222d", marginLeft: 20, cursor: "pointer" }} /></Space> }
      },
    ];
    return (
      <>


        <div className="editModal">
          <Form
            layout="vertical"
            autoComplete="off"
          > 
            <CloseOutlined onClick={this.closeEditModal} className="close_modal2" />
            <Form.Item>
              <h4 className="category_text">ID</h4>
              <Input disabled id="categoryInp3" style={{ marginBottom: "20px", marginTop: "10px" }} />
              <h4 className="category_text">Comment</h4>
              <Input placeholder="Comment" id="categoryInp2" />
              <h4 className="category_text">Kim yuborgan</h4>
              <Input placeholder="Comment" id="categoryInp4" />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" typeof="submit" htmlType="submit" onClick={this.editComment}>
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

              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
