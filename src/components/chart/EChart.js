

import ReactApexChart from "react-apexcharts";
import { Row, Col, Typography } from "antd";
import eChart from "./configs/eChart";

function EChart() {
  const { Title, Paragraph } = Typography;

  const items = [
    {
      Title: "3",
      user: "keldi",
    },
    {
      Title: "20",
      user: "gaplashdi",
    },
    {
      Title: "$300",
      user: "oyligi",
    },
    {
      Title: "17",
      user: "kelmadi",
    },
  ];

  return (
    <>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={eChart.options}
          series={eChart.series}
          type="bar"
          height={220}
        />
      </div>
      <div className="chart-vistior">
        <Title level={5}>Operatorlarni oylik aktivligi</Title>
        <Paragraph className="lastweek">
          o`tgan oylik natija<span className="bnb2">+30%</span>
        </Paragraph>
        <Paragraph className="lastweek">
        operatorlar aktivligi ularning qongiroqlarga qanchalik kop odamlarni ushlab qolishi bilan baxolanadi
        </Paragraph>
        <Row gutter>
          {items.map((v, index) => (
            <Col xs={6} xl={6} sm={6} md={6} key={index}>
              <div className="chart-visitor-count">
                <Title level={4}>{v.Title}</Title>
                <span>{v.user}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default EChart;
