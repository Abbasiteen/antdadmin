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
   
  } from "antd";

  const columns = [
    {
      title: "Ism",
      dataIndex: "UserName",
      key: "function",
      width: "15%",
    },
    {
      title: "Sana",
      dataIndex: "Date",
      key: "function",
    },
  
    {
      title: "Jinsi",
      key: "status",
      dataIndex: "Jinsi",
    },
    {
      title: "Nogironligi",
      key: "employed",
      dataIndex: "Nogironligi",

    },
    {
        title: "Ish Joyi",
        dataIndex: "Ishjoyi",
        key: "function",
      },
      {
        title: "Lavozimi",
        dataIndex: "lavozimi",
        key: "function",
      },
      {
        title: "Oilaviy Ahvoli",
        dataIndex: "OilaAxvoli",
        key: "function",
      },
      {
        title: "Voyaga Yetmagan Farzandi",
        dataIndex: "VoyYetmaganFarzandi",
        key: "function",
      },
  ];

  






export default class Persons extends Component {


    state = {
        data: [],
        loading: true,
        isModalOpen: false
      }
      getPersons = () => {
        axios.get("https://prokror.onrender.com/works/person")
          .then(res => {
            this.setState({ data: res.data })
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(() => {
            this.setState({ loading: false })
          })
      }
    
      deletePerson=(id)=>{
        axios.delete(`https://purokror.onrender.com/works/person/${id}`).then(res=>{
          console.log("Deleted");
        }).catch(err=>{
          console.log(err);
        })
      }



    postPersons=()=>{
        console.log("Button");
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

    axios.post('https://prokror.onrender.com/works/person',formdata).then(res=>{
        console.log('created');
        this.getPersons()
    }).catch(err=>{
      console.log("err");
        console.log(err);
    })

    }


      componentDidMount() {
        this.getPersons()
      }



  render() {
    return (
      <div>
        <div className="tabled">
          <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
              <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="Projects Table"
                extra={
                  <>
                    <Radio.Group defaultValue="all">
                      <Radio.Button value="all">All</Radio.Button>
                      <Radio.Button value="online">ONLINE</Radio.Button>
                      <Radio.Button value="store">STORES</Radio.Button>
                    </Radio.Group>
                  </>
                }
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

                <div className="uploadfile pb-15 shadow-none">
                  <Button
                    onClick={()=>this.postPersons()}
                    className="ant-full-box" id="addBtn"
                    icon={<ToTopOutlined />}
                  >
                    Odam Qo'shish
                  </Button>
                  {/* <button onClick={()=> this.postPersons()}>New Person</button> */}

                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}