import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Spin,
  Space
} from "antd";
import axios from "axios";
import React, { Component } from 'react'



const columns = [
  {
    title: "Ismi",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "Sanasi",
    dataIndex: "day",
    key: "day",
  },
  {
    title: "Vaqti",
    key: "hour",
    dataIndex: "hour",
  },
  {
    title: "Pages",
    key: "pages",
    dataIndex: "pages",
  },
];


export default class Billing extends Component {
  state = {
    data: [],
    loading: true
  }
  getData = () => {
    axios.get("https://klinika.onrender.com/history")
      .then(res => {
        this.setState({ data: res.data })
      })
      .catch((err) => {
        console.log(err);
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
                title="Projects Table1"
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
