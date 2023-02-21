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
    searchText: "",
    searchedColumn: ""
  }


getData=()=>{
  let headers = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }
  axios.get(`${url}/works`,headers).then(res=>{
    this.setState({ data: res.data })
    console.log(this.state.data)
  }).catch(err=>{
    alert("qayta urunib koring yoki birozdan keyin tekshring")
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
 
  var formdata= new FormData()
  formdata.append("UserName", document.querySelector("#s1").value)
  formdata.append("Date", document.querySelector("#s2").value)
  formdata.append("Jinsi", document.querySelector("#s3").value)
  formdata.append("RuxiyHolat", document.querySelector("#s4").value)
  formdata.append("Ishjoyi", document.querySelector("#s5").value)
  formdata.append('lavozimi', document.querySelector("#s6").value)
  formdata.append('OilaAxvoli', document.querySelector("#s7").value)
  formdata.append('VoyYetmaganFarzandi', document.querySelector("#s8").value)
  formdata.append("MuqaddamSud", document.querySelector("#s9").value)
  formdata.append('MuqaddamVaqti', document.querySelector("#s10").value)
  formdata.append('AyblovQisqa', document.querySelector("#s11").value)
  formdata.append("JinoyatVaqti", document.querySelector("#s12").value)
  formdata.append("JinoyatHudud", document.querySelector("#s13").value)
  formdata.append("JinoyatJoyi", document.querySelector("#s14").value)
  formdata.append("UshlanganSana", document.querySelector("#s15").value)
  formdata.append("AybElon", document.querySelector("#s16").value)
  formdata.append("AybModda", document.querySelector("#s17").value)
  formdata.append("AybModdaQism", document.querySelector("#s18").value)
  formdata.append("AybModdaBandi", document.querySelector("#s19").value)
  formdata.append("AybOrgani", document.querySelector("#s20").value)
  formdata.append("AybElonFIO", document.querySelector("#s21").value)
  formdata.append('QamoqBolmagan', document.querySelector("#s22").value)
  formdata.append('QamoqExtiyot', document.querySelector("#s23").value)
  formdata.append('QamoqUy',document.querySelector("#s24").value)
  formdata.append('AyblovProkLavozim', document.querySelector("#s25").value)
  formdata.append('AyblovProkFIO', document.querySelector("#s26").value)
  formdata.append('JinoyatZarar', document.querySelector("#s27").value)
  formdata.append('ZararQoplanish', document.querySelector("#s28").value)
  formdata.append('MolMulQoplanish', document.querySelector("#s29").value)
  formdata.append('QoplanishFoiz', document.querySelector("#s30").value)
  formdata.append('IshProk', document.querySelector("#s31").value)
  formdata.append('IshPorkFIO', document.querySelector("#s32").value)
  formdata.append('AybTopishAybTopish', document.querySelector("#s33").value)
  formdata.append('Moddasi', document.querySelector("#s34").value)
  formdata.append('Qismi', document.querySelector("#s35").value,)
  formdata.append('Bandi', document.querySelector("#s36").value)
  formdata.append('AyblovVozKech', document.querySelector("#s37").value)
  formdata.append('JazoTur', document.querySelector("#s38").value)
  formdata.append('JazoMiqdori', document.querySelector("#s39").value)
  formdata.append('ShartliHukm', document.querySelector("#s40").value)
  formdata.append('Modda57', document.querySelector("#s41").value)
  formdata.append('Modda96', document.querySelector("#s42").value)
  formdata.append('MuddatOtib', document.querySelector("#s43").value)
  formdata.append('XavfYoqot', document.querySelector("#s44").value)
  formdata.append('Pushaymon', document.querySelector("#s45").value)
  formdata.append('Yarashgan', document.querySelector("#s46").value)
  formdata.append('Kasallik', document.querySelector("#s47").value)
  formdata.append('AktiTufay', document.querySelector("#s48").value)
  formdata.append('IjYoq', document.querySelector("#s49").value)  
  formdata.append('AmaldaPushay', document.querySelector("#s50").value)
  formdata.append('SSudHukmSana', document.querySelector("#s51").value)
  formdata.append('SSudyaFIO', document.querySelector("#s52").value)
  formdata.append('SAybliModda', document.querySelector("#s53").value)
  formdata.append('SAybliQismi', document.querySelector("#s54").value)
  formdata.append('SAybliBandi', document.querySelector("#s55").value)
  formdata.append('SAydanVoz', document.querySelector("#s56").value)
  formdata.append('SJazoTuri', document.querySelector("#s57").value) 
  formdata.append('SJazoMiq', document.querySelector("#s58").value)
  formdata.append('SShartli', document.querySelector("#s59").value)
  formdata.append('S57Modda', document.querySelector("#s60").value)
  formdata.append('S96Modda', document.querySelector("#s61").value)
  formdata.append('SOtibket', document.querySelector("#s62").value)
  formdata.append('SYoq', document.querySelector("#s63").value)
  formdata.append('SAmaldaPush', document.querySelector("#s64").value)
  formdata.append('SYarshMun', document.querySelector("#s65").value)
  formdata.append('SKasallik', document.querySelector("#s66").value)
  formdata.append('SAktAs', document.querySelector("#s67").value)
  formdata.append('SIjXavf', document.querySelector("#s68").value)
  formdata.append('SAmaldaPush', document.querySelector("#s69").value)
  formdata.append('Ogir', document.querySelector("#s70").value)
  formdata.append('TumanXul', document.querySelector("#s71").value)
  formdata.append('ShaharXul', document.querySelector("#s72").value)
  formdata.append('BoshXul', document.querySelector("#s73").value)
  
  axios.post(`${url}/works`, formdata).then(res=>{
    alert("yuborildi")
 window.location.reload() 
this.close_modal()
  }).catch(err=>{
    alert("malumot yuborilmadi mutahasis bilan gaplashing")
  })
}
pushUser=(key)=>{
  const formdata = new FormData()
  formdata.append("UserName", "Abbas2")
  formdata.append("Date", "hhhh")
  formdata.append("Jinsi", "si")
  formdata.append("RuxiyHolat", "a")
  formdata.append("Ishjoyi", "aa")
  formdata.append('lavozimi', "a")
  formdata.append('OilaAxvoli', "a")
  formdata.append('VoyYetmaganFarzandi' , 'as')
  formdata.append('MuqaddamSud' , 'AAA')
  formdata.append('MuqaddamVaqti' , 'a')
  formdata.append('AyblovQisqa' , 'aasas')
  formdata.append('UshlanganSana' , 'asasasasdas')
  formdata.append('AybElon' , '1222')
  formdata.append('AybModda' , '19')
  formdata.append('AybModdaQism', '2')
  formdata.append('AybModdaBandi' , '31')
  formdata.append('AybOrgani' , 'qsax')
  formdata.append('QamoqBolmagan' , 'true')
  formdata.append('QamoqBolmagan' , 'ha')
  formdata.append('QamoqUy' , 'Bolgan')
  formdata.append('JinoyatZarar' , '12332mln')
  formdata.append('ZararQoplanish' , '121')
  formdata.append('MolMulQoplanish' , 'sda')
  formdata.append('QoplanishFoiz' , 'aas')
  formdata.append('AybTopish' , 'as')
  formdata.append('Moddasi' , 'asdasd')
  formdata.append('Qismi' , 'sd')
  formdata.append('Bandi' , 'band')
  formdata.append('AyblovVozKech' , 'as')
  formdata.append('JazoTur' , 'dsa')
  formdata.append('JazoMiqdori' , 'asd')
  formdata.append('ShartliHukm' , 'dsa')
  formdata.append('Modda57' , 'da')
  formdata.append('Modda96' , 'da')
  formdata.append('MuddatOtib' , 'fe')
  formdata.append('XavfYoqot' , 'sada')
  formdata.append('Pushaymon' , 'das')
  formdata.append('Yarashgan' , 'sda')
  formdata.append('Kasallik' , 'sad')
  formdata.append('AktiTufay' , 'asddas')
  formdata.append('userscol' , 'sa')
  formdata.append('IjYoq' , 'fsfd')
  formdata.append('AmaldaPushay' , 'asd')
  formdata.append('SAybliModda' , 'SAybliModda')
  formdata.append('SAybliQismi' , 'SAybliQismi')
  formdata.append('SAybliBandi' , 'SAybliBandi')
  formdata.append('SAydanVoz' , 'SAydanVoz')
  formdata.append('SJazoTuri' , 'SJazoTuri')
  formdata.append('SJazoMiq' , 'SJazoMiq')
  formdata.append('SShartli' , 'SShartli')
  formdata.append('S57Modda' , 'S57Modda')
  formdata.append('S96Modda' , 'S96Modda')
  formdata.append('SOtibket' , 'SOtibket')
  formdata.append('SIjXavf' , 'SIjXavf')
  formdata.append('SAmaldaPush' , 'SAmaldaPush')
  formdata.append('SYarshMun' , 'SYarshMun')
  formdata.append('SKasallik' , 'SKasallik') 
  formdata.append('SAktAs' , 'SAktAs')
  formdata.append('SYoq' , 'SYoq')
  formdata.append('SAmal' , 'SAmal')
  formdata.append('Ijkattabol' , "Ijkattabol")
  formdata.append('Unchaogir' , 'Unchaogir')
  formdata.append('Ogir' , 'Ogir')
  formdata.append('OtaOgir' , 'OtaOgir')

  axios.post(`${url}/works/person/${key}`,formdata).then(res=>{
     alert("yaratildi")
window.location.reload()  
  }).catch(err=>{
    console.log("err");
      console.log(err);
  })

}
DeleteData=(key)=>{
  let headers = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

  }
  console.log(key);
axios.delete(`${url}/works/${key}`, headers).then(res=>{
alert('o`chirildi')
  window.location.reload()  
}).catch(err=>{
  alert('qayta uruning') 
  window.location.reload()
})
}
  openModal2 = () => {
    document.querySelector(".Modal2").classList.add("openModal2")
  }
  close_modal = () => {
    document.querySelector(".Modal2").classList.remove("openModal2")
  }


  componentDidMount() {
    this.getData()
    this.openForm(1)
  }

  render() {
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
        render: (_, record) => {
        return  <div>
            <Button onClick={()=>{this.pushUser(record.WorkId)}} style={{ marginRight: '10px' }} type="primary">Push</Button>
            <Button style={{ marginRight: '10px' }} type="primary">Edit</Button>
            <Button onClick={()=>{this.DeleteData(record.WorkId)}} type="primary" danger>
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
                <input className="sel1 sel2" type='date' name="sel1" id="s2" />
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
                <input className="sel1 sel2" type="date" name="sel1" id="s24" />
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
                <input className="sel1 sel2" name="sel1" id="s39" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Shartli hukm qilish</label><br />
                <input className="sel1 sel2" name="sel1" id="s40" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">JKning 57-moddasini qo‘llash</label><br />
                <input className="sel1 sel2" name="sel1" id="s41" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">JKning 96-moddasini qo‘llash</label><br />
                <input className="sel1 sel2" name="sel1" id="s42" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Javobgarlikka tortish muddatining o‘tib ketganligi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s43" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Qilmish yoki shaxs ijtimoiy xavfliligini yo‘qotganligi</label><br />
                <input className="sel1 sel2" name="sel1" id="s44" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Aybdor o‘z qilmishiga amalda pushaymon bo‘lganligi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s45" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Yarashilganligi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s46" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Kasallik tufayli</label><br />
                <input className="sel1 sel2" name="sel1" id="s47" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Amnistiya akti asosida</label><br />
                <input className="sel1 sel2" name="sel1" id="s48" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Shaxsning ijtimoiy xavflilik xususiyatini yo‘qotishi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s49" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Aybdor o‘z qilmishiga amalda pushaymon bo‘lganligi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s50" />
              </div>
            </div>
          </div>
          <div className="form4">
            <Button className="abbas1" onClick={() => this.openForm(5)}>5-bo`limga o`tish</Button>
            <center><h3 style={{ color: 'white' }}>Sud natijasi</h3> </center>
            <div className="modal_body">
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Sud hukmi sanasi</label><br />
                <input className="sel1 sel2" type='date' name="sel1" id="s51" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Sud'ya F.I.Sh.</label><br />
                <input className="sel1 sel2" name="sel1" id="s52" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Aybli deb topish moddasi</label><br />
                <input className="sel1 sel2" name="sel1" id="s53" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Aybli deb topish qismi</label><br />
                <input className="sel1 sel2" name="sel1" id="s54" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Aybli deb topish bandi</label><br />
                <input className="sel1 sel2" name="sel1" id="s55" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Ayblovdan voz kechish</label><br />
                <input className="sel1 sel2" name="sel1" id="s56" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Jazo turi</label><br />
                <input className="sel1 sel2" name="sel1" id="s57" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Jazo miqdori</label><br />
                <input className="sel1 sel2" name="sel1" id="s58" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Shartli hukm qilish</label><br />
                <input className="sel1 sel2" name="sel1" id="s59" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">JKning 57-moddasini qo‘llash</label><br />
                <input className="sel1 sel2" name="sel1" id="s60" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">JKning 96-moddasini qo‘llash</label><br />
                <input className="sel1 sel2" name="sel1" id="s61" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Javobgarlikka tortish muddatining o‘tib ketganligi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s62" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Qilmish yoki shaxs ijtimoiy xavfliligini yo‘qotganligi</label><br />
                <input className="sel1 sel2" name="sel1" id="s63" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Aybdor o‘z qilmishiga amalda pushaymon bo‘lganligi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s64" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Yarashilganligi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s65" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Kasallik tufayli</label><br />
                <input className="sel1 sel2" name="sel1" id="s66" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Amnistiya akti asosida</label><br />
                <input className="sel1 sel2" name="sel1" id="s67" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Shaxsning ijtimoiy xavflilik xususiyatini yo‘qotishi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s68" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Aybdor o‘z qilmishiga amalda pushaymon bo‘lganligi munosabati bilan</label><br />
                <input className="sel1 sel2" name="sel1" id="s69" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Jinoyatning ijtimoiy xavflilik darajasi</label><br />
                <select className="sel1 sel2" name="sel1" id="s70">
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
                <input className="sel1 sel2" name="sel1" id="s71" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Qoraqalpog‘iston Respublikasi, viloyatlar, Toshkent shahar prokuraturasi xulosasi</label><br />
                <input className="sel1 sel2" name="sel1" id="s72" />
              </div>
              <div className="card1">
                <label htmlFor="sel1" className="sel2_text">Bosh prokuraturagning xulosasi</label><br />
                <input className="sel1 sel2" name="sel1" id="s73" />
              </div>

            </div>
          </div>
          <div className="form5">
            <Button className="abbas1" onClick={() => this.openForm(1)}>Boshiga qaytish</Button>

            <div className="modal_body">
              <Checkbox.Group style={{ width: '100%' }}>
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
            <Button className="abbas1" onClick={() => this.postData()}>.malumotni yuborish</Button>

         </div>
         



        </div>
      </>
    );
  }
}
