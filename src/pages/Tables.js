import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Button,
  Checkbox,
} from "antd";
import { CloseOutlined } from "@ant-design/icons"
import "../pages/table.css"
import React, { Component } from 'react'
import axios from "axios"
import { url } from "../host/host";







export default class Tables extends Component {
  state = {
    form: 1,
    data: [],
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
openForm=(key)=>{
switch (key) {
  case 1:
    document.querySelector(".form1").style.display="flex"
    document.querySelector(".form2").style.display = "none"
    document.querySelector(".form3").style.display="none"
    document.querySelector(".form4").style.display="none"
    document.querySelector(".form5").style.display = "none"
    break;
  case 2:
    document.querySelector(".form1").style.display = "none"
    document.querySelector(".form2").style.display ="block"
    document.querySelector(".form3").style.display = "none"
    document.querySelector(".form4").style.display = "none"
    document.querySelector(".form5").style.display = "none"
    break;
  case 3:
    document.querySelector(".form1").style.display = "none"
    document.querySelector(".form2").style.display = "none"
    document.querySelector(".form3").style.display = "block"
    document.querySelector(".form4").style.display = "none"
    document.querySelector(".form5").style.display = "none"
    break;
  case 4:
    document.querySelector(".form1").style.display = "none"
    document.querySelector(".form2").style.display = "none"
    document.querySelector(".form3").style.display = "none"
    document.querySelector(".form4").style.display = "block"
    document.querySelector(".form5").style.display = "none"
    break;
  case 5:
    document.querySelector(".form1").style.display = "none"
    document.querySelector(".form2").style.display = "none"
    document.querySelector(".form3").style.display = "none"
    document.querySelector(".form4").style.display = "none"
    document.querySelector(".form5").style.display = "block"
    break;
  default:
    document.querySelector(".form1").style.display = "flex"
    document.querySelector(".form2").style.display = "none"
    document.querySelector(".form3").style.display = "none"
    document.querySelector(".form4").style.display = "none"
    document.querySelector(".form5").style.display = "none"
    break;
}
}

pushUser=(key)=>{

  const formdata = new FormData()
  formdata.append("creator","abbas")
  formdata.append("username",document.querySelector('#posti').value)
  formdata.append("surname", document.querySelector('#postf').value)
  formdata.append("age", document.querySelector('#posty').value)
  formdata.append("address", document.querySelector('#posta').value)
  formdata.append("telNumber", document.querySelector('#postt').value)
  formdata.append("passportNum", document.querySelector('#postp').value)
  formdata.append("passportSer", document.querySelector('#postse').value)
  formdata.append("message", document.querySelector('#postm').value)
  formdata.append("dedline", document.querySelector('#posts').value)
  console.log(formdata);
  axios.post(`${url}/users/`, formdata).then(res=>{
     alert("yaratildi")
setTimeout(() => {
  window.location.reload()
}, 10);
  }).catch(err=>{
    console.log("err");
  })

}
DeleteData=(key)=>{
  let headers = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    

  }
  console.log(key);
axios.delete(`${url}/users/${key}`, headers).then(res=>{
alert('o`chirildi')
  window.location.reload()  
}).catch(err=>{
  alert('qayta uruning') 
  window.location.reload()
})
}
openPush=(key)=>{
  this.openForm(1)
  this.openModal2()
  this.setState({workId:key})
}
  openModal2 = () => {
    document.querySelector(".Modal2").classList.add("openModal2")
  }
  close_modal = () => {
    document.querySelector(".Modal2").classList.remove("openModal2")
  }
openwork=()=>{
  this.openForm(5)
  this.openModal2()
}

  componentDidMount() {
    this.getData()
    this.openForm(1)
  }

