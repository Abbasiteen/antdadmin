import { Button, Col, Row, Table } from 'antd'
import axios from 'axios'
import React, { Component } from 'react'
import { url } from '../host/host'
// import "react-bootstrap"
import "./RoomsTable.css"


export default class RoomsTable extends Component {
     state ={
         rooms: []

     }


    getRooms = () =>{
      
        var now = new Date();
        var month = (now.getMonth() + 1);
        var day = now.getDate();
        // if (month < 10) {
        //     month = "0" + month;
        // }
        // if (day < 10) {
        //     day = "0" + day;
        // }
        var today = month + '-' + day + '-' + now.getFullYear();
        axios.get(`${url}/room/set/${today}`).then(res=>{
        this.setState({rooms: res.data})
        console.log(res.data)
    })
    }

    componentDidMount(){
        this.getRooms()
    }
    render() {
    
            const columns = [

                {
                    title: "№",
                    width: "5%",
                    dataIndex: "key",
                },
                {
                    title: "F.I.O",
                    width: "10%",
                    dataIndex: "username",
                },
                {
                    title: "Telefon raqami",
                    key: "telNumber",
                    width: "10%",
                    dataIndex: "telNumber",
                    sorter: (a, b) => a.age.length - b.age.length,
                    sortDirections: ['descend', 'ascend']
                },
                {
                    title: "Boshlanish sanasi",
                    key: "StartDate",
                    width: "10%",
                    dataIndex: "",
                },
                {
                    title: "Necha kungaligi",
                    key: "stay",
                    width: "5%",
                    dataIndex: "stay",
                },
                {
                    title: "Kunlik to'lov miqdori(so'mda)",
                    key: "pay",
                    width: "5%",
                    dataIndex: "daily",
                    sorter: (a, b) => a.dedline.length - b.dedline.length,
                    sortDirections: ['descend', 'ascend']
                },
                {
                    title: "Qilingan to'lov miqdori",
                    key: "money",
                    width: "5%",
                    dataIndex: "money",
                    sorter: (a, b) => a.dedline.length - b.dedline.length,
                    sortDirections: ['descend', 'ascend']
                },
                {
                    title: "Umumiy to'lov miqdori",
                    key: "dedline",
                    width: "5%",
                    dataIndex: "dedline",
                    sorter: (a, b) => a.dedline.length - b.dedline.length,
                    sortDirections: ['descend', 'ascend']
                },
            

                // {
                //     title: "Comment",
                //     key: "dedline",
                //     width: "14%",
                //     render: (_, record) => {
                //         return <div><Button style={{ marginRight: '10px' }} onClick={() => { this.openComent(record.id) }} type="primary">Push Coment</Button></div>
                //     }
                // },

                // {
                //     title: "action",
                //     key: "employed",
                //     width: "15%",
                //     render: (_, record) => {
                //         return <div>
                //             <Button style={{ marginRight: '10px' }} onClick={() => { this.openPush() }} type="primary">Edit</Button>
                //             <Button onClick={() => { this.DeleteData(record.id) }} type="primary" danger>
                //                 Delete
                //             </Button>
                //         </div>
                //     }
                // },

            ];
        return (
            <>
                <div className='RoomsTable'>
                    <Row>
                        <Col md="4">
                            <h3>Buyurmalar</h3>
                        </Col>
                    </Row>
                
                    <Row>
                      
                      { this.state.rooms.map((item)=>(
                        <Col span={24}>
                          <h2>{item.number}</h2>
                              <Table
                                  columns={columns}
                                  dataSource={item.persons}
                                  pagination={false}
                                  className="ant-border-space"
                              />
                            
                
                            
                          </Col>
                      )) }
                    
                          
                            
                           
                           
                            
                           
                            
                           
                    
                       
                    </Row>
                    {/* <table className='TableRooms'>
                        <thead>
                            <tr>
                                <th className='th1'>№</th>
                                <th className='th2'>F.I.O</th>
                                <th className='th3'>Telefon raqami</th>
                                <th className='th4'>Boshlanish sanasi</th>
                                <th className='th5'>Necha kungaligi</th>
                                <th className='th6'>Kunlik to'lov miqdori(so'mda)</th>
                                <th className='th7'>Qilingan to'lov miqdori</th>
                                <th className='th8'>Umumiy to'lov miqdori</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
            </>
        )
    }
}
