import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Button,
  Typography,
  Spin,
  Space,
  Form,
  message,
  Input
} from "antd";
import { ToTopOutlined } from "@ant-design/icons";
import { CloseOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";
import "../pages/table.css"
import axios from "axios";
import React, { Component } from 'react'
const { Title } = Typography;



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
    render: () => { return <div><Button danger>O'chirish</Button><Button style={{ border: "1px solid #52c41a", color: "#52c41a", marginLeft: "20px" }}>Tahrirlash</Button></div> }
  },
];

const project = [
  {
    title: "Categoriya Nomlari",
    dataIndex: "name",
    key: "CategoryName",
    width: "32%",
  },
  {
    title: "BUDGET",
    dataIndex: "age",
  },
  {
    title: "STATUS",
    dataIndex: "address",
  },
  {
    title: "COMPLETION",
    dataIndex: "completion",
  },
];


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
  }
  createModal = () => {
    document.querySelector(".createModal").style = "display: flex;"
  }
  close_modal = () => {
    document.querySelector(".createModal").style = "display: none;"
  }


  componentDidMount() {
    this.getData()
  }
  render() {
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
