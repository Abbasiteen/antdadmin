import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Button,
  Checkbox,
  Input,
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
    openid: 0,
    openid2: 0,
    userID: 0
  }


  getData = () => {
    let headers = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    }
    axios.get(`${url}/users`, headers).then(res => {
      this.setState({ data: res.data })
    }).catch(err => {
      window.location.reload()
    })
  }

  openForm = (key) => {
    switch (key) {
      case 1:
        document.querySelector(".form1").style.display = "flex"
        document.querySelector(".form2").style.display = "none"
        document.querySelector(".form3").style.display = "none"
        document.querySelector(".form4").style.display = "none"
        document.querySelector(".form5").style.display = "none"
        break;
      case 2:
        document.querySelector(".form1").style.display = "none"
        document.querySelector(".form2").style.display = "block"
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
  addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
  }


  pushComent = () => {

    var formdata = new FormData()
    const d = new Date();
    var now = new Date();
    var month = (now.getMonth() + 1);
    var day = now.getDate();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    var today = month + '-' + day + '-' + now.getFullYear();

    let h = this.addZero(d.getHours());
    let m = this.addZero(d.getMinutes());
    let s = this.addZero(d.getSeconds());
    let time = h + ":" + m + ":" + s;
    var posterq = JSON.parse(sessionStorage.getItem("poster"))
    formdata.append("date", today)
    formdata.append("hour", time)
    formdata.append('poster', posterq.poster)
    formdata.append("comment", document.querySelector("#postmes").value)

    axios.post(`${url}/comment/${this.state.openid}`, formdata).then(res => {
      alert("yuborildi")
      window.location.reload()
    }).catch(err => {
      alert("xato")
    })
  }

  pushUser = (key) => {

    const formdata = new FormData()

    const d = new Date();
    var now = new Date();
    var month = (now.getMonth() + 1);
    var day = now.getDate();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    var today = day + '-' + month + '-' + now.getFullYear();
    var yu = JSON.parse(sessionStorage.getItem('poster'))

    let h = this.addZero(d.getHours());
    let m = this.addZero(d.getMinutes());
    let s = this.addZero(d.getSeconds());
    let time = h + ":" + m + ":" + s;
    formdata.append("date", today)
    formdata.append("hour", time)
    formdata.append("poster", yu.poster)
    formdata.append("username", document.querySelector('#posti').value)
    formdata.append("surname", document.querySelector('#postf').value)
    formdata.append("age", document.querySelector('#posty').value)
    formdata.append("address", document.querySelector('#posta').value)
    formdata.append("telNumber", document.querySelector('#postt').value)
    formdata.append("passportNum", document.querySelector('#postp').value)
    formdata.append("passportSer", document.querySelector('#postse').value)
    formdata.append("comment", document.querySelector('#postm').value)
    formdata.append("dedline", document.querySelector('#posts').value)
    console.log(formdata);
    axios.post(`${url}/users`, formdata).then(res => {
      alert("yaratildi")
      setTimeout(() => {
        window.location.reload()
      }, 10);
    }).catch(err => {
      console.log("err");
    })

  }
  openComent = (key) => {
    this.openForm(2)
    this.openModal2()
    this.setState({ openid: key })
  }
  openAnaliz = (key) => {
    this.openForm(3)
    this.openModal2()
    this.setState({ openid: key })
  }
  postAnaliz = () => {
    var formPost = new FormData()
    formPost.append("analizName", document.querySelector("#AnalizName").value)
    formPost.append("analizFile", document.querySelector("#analizFile").files[0])
    axios.post(`http://nodejs.abbas.uz/users/analiz/${this.state.openid}`, formPost)
      .then(res => {
        alert("Jo'natildi")
        window.location.reload()
      })
      .catch(err => {
        alert("Xato")
      })
  }
  DeleteData = (key) => {
    let headers = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }


    }
    console.log(key);
    axios.delete(`${url}/users/${key}`, headers).then(res => {
      alert('o`chirildi')
      window.location.reload()
    }).catch(err => {
      alert('qayta uruning')
      window.location.reload()
    })
  }
  openPush = (key, username, surname, age, passportSer, passportNum, telNumber, dedline, address) => {
    this.openForm(1)
    this.openModal2()
    this.setState({ userID: key })
    document.querySelector("#name2").value = username
    document.querySelector("#surname2").value = surname
    document.querySelector("#age2").value = age
    document.querySelector("#pass2").value = passportSer
    document.querySelector("#passnum4").value = passportNum
    document.querySelector("#address2").value = address
    document.querySelector("#telNumber2").value = telNumber
    document.querySelector("#dedline2").value = dedline
  }
  editUser = () => {
    console.log(this.state.userID)
    var newDATA = new FormData()
    newDATA.append("username", document.querySelector("#name2").value)
    newDATA.append("surname", document.querySelector("#surname2").value)
    newDATA.append("age", document.querySelector("#age2").value)
    newDATA.append("passportSer", document.querySelector("#pass2").value)
    newDATA.append("passportNum", document.querySelector("#passnum4").value)
    newDATA.append("telNumber", document.querySelector("#telNumber2").value)
    newDATA.append("dedline", document.querySelector("#dedline2").value)
    newDATA.append("address", document.querySelector("#address2").value)
    axios.put(`http://nodejs.abbas.uz/users/${this.state.userID}`, newDATA)
      .then(res => {
        alert("O'zgartirildi")
        window.location.reload()
      })
      .catch(err => {
        alert("Xatolik")
      })
  }
  openModal2 = () => {
    document.querySelector(".Modal2").classList.add("openModal2")
  }
  close_modal = () => {
    document.querySelector(".Modal2").classList.remove("openModal2")
  }
  openwork = () => {
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
        render: (_, record) => (
          record.dedline ? (<div>{record.dedline}</div>) : (<button>qo'shish</button>)
        ),
        sorter: (a, b) => a.dedline.length - b.dedline.length,
        sortDirections: ['descend', 'ascend']
      },

      {
        title: "Comment",
        key: "dedline",
        width: "14%",
        render: (_, record) => {
          return <div><Button style={{ marginRight: '10px' }} onClick={() => { this.openComent(record.id) }} type="primary">Comment</Button>
            <Button style={{ marginRight: '10px' }} onClick={() => { this.openAnaliz(record.id) }} type="primary">Analiz</Button></div>
        }
      },

      {
        title: "action",
        key: "employed",
        width: "15%",
        render: (_, record) => {
          return <div>
            <Button style={{ marginRight: '10px' }} onClick={() => { this.openPush(record.id, record.username, record.surname, record.age, record.passportSer, record.passportNum, record.telNumber, record.dedline, record.address) }} type="primary">Edit</Button>
            <Button onClick={() => { this.DeleteData(record.id) }} type="primary" danger>
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
                    <Button onClick={() => { this.openwork() }} className="modal_btn">Add</Button>
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
                <input type="text" id="name2" />
              </div>

              <div className="familya">
                <label>Familyangizni kiriting</label><br />
                <input type="text" id="surname2" />
              </div>

              <div className="yosh">
                <label>Yoshingizni kiriting</label><br />
                <input type="number" id="age2" />
              </div>

              <div className="ser">
                <label>Pasport Seriyasi</label><br />
                <input type="text" id="pass2" />
              </div>

              <div className="pasport">
                <label>Pasport raqami</label><br />
                <input type="number" id="passnum4" />
              </div>

              <div className="tel">
                <label>Telefon nomer</label><br />
                <input type="text" id="telNumber2" />
              </div>

              <div className="address">
                <label>Manzili</label><br />
                <input type="text" id="address2" />
              </div>

              <div className="sana1">
                <label>Qayta qo'ng'iroq sanasi</label><br />
                <input type="date" id="dedline2" />
              </div>

              <Button type="primary" block onClick={this.editUser}>
                Yuborish
              </Button>
            </div>
          </div>

          <div className="form2">
            <div className="message">
              <label>Xabar</label><br />
              <textarea name="" id="postmes" cols="119.5" rows="10"></textarea><br />
              <Button onClick={() => { this.pushComent() }} className="sdsds" type="primary" block>
                Yuborish
              </Button>
            </div>

          </div>
          <div className="form3">
            <div className="message">
              <label>Analiz Nomi</label> <br />
              <Input id="AnalizName" /> <br /> <br />
              <h4>File</h4>
              <Input type="file" id="analizFile" />
              <Button onClick={() => { this.postAnaliz() }} className="sdsds" type="primary" block>
                Yuborish
              </Button>
            </div>
          </div>
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
                <input maxLength={15} type="number" id="postt" />
              </div>

              <div className="sana1">
                <label>Qayta qo'ng'iroq sanasi</label><br />
                <input type="date" id="posts" />
              </div>

              <div className="message">
                <label>Xabar</label><br />
                <textarea name="" id="postm" cols="119.5" rows="10"></textarea>
              </div>
              <Button onClick={() => { this.pushUser() }} className="sdsds" type="primary" block>
                Yuborish
              </Button>
            </div>
          </div>

        </div>

      </>
    );
  }
}
