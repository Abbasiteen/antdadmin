import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,
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
import { CloseOutlined } from "@ant-design/icons"
import { Input } from 'antd';
import "./table.css"
import React, { Component } from 'react'
const { Title } = Typography;

const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
// table code start
const columns = [
  {
    title: "AUTHOR",
    dataIndex: "name",
    key: "name",
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
    dataIndex: "status",
  },
  {
    title: "EMPLOYED",
    key: "employed",
    dataIndex: "employed",
  },
];

const data = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Michael John</Title>
            <p>michael@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Manager</Title>
          <p>Organization</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          ONLINE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/04/18</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face3}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Alexa Liras</Title>
            <p>alexa@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Programator</Title>
          <p>Developer</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">ONLINE</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/12/20</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Laure Perrier</Title>
            <p>laure@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Executive</Title>
          <p>Projects</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          ONLINE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>03/04/21</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "4",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face4}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Miriam Eric</Title>
            <p>miriam@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Marketing</Title>
          <p>Organization</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          ONLINE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>03/04/21</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "5",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face5}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Richard Gran</Title>
            <p>richard@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Manager</Title>
          <p>Organization</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">ONLINE</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/03/20</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "6",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Tester</Title>
          <p>Developer</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">ONLINE</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>14/04/17</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
];



export default class Tables extends Component {
  openModal2 = () => {
    document.querySelector(".Modal2").classList.add("openModal2")
  }
  close_modal = () => {
    document.querySelector(".Modal2").classList.remove("openModal2")
  }
  render() {
    return (
      <>
        <div className="tabled">
          <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
              <div className="cards1">
                <div className="card1">
                  <label htmlFor="sel1">testing1</label><br />
                  <select className="sel1" name="sel1" id="">
                    <option value="1">test1</option>
                    <option value="2">test2</option>
                    <option value="3">test3</option>
                  </select>
                </div>
                <div className="card1">
                  <label htmlFor="sel1">testing1</label><br />
                  <select className="sel1" name="sel1" id="">
                    <option value="1">test1</option>
                    <option value="2">test2</option>
                    <option value="3">test3</option>
                  </select>
                </div>
                <div className="card1">
                  <label htmlFor="sel1">testing1</label><br />
                  <select className="sel1" name="sel1" id="">
                    <option value="1">test1</option>
                    <option value="2">test2</option>
                    <option value="3">test3</option>
                  </select>
                </div>
                <div className="card1">
                  <label htmlFor="sel1">testing1</label><br />
                  <select className="sel1" name="sel1" id="">
                    <option value="1">test1</option>
                    <option value="2">test2</option>
                    <option value="3">test3</option>
                  </select>
                </div>
                <div className="card1">
                  <label htmlFor="sel1">testing1</label><br />
                  <select className="sel1" name="sel1" id="">
                    <option value="1">test1</option>
                    <option value="2">test2</option>
                    <option value="3">test3</option>
                  </select>
                </div>
                <div className="card1">
                  <label htmlFor="sel1">testing1</label><br />
                  <select className="sel1" name="sel1" id="">
                    <option value="1">test1</option>
                    <option value="2">test2</option>
                    <option value="3">test3</option>
                  </select>
                </div>
                <div className="card1">
                  <label htmlFor="sel1">kun boshi</label><br />
                  <input type="date" className="sel1" name="sel1" id="" />

                </div>
                <div className="card1">
                  <label htmlFor="sel1">Kun oxiri</label><br />
                  <input type="date" className="sel1" name="sel1" id="" />
                </div>
              </div>
              <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="Authors Table"
                extra={
                  <>
                    <Radio.Group defaultValue="a">
                      <Radio.Button value="a">pdf korinishda yuklab olish</Radio.Button>
                      <Radio.Button value="b">xlsx ko`rinishda yuklab olish</Radio.Button>
                      <Radio.Button value="c">docx ko`rinishda yuklab olish</Radio.Button>
                    </Radio.Group>

                    <Button onClick={this.openModal2} className="modal_btn">Add</Button>
                  </>
                }
              >
                <div className="table-responsive">
                  <Table
                    columns={columns}
                    dataSource={data}
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
          <div className="modal_body">

                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Sudlanuvchi F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>

                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Sudlanuvchi tugilgan vaqti</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>

                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Jinsi</label><br />
                  <select className="sel1 sel2" name="sel1" id="">
                    <option value="1">ayol</option>
                    <option value="2">erkak</option>
                    <option value="3">Noma`lum</option>
                  </select>
                  
                </div>

                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Sudlanuvchining ruhiy holati (jinoyat sodir etilgan vaqtda / ish sudda koʼrilayotgan vaqtda)</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>

                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Sudlanuvchining ish joyi</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>

                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Sudlanuvchining lavozimi</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>

                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Sudlanuvchining oilaviy ahvoli</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>

                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Sudlanuvchining qaramogʼidagi voyaga yetmagan farzanlari soni</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>

                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Sudlanuvchining muqaddam sudlanganligi</label><br />
                  <select className="sel1 sel2" name="sel1" id="">
                    <option value="1">Sudlangan</option>
                    <option value="2">Sudlanmagan</option>
                  </select>
                </div>

                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Sudlanuvchi muqaddam sudlangan vaqti, qaysi sud, moddasi, qismi, bandi, jazo turi, jazo miqdori</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>

                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Аyblovning qisqacha mazmuni</label><br />
                  <input className="sel1 sel2"  name="sel1" id="" /> 
                </div>

                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Jinoyat sodir etilgan vaqt</label><br />
                  <input className="sel1 sel2" type="date" name="sel1" id="" /> 
                </div>

                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Jinoyat sodir etilgan hudud</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Jinoyat sodir etilgan joy</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Shaxs ushlangan sana(JPK 224,227)</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Аyb eʼlon qilingan vaqt</label><br />
                  <input className="sel1 sel2" name="sel1" type="date" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Аyb eʼlon qilingan modda</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Аyb eʼlon qilingan moddaning qismi</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Аyb eʼlon qilingan moddaning bandi</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Аyb eʼlon qilgan tergov organi</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Аyb eʼlon qilgan tergovchining F.I.Sh.</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Qamoq bilan bogʼliq boʼlmagan</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Qamoq ehtiyot chorasi tanlangan sana</label><br />
                  <input className="sel1 sel2" type="date" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Uy qamogʼi ehtiyot chorasi tanlangan sana</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Аyblov xulosasini tasdiqlagan prokurorning lavozimi</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Аyblov xulosasini tasdiqlagan prokurorning F.I.Sh.</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Jinoyat ishi boʼyicha yetkazilgan zarar 
(ming soʼmda).</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Jinoyat ishi boʼyicha yetkazilgan zararning qoplanishi 
(ming soʼmda)</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">Jinoyat ishi boʼyicha yetkazilgan zararning, shu jumladan, xatlangan mol-mulk hisobidan qoplanishi 
(ming soʼmda)</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>
                <div className="card1">
                  <label htmlFor="sel1" className="sel2_text">F.I.O</label><br />
                  <input className="sel1 sel2" name="sel1" id="" /> 
                </div>











          </div>
        </div>
      </>
    );
  }
}
