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
  Modal
} from "antd";
import { ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import face from "../assets/images/face-1.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";
import pencil from "../assets/images/pencil.svg";
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
    loading: true,
    isModalOpen: false
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

  componentDidMount() {
    this.getData()
  }
  render() {
    return (
      <>

        <div className="tabled">
          <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
              <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="Projects Table"
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
                  <Button
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
