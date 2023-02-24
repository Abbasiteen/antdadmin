import { Button, Col, Input, Modal, Row, Table } from 'antd'
import axios from 'axios'
import React, { Component } from 'react'
import { url } from '../host/host'
// import "react-bootstrap"
import "./RoomsTable.css"


export default class RoomsTable extends Component {
     state ={
         rooms: [],
         isModalOpen: false

     }

    showModal = () => {
       document.querySelector(".ModalRoomstable").style ="right: 0"
    };
    closeModal = () => {
        document.querySelector(".ModalRoomstable").style = "right: -100%"
    };
   



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
                    width: "2%",
                    dataIndex: "key",
                },
                {
                    title: "F.I.O",
                    width: "10%",
                    dataIndex: "username",
                },
                {
                    title: "Telefon",
                    key: "telNumber",
                    width: "10%",
                    dataIndex: "telNumber",
                    sorter: (a, b) => a.age.length - b.age.length,
                    sortDirections: ['descend', 'ascend']
                },
                {
                    title: "sanasi",
                    key: "StartDate",
                    width: "5%",
                    dataIndex: "",
                },
                {
                    title: "kun",
                    key: "stay",
                    width: "5%",
                    dataIndex: "stay",
                },
                {
                    title: "Kunlik",
                    key: "pay",
                    width: "5%",
                    dataIndex: "daily",
                  
                },
                {
                    title: "to'lov",
                    key: "money",
                    width: "5%",
                    dataIndex: "money",
                  
                },
                {
                    title: "Umumiy",
                    key: "dedline",
                    width: "5%",
                    dataIndex: "dedline",
                
                },
            

                {
                    title: "Edit",
                    key: "edit",
                    width: "5%",
                    render: () => {
                        return <div><Button style={{background:'orange',color:'white'}} type="text">Edit</Button></div>
                    }
                },
                {
                    title: "Delete",
                    key: "delete",
                    width: "5%",
                    render: () => {
                        return <div><Button type="danger">O'chirish</Button></div>
                    }
                },

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

                    <div className='ModalRoomstable'>
                       <div className='ModalCard'>
                        <h2>Hello world</h2>
                        <Input type='text' className='InputTable' placeholder='text' />
                        <Input type='text' className='InputTable' placeholder='text' />
                        <Input type='text' className='InputTable' placeholder='text' />
                        <div className="BtnModal">
                                <Button type='danger' onClick={() => { this.closeModal() }}>Yopish</Button>
                        </div>
                        </div>
                    </div>
                   
                    <Row>
                        <Col md="4">
                            <h3>Buyurtmalar</h3>
                        </Col>
                    </Row>
                
                    <Row className="ScrollTable">
                      
                      { this.state.rooms.map((item)=>(
                        <div className="RoomBlock">
                              <div className='BlockTop'> <h2>Xona raqami: {item.number}</h2>
                                  <Button type="primary" onClick={()=> {this.showModal()}}>Odam qo'shish</Button>
                                  <Button type="primary">Odam qo'shish</Button>
                                </div>
                                  
                              
                              <Table
                                  columns={columns}
                                  dataSource={item.persons}
                                  pagination={false}
                                  className="ant-border-space"
                              />
                            
                              

                          </div>
                            
                          
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
