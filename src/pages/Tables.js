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
  Typography,Checkbox,
} from "antd";
import Highlighter from 'react-highlight-words';
// import type { CheckboxValueType } from 'antd/es/checkbox/Group';

import {  Space } from 'antd';
import { DeleteTwoTone, EditTwoTone, PushpinTwoTone, SearchOutlined} from "@ant-design/icons";
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
import axios from "axios"
import { url } from "../host/host";
const { Title } = Typography;


const columns = [
  {
    title: "F.I.Sh",
    width: "10%",
    render: (text, record) => {
      return record.person.map((item, key) => (<div key={key}>{item.UserName}</div>))
    },
  },
  {
    title: "Name",
    dataIndex: "Date",
    width: "15%",
    render: (text, record) => {
      return record.person.map((item, key) => (<div key={key}>{item.Date}</div>))
    }
  },

  {
    title: "hukum sanasi",
    key: "SSudHukmSana",
    width: "15%",
    dataIndex: "SSudHukmSana",
  },
  {
    title: "jinoyat sanasi",
    key: "JinoyatVaqti",
    width: "15%",
    dataIndex: "JinoyatVaqti",
  },
  {
    title: "jinoyat hududi",
    key: "JinoyatHudud",
    width: "15%",
    dataIndex: "JinoyatHudud",
  },
  {
    title: "Sudya",
    key: "SSudyaFIO",
      width: "15%",
    dataIndex: "SSudyaFIO",
  },
    {
    title: "Prokuror",
    key: "IshPorkFIO",
      width: "15%",
    dataIndex: "IshPorkFIO",
  },
  {
    title: "action",
    key: "employed",
      width: "15%",
    render:(_,record)=>(
      <div >
        <Button style={{ marginRight:'10px' }} type="primary">Push</Button>
        <Button style={{ marginRight: '10px' }} type="primary">Edit</Button>
        <Button type="primary" danger>
          Delete
        </Button>
      </div>
    )
  },
  
];




