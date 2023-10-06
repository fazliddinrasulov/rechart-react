import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Yanvar",
    chiqim: 4000,
    kirim: 2400,
    amt: 2400,
  },
  {
    name: "Fevral",
    chiqim: 3000,
    kirim: 1398,
    amt: 2210,
  },
  {
    name: "Mart",
    chiqim: 2000,
    kirim: 9800,
    amt: 2290,
  },
  {
    name: "Aprel",
    chiqim: 2780,
    kirim: 3908,
    amt: 2000,
  },
  {
    name: "May",
    chiqim: 1890,
    kirim: 4800,
    amt: 2181,
  },
  {
    name: "Iyun",
    chiqim: 2390,
    kirim: 3800,
    amt: 2500,
  },
  {
    name: "Avgust",
    chiqim: 3490,
    kirim: 4300,
    amt: 2100,
  },
  {
    name: "Sentyabr",
    chiqim: 3490,
    kirim: 7300,
    amt: 2100,
  },
  {
    name: "Oktyabr",
    chiqim: 3490,
    kirim: 2300,
    amt: 2100,
  },
  {
    name: "Noyabr",
    chiqim: 3490,
    kirim: 11300,
    amt: 2100,
  },
  {
    name: "Dekabr",
    chiqim: 3490,
    kirim: 10300,
    amt: 2100,
  },
];

export default class LinearChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%" className="linear-chart">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="kirim" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="chiqim" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