  render() {
    const columns = [
   
      {
        title: "Username",
        width: "13%",
        dataIndex: "username",
      },
      {
        title: "Surname",
        width: "13%",
        dataIndex: "surname",
      },
      {
        title: "Age",
        key: "age",
        width: "10%",
        dataIndex: "age",
        sorter: (a, b) => a.age.length - b.age.length,
        sortDirections: ['descend', 'ascend']
      },
      {
        title: "passportSer",
        key: "passportSer",
        width: "5%",
        dataIndex: "passportSer",
      },
   {
        title: "passportNum",
        key: "passportNum",
        width: "15%",
        dataIndex: "passportNum",
      },
      {
        title: "dedline",
        key: "dedline",
        width: "15%",
        dataIndex: "dedline",
        sorter: (a, b) => a.dedline.length - b.dedline.length,
        sortDirections: ['descend', 'ascend']
      },

      {
        title: ()=>{return <div>ss <input type="text" /> </div>},
        key: "dedline",
        width: "15%",
        dataIndex: "dedline",
      },

      {
        title: "action",
        key: "employed",
        width: "15%",
        render: (_, record) => {
        return  <div>
            <Button style={{ marginRight: '10px' }} onClick={()=>{this.openPush()}} type="primary">Edit</Button>
            <Button onClick={()=>{this.DeleteData(record.id)}} type="primary" danger>
              Delete
            </Button>
          </div>
        }
      },
    
    ];
    
    return (
      <>
        <div className="tabled">
          <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
  
              <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="Barcha ishlar"
                extra={
                  <>
                    <Button onClick={()=>{this.openwork()}} className="modal_btn">Add</Button>
                  </>
                }
              >
                <div className="table-responsive">
                  <Table
                    columns={columns}
                    dataSource={this.state.data}
                    pagination={false}
                    className="ant-border-space"
                  />

                </div>
              </Card>

            </Col>
          </Row>
        </div>

        <div className="Modal2">
          <CloseOutlined onClick={this.close_modal} className="close_modal" />
            
            <div className="form1">
            <div className="form">
            <div className="ism">
            <label>Ismingizni kiriting</label><br />
            <input type="text" />
            </div>

            <div className="familya">
              <label>Familyangizni kiriting</label><br />
            <input type="text" />
            </div>
            
            <div className="yosh">
            <label>Yoshingizni kiriting</label><br />
            <input type="number" />
            </div>
            
            <div className="pasport">
            <label>Pasport raqami</label><br />
            <input type="text" />
            </div>
            
            <div className="tel">
            <label>Telefon nomer</label><br />
            <input type="number" />
            </div>
            
            <div className="sana1">
            <label>Qayta qo'ng'iroq sanasi</label><br />
            <input type="number" />
            </div>

              <div className="message">
                <label>Xabar</label><br />
                <textarea name="" id="" cols="119.5" rows="10"></textarea>
              </div>
              <Button type="primary" block>
              Yuborish
              </Button>
            </div>
            </div>
          <div className="form2">2</div>
          <div className="form3">3</div>
          <div className="form4">4</div>
          <div className="form5">
            <div className="form">
              <div className="ism">
                <label>Ismingizni kiriting</label><br />
                <input type="text" id="posti" />
              </div>

              <div className="familya">
                <label>Familyangizni kiriting</label><br />
                <input type="text" id="postf" />
              </div>

              <div className="yosh">
                <label>Yoshingizni kiriting</label><br />
                <input type="number" id="posty" />
              </div>
              <div className="pasport">
                <label>Address</label><br />
                <input type="text" id="posta" />
              </div>
              <div className="pasport">
                <label>Pasport seriyasi</label><br />
                <input type="text" id="postse" />
              </div>
              <div className="pasport">
                <label>Pasport raqami</label><br />
                <input type="text" id="postp" />
              </div>

              <div className="tel">
                <label>Telefon nomer</label><br />
                <input type="number" id="postt" />
              </div>

              <div className="sana1">
                <label>Qayta qo'ng'iroq sanasi</label><br />
                <input type="date" id="posts" />
              </div>

              <div className="message">
                <label>Xabar</label><br />
                <textarea name="" id="postm" cols="119.5" rows="10"></textarea>
              </div>
              <Button onClick={()=>{this.pushUser()}} className="sdsds" type="primary" block>
                Yuborish
              </Button>
            </div>
          </div>

</div>
      
      </>
    );
  }
}
