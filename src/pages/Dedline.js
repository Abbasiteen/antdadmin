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


export default class Dedline extends Component {
    state = {
        data: [],
        loading: true,
        isModalOpen: false
    }
    getDedline = () => {
        axios.get("http://nodejs.abbas.uz/dedline")
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

    deleteDedline = (id) => {
        axios.post(`http://nodejs.abbas.uz/dedline/${id}`).then(res => {
            alert("O'chirildi")
            window.location.reload()
        }).catch(err => {
            console.log(err);
        })
    }

    editDedline = () => {
        const ID = document.querySelector("#DedId").value
        const formdata = new FormData()
        formdata.append("dedline", document.querySelector("#DedInp1").value)

        axios.put(`http://nodejs.abbas.uz/dedline/${ID}`, formdata).then(res => {
            alert("Tahrirlandi")
            window.location.reload()
        }).catch(err => {
            alert("Tahrirlanmadi")
        })
    }
    openEdit = (id, ded) => {
        document.querySelector(".modal4").style = "display: block"
        document.querySelector("#DedId").value = id
        document.querySelector("#DedInp1").value = ded
    }
    closeEdit = () => {
        document.querySelector(".modal4").style = "display: none"
    }

    componentDidMount() {
        this.getDedline()
    }
    render() {
        const columns = [
            {
                title: "Username",
                dataIndex: "username",
                key: "username"
            },
            {
                title: "Surname",
                dataIndex: "surname",
                key: "surname"
            },
            {
                title: "telNumber",
                dataIndex: "telNumber",
                key: "telNumber"
            },
            {
                title: "dedline",
                dataIndex: "dedline",
                key: "dedline"
            },
            {
                title: "finishday",
                dataIndex: "finishday",
                key: "finishday"
            },
 {
                title: "allmessage",
                dataIndex: "dedline",
                key: "dedline",
                render: (_, record)=>{
                  return  record.comment.map(item=>(
                        <div>{item.message + `\u000B`}{item.date + `\u000B`}{item.poster}</div>
                ))}
            },
            {
                title: "Action",
                dataIndex: "Action",
                render: (text, record) => { return <Space>
                <EditOutlined onClick={() => this.openEdit(record.id, record.dedline)} style={{ color: "#52c41a", marginLeft: 20, cursor: "pointer" }} />
                <DeleteOutlined onClick={() => { this.deleteDedline(record.id) }} style={{ color: "#f5222d", marginLeft: 20, cursor: "pointer" }} /></Space> }
            },
        ];
        return (
            <div>

                <div className="modal4">
                    <h4 className="Room_text">ID</h4>
                    <Input disabled id="DedId" />
                    <h4 className="Room_text">Dedline</h4>
                    <Input type="date" id="DedInp1" />
                    <Button type="primary" typeof="submit" htmlType="submit" onClick={this.editDedline}>
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
                                title="Aloqa Jadvali"
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
            </div>
        )
    }
}