export default class Tables extends Component {
state={
  form:1,
  data:[],
  searchText: "",
  searchedColumn: ""
}

getData=()=>{
  axios.get(`${url}/works`).then(res=>{
    this.setState({ data: res.data })
    console.log(this.state.data)
  })
}
openForm=(key)=>{
switch (key) {
  case 1:
    document.querySelector(".form1").style.display="block"
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
postData=()=>{
  var data={
AybElonFIO: "Siiiiiiiiiiuuuuuuuuuuu",
AyblovProkFIO: "asdasd",
AyblovProkLavozim: "zxc",
BoshXul: "hello",
IshPorkFIO: "asd",
IshProk: "sad",
JinoyatHudud: "zxc",
JinoyatJoyi: "zcx",
JinoyatVaqti: "zxzxcczx",
SSudHukmSana: "asd",
SSudyaFIO: "sad",
ShaharXul: "xa",
TumanXul: "xasd",
WorkId: "11a8569b-b450-4226-b780-c2d39ca8bc9a",
  AktiTufay: "dsa",
  AmaldaPushay: "dassad",
  AybElon: "zc",
  AybModda: "cxz",
  AybModdaBandi: "zx",
  AybModdaQism: "xzc",
  AybOrgani: "xcz",
  AybTopish: "asd",
  AyblovQisqa: "zxc",
  AyblovVozKech: "sda",
  Bandi: "sad",
  IjYoq: "das",
  Ijkattabol: "asd",
  
  JazoMiqdori: "sda",
  JazoTur: "sad",
  JinoyatZarar: "sad",
  Kasallik: "sda",
  Modda57: "sda",
  Modda96: "asd",
  Moddasi: "sad",
  MolMulQoplanish: "asd",
  MuddatOtib: "sda",
  MuqaddamSud: "asda",
  MuqaddamVaqti: "adsaadd",
  Nogironligi: "wewe",
  Ogir: "adsx",
 
  OtaOgir: "asdx",
  Pushaymon: "sda",
  QamoqBolmagan: "xzc",
  QamoqExtiyot: "asdsad",
  QamoqUy: "xzc",
  Qismi: "sadasd",
  QoplanishFoiz: "sad",
  S57Modda: "asd",
  S96Modda: "ad",
  SAktAs: "sd",
  SAmal: "as",
  SAmaldaPush: "a",
  SAybliBandi: "asd",
  SAybliModda: "sad",
  SAybliQismi: "asddas",
  SAydanVoz: "sad",
  SIjXavf: "a",
  SJazoMiq: "asd",
  SJazoTuri: "sda",
  SKasallik: "sd",
  SOtibket: "aa",
  SShartli: "sda",
  SYarshMun: "dsa",
  SYoq: "sd",
  ShartliHukm: "sda",
  Unchaogir: "asdx",
  UserId: "ea97c8cc-b7e5-46cd-8c03-3f40354f789a",
  UshlanganSana: "zxc",
  VoyYetmaganFarzandi: "sa",
  XavfYoqot: "sda",
  Yarashgan: "dsa",
  ZararQoplanish: "asd",
  userscol: "asd"
  }
  var formdata= new FormData()
  formdata.appand("UserName", "Abbas2")
  formdata.appand("Date", "hhhh")
  formdata.appand("Jinsi", "si")
  formdata.appand("RuxiyHolat", "a")
formdata.appand("Ishjoyi","aa")
  formdata.appand('lavozimi', "a")
  formdata.appand(' OilaAxvoli', "a")
formdata.appand()
}

  openModal2 = () => {
    document.querySelector(".Modal2").classList.add("openModal2")
  }
  close_modal = () => {
    document.querySelector(".Modal2").classList.remove("openModal2")
  }

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] })
    this.setState({ searchedColumn : dataIndex });
  };
  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={this.state.searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && this.handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              this.setState({searchText:selectedKeys[0]});
              this.setState({SearchedColumn:dataIndex}) ;
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => this.state.searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
 

  componentDidMount(){
    this.getData()
    this.openForm(1)
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
                title="Barcha ishlar"
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
            <Button className="abbas1" onClick={() => this.openForm(2)}>2-bo`limga o`tish</Button>
            <center><h3 style={{ color: 'white' }}>Sudlanuvchining shaxsiga oid ma'lumotlar</h3> </center>
          <div className="modal_body">
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Sudlanuvchi F.I.O</label><br />
                <input className="sel1 sel2" name="sel1" id="s1" />
              </div>

              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Sudlanuvchi tugilgan vaqti</label><br />
                <input className="sel1 sel2" name="sel1" id="s2" />
              </div>

              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Jinsi</label><br />
                <select className="sel1 sel2" name="sel1" id="s3">
                  <option value="1">ayol</option>
                  <option value="2">erkak</option>
                  <option value="3">Noma`lum</option>
                </select>

              </div>

              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Sudlanuvchining ruhiy holati (jinoyat sodir etilgan vaqtda / ish sudda koʼrilayotgan vaqtda)</label><br />
                <input className="sel1 sel2" name="sel1" id="s4" />
              </div>

              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Sudlanuvchining ish joyi</label><br />
                <input className="sel1 sel2" name="sel1" id="s5" />
              </div>

              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Sudlanuvchining lavozimi</label><br />
                <input className="sel1 sel2" name="sel1" id="s6" />
              </div>

              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Sudlanuvchining oilaviy ahvoli</label><br />
                <input className="sel1 sel2" name="sel1" id="s7" />
              </div>

              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Sudlanuvchining qaramogʼidagi voyaga yetmagan farzanlari soni</label><br />
                <input className="sel1 sel2" name="sel1" id="s8" />
              </div>

              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Sudlanuvchining muqaddam sudlanganligi</label><br />
                <select className="sel1 sel2" name="sel1" id="s9">
                  <option value="1">Sudlangan</option>
                  <option value="2">Sudlanmagan</option>
                </select>
              </div>

              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Sudlanuvchi muqaddam sudlangan vaqti, qaysi sud, moddasi, qismi, bandi, jazo turi, jazo miqdori</label><br />
                <input className="sel1 sel2" name="sel1" id="s10" />
              </div></div>
            <center><h3 style={{ color: 'white' }}>Ayblov yuzasidan ma'lumotlar</h3> </center>
<div className="modal_body">

              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Аyblovning qisqacha mazmuni</label><br />
                <input className="sel1 sel2" name="sel1" id="s11" />
              </div>

              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Jinoyat sodir etilgan vaqt</label><br />
                <input className="sel1 sel2" type="date" name="sel1" id="s12" />
              </div>

              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Jinoyat sodir etilgan hudud</label><br />
                <input className="sel1 sel2" name="sel1" id="s13" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Jinoyat sodir etilgan joy</label><br />
                <input className="sel1 sel2" name="sel1" id="s14" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Shaxs ushlangan sana(JPK 224,227)</label><br />
                <input className="sel1 sel2" name="sel1" id="s15" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Аyb eʼlon qilingan vaqt</label><br />
                <input className="sel1 sel2" name="sel1" type="date" id="s16" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Аyb eʼlon qilingan modda</label><br />
                <input className="sel1 sel2" name="sel1" id="s17" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Аyb eʼlon qilingan moddaning qismi</label><br />
                <input className="sel1 sel2" name="sel1" id="s18" />
              </div>  
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Аyb eʼlon qilingan moddaning bandi</label><br />
                <input className="sel1 sel2" name="sel1" id="s19" />
              </div>         
          </div>
          </div>
          <div className="form2">
            <Button className="abbas1" onClick={() => this.openForm(3)}>3-bo`limga o`tish</Button>
            <center><h3 style={{ color: 'white' }}>Tergov yuzasidan ma'lumotlar</h3> </center>
          <div className="modal_body">
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Аyb eʼlon qilgan tergov organi</label><br />
                <input className="sel1 sel2" name="sel1" id="s20" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Аyb eʼlon qilgan tergovchining F.I.Sh.</label><br />
                <input className="sel1 sel2" name="sel1" id="s21" />
              </div></div>
            <center><h3 style={{ color: 'white' }}>Ehtiyot chorasi</h3> </center>

              <div className="modal_body">
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Qamoq bilan bogʼliq boʼlmagan</label><br />
                <input className="sel1 sel2" name="sel1" id="s22" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Qamoq ehtiyot chorasi tanlangan sana</label><br />
                <input className="sel1 sel2" type="date" name="sel1" id="s23" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Uy qamogʼi ehtiyot chorasi tanlangan sana</label><br />
                <input className="sel1 sel2" name="sel1" id="s24" />
              </div></div>
            <center><h3 style={{ color: 'white' }}>Ayblov xulosasini tasdiqlagan prokuror</h3> </center>
              <div className="modal_body">
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Аyblov xulosasini tasdiqlagan prokurorning lavozimi</label><br />
                <input className="sel1 sel2" name="sel1" id="s25" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Аyblov xulosasini tasdiqlagan prokurorning F.I.Sh.</label><br />
                <input className="sel1 sel2" name="sel1" id="s26" />
              </div></div>
            <center><h3 style={{ color: 'white' }}>Jinoyat ishi bo‘yicha yetkazilgan zarar haqida ma'lumotlarJinoyat ishi bo‘yicha yetkazilgan zarar haqida ma'lumotlar</h3> </center>
              <div className="modal_body">
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Jinoyat ishi boʼyicha yetkazilgan zarar
                  (ming soʼmda).</label><br />
                <input className="sel1 sel2" name="sel1" id="s27" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Jinoyat ishi boʼyicha yetkazilgan zararning qoplanishi
                  (ming soʼmda)</label><br />
                <input className="sel1 sel2" name="sel1" id="s28" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Jinoyat ishi boʼyicha yetkazilgan zararning, shu jumladan, xatlangan mol-mulk hisobidan qoplanishi
                  (ming soʼmda)</label><br />
                <input className="sel1 sel2" name="sel1" id="s29" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Jinoyat ishi bo‘yicha yetkazilgan zararning qoplanishi foizi</label><br />
                <input className="sel1 sel2" name="sel1" id="s30" />
              </div></div>
            <center><h3 style={{ color: 'white' }}>Ishda ishtirok etayotgan prokuror haqida ma'lumotlar</h3> </center>
              <div className="modal_body">
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Ishda ishtirok etayotgan prokurorning lavozimi</label><br />
                <input className="sel1 sel2" name="sel1" id="s31" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Ishda ishtirok etayotgan prokurorning F.I.Sh.</label><br />
                <input className="sel1 sel2" name="sel1" id="s32" />
              </div>
        
</div>
          </div>
         <div className="form3">
            <Button className="abbas1" onClick={() => this.openForm(4)}>4-bo`limga o`tish</Button>
            <center><h3 style={{ color: 'white' }}>Ishda ishtirok etayotgan prokurorning fikri</h3> </center>
            <div className="modal_body">
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Aybli deb topish</label><br />
                <input className="sel1 sel2" name="sel1" id="s33" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Moddasi</label><br />
                <input className="sel1 sel2" name="sel1" id="s34" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Qismi</label><br />
                <input className="sel1 sel2" name="sel1" id="s35" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Bandi</label><br />
                <input className="sel1 sel2" name="sel1" id="s36" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Ayblovdan voz kechish</label><br />
                <input className="sel1 sel2" name="sel1" id="s37" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Jazo turi</label><br />
                <input className="sel1 sel2" name="sel1" id="s38" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Jazo miqdori</label><br />
                <input className="sel1 sel2" name="sel1" id="s38" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Shartli hukm qilish</label><br />
                <input className="sel1 sel2" name="sel1" id="s39" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">JKning 57-moddasini qo‘llash</label><br />
                <input className="sel1 sel2" name="sel1" id="s40" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">JKning 96-moddasini qo‘llash</label><br />
                <input className="sel1 sel2" name="sel1" id="s41" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Javobgarlikka tortish muddatining o‘tib ketganligi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s42" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Qilmish yoki shaxs ijtimoiy xavfliligini yo‘qotganligi</label><br />
                <input className="sel1 sel2" name="sel1" id="s43" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Aybdor o‘z qilmishiga amalda pushaymon bo‘lganligi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s50" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Yarashilganligi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s51" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Kasallik tufayli</label><br />
                <input className="sel1 sel2" name="sel1" id="s52" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Amnistiya akti asosida</label><br />
                <input className="sel1 sel2" name="sel1" id="s53" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Shaxsning ijtimoiy xavflilik xususiyatini yo‘qotishi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s54" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Aybdor o‘z qilmishiga amalda pushaymon bo‘lganligi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s55" />
              </div>
            </div>
         </div>
         <div className="form4">
            <Button className="abbas1" onClick={() => this.openForm(5)}>5-bo`limga o`tish</Button>
            <center><h3 style={{ color: 'white' }}>Sud natijasi</h3> </center>
            <div className="modal_body">
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Sud hukmi sanasi</label><br />
                <input className="sel1 sel2" type='date' name="sel1" id="s56" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Sud'ya F.I.Sh.</label><br />
                <input className="sel1 sel2" name="sel1" id="s57" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Aybli deb topish moddasi</label><br />
                <input className="sel1 sel2" name="sel1" id="s58" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Aybli deb topish qismi</label><br />
                <input className="sel1 sel2" name="sel1" id="s59" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Aybli deb topish bandi</label><br />
                <input className="sel1 sel2" name="sel1" id="s60" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Ayblovdan voz kechish</label><br />
                <input className="sel1 sel2" name="sel1" id="s61" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Jazo turi</label><br />
                <input className="sel1 sel2" name="sel1" id="s62" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Jazo miqdori</label><br />
                <input className="sel1 sel2" name="sel1" id="s63" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Shartli hukm qilish</label><br />
                <input className="sel1 sel2" name="sel1" id="s64" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">JKning 57-moddasini qo‘llash</label><br />
                <input className="sel1 sel2" name="sel1" id="s65" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">JKning 96-moddasini qo‘llash</label><br />
                <input className="sel1 sel2" name="sel1" id="s66" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Javobgarlikka tortish muddatining o‘tib ketganligi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s67" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Qilmish yoki shaxs ijtimoiy xavfliligini yo‘qotganligi</label><br />
                <input className="sel1 sel2" name="sel1" id="s68" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Aybdor o‘z qilmishiga amalda pushaymon bo‘lganligi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s69" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Yarashilganligi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s70" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Kasallik tufayli</label><br />
                <input className="sel1 sel2" name="sel1" id="s71" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Amnistiya akti asosida</label><br />
                <input className="sel1 sel2" name="sel1" id="s72" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Shaxsning ijtimoiy xavflilik xususiyatini yo‘qotishi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s73" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Aybdor o‘z qilmishiga amalda pushaymon bo‘lganligi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s74" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Jinoyatning ijtimoiy xavflilik darajasi</label><br />
                <select className="sel1 sel2" name="sel1" id="s75">
                  <option value="1">ijtimoiy xavfi katta bo‘lmagan</option>
                  <option value="2">uncha og‘ir bo‘lmagan</option>
                  <option value="3">og‘ir</option>
                  <option value="3">o‘ta og‘ir</option>
                </select>
              </div></div>
            <center><h3 style={{ color: 'white' }}>Sud hukmiga nisbatan prokuror xulosasi</h3> </center>
              <div className="modal_body">
              
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Tuman (shahar) prokuraturasi xulosasi</label><br />
                <input className="sel1 sel2" name="sel1" id="s76" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Qoraqalpog‘iston Respublikasi, viloyatlar, Toshkent shahar prokuraturasi xulosasi</label><br />
                <input className="sel1 sel2" name="sel1" id="s77" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Bosh prokuraturagning xulosasi</label><br />
                <input className="sel1 sel2" name="sel1" id="s78" />
              </div>
              
            </div>
         </div>
         <div className="form5">
            <Button className="abbas1" onClick={() => this.openForm(1)}>Boshiga qaytish</Button>
           
            <div className="modal_body">
              <Checkbox.Group style={{ width: '100%'}}>
                <Row>
                  <Col span={8}>
                    <Checkbox value="A" style={{ color: 'white' }}>Ko`rilgan ishlar ro`yhati</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="B" style={{ color: 'white' }}>B</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="C" style={{ color: 'white' }}>C</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="D" style={{ color: 'white' }}>D</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="E" style={{ color: 'white' }}>E</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
        
            </div>
         </div>
         



        </div>
      </>
    );
  }
}
