import { Button, Col, Input, Modal, Row, Select, Table } from 'antd'
import axios from 'axios'
import React, { Component } from 'react'
import { url } from '../host/host'
// import "react-bootstrap"
import "./RoomsTable.css"


export default class RoomsTable extends Component {
     state ={
         rooms: [],
         isModalOpen: false,
         data:[]
     }
     getData=()=>{
        let headers = {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        }
        axios.get(`${url}/users`, headers).then(res=>{
          this.setState({data:res.data})
        }).catch(err=>{
          window.location.reload()
        })
      }

    showModal = () => {
       document.querySelector(".ModalRoomstable").style ="right: 0"
    };
    closeModal = () => {
        document.querySelector(".ModalRoomstable").style = "right: -100%"
    };
   

    handleChange = (value) => {
        console.log(`selected ${value}`);
      };

    getRooms = () =>{
      
        var now = new Date();
        var month = (now.getMonth() + 1);
        var day = now.getDate();
        var today = month + '-' + day + '-' + now.getFullYear();
        axios.get(`${url}/room/set/${today}`).then(res=>{
        this.setState({rooms: res.data})
        console.log(res.data)
    })
    }

    componentDidMount(){
        this.getRooms()
    this.getData()
    }

    render() {
    
            const columns = [
                {
                    title: "F.I.O",
                    width: "10%",
                    dataIndex: "username",
                },
                {
                    title: "sanasi",
                    key: "StartDate",
                    width: "5%",
                    dataIndex: "started",
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
                // {
                //     title: "Umumiy",
                //     key: "dedline",
                //     width: "5%",
                //     dataIndex: "dedline",
                
                // },
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

              

            ];
        return (
            <>
                <div className='RoomsTable'>

                    <div className='ModalRoomstable'>
                       <div className='ModalCard'>
                        <h2>Hello world</h2>
                        <Select mode="tags" style={{width: '100%',}} placeholder="Tags Mode" onChange={this.state.handleChange} options={this.state.data}/>
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
                      
                      { this.state.rooms.map((item,key)=>(
                        <div key={key} className="RoomBlock">
                              <div className='BlockTop'> <h2>Xona raqami: {item.number}</h2>
                                  <Button type="primary" onClick={()=> {this.showModal()}}>Odam qo'shish</Button>
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
               
                </div>
            </>
        )
    }
}
