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
    CloseOutlined,
    DownloadOutlined,
} from "@ant-design/icons";

import "../assets/styles/All.css"
import { url } from "../host/host";






export default class Persons extends Component {
    state = {
        data: [],
        loading: true
    }
    getAnaliz = () => {
        axios.get("https://klinika.onrender.com/users/analiz")
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

    deleteAnaliz = (id) => {
        axios.delete(`https://klinika.onrender.com/users/analiz/${id}`).then(res => {
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
    downloadFile = (id) => {
        axios
            .request({
                url: `https://klinika.onrender.com/analizDownload/${id}`,
                method: "GET"
            })

            .then((res) => {
                const downloadUrl = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.setAttribute('download', res.data);
                document.body.appendChild(link);
                link.click();
                link.remove();
            });
    }

    componentDidMount() {
        this.getAnaliz()
    }
    render() {
        const columns = [
            {
                title: "Ismi",
                dataIndex: "username",
                key: "username",
                width: "20%",
            },
            {
                title: "Familiyasi",
                dataIndex: "surname",
                key: "surname",
            },
            {
                title: "Analiz Nomi",
                dataIndex: "analizName",
                key: "analizName",
            },
            {
                title: "Analiz Fileni Yuklab Olish",
                dataIndex: "limit",
                render: (text, record) => {
                    return <Space wrap>

                        <a href={url + '/' + record.analizFile} >
                            <Button
                                type="primary"
                                icon={<DownloadOutlined style={{ fontSize: "15px", color: "#fff" }} />}
                            >
                                Yuklash
                            </Button></a>
                    </Space>
                }
            },
            {
                title: "Action",
                dataIndex: "Action",
                render: (text, record) => { return <Space><DeleteOutlined onClick={() => { this.deleteAnaliz(record.id) }} style={{ color: "#f5222d", marginLeft: 20, cursor: "pointer" }} /></Space> }
            },
        ];
        return (
            <div>

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
                                title="Analizlar Jadvali"
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
