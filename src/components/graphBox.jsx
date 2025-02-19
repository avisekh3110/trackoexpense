import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function GraphBox() {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 300, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 200, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 278, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 189, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 239, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 349, pv: 4300, amt: 2100 },
    { name: "Page H", uv: 450, pv: 2400, amt: 2400 },
    { name: "Page I", uv: 320, pv: 1398, amt: 2210 },
    { name: "Page J", uv: 210, pv: 9800, amt: 2290 },
    { name: "Page K", uv: 278, pv: 3908, amt: 2000 },
    { name: "Page L", uv: 189, pv: 4800, amt: 2181 },
    { name: "Page M", uv: 239, pv: 3800, amt: 2500 },
    { name: "Page N", uv: 349, pv: 4300, amt: 2100 },
    { name: "Page O", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page P", uv: 300, pv: 1398, amt: 2210 },
    { name: "Page Q", uv: 200, pv: 9800, amt: 2290 },
    { name: "Page R", uv: 278, pv: 3908, amt: 2000 },
    { name: "Page S", uv: 189, pv: 4800, amt: 2181 },
    { name: "Page T", uv: 239, pv: 3800, amt: 2500 },
    { name: "Page U", uv: 349, pv: 4300, amt: 2100 },
    { name: "Page V", uv: 450, pv: 2400, amt: 2400 },
    { name: "Page W", uv: 320, pv: 1398, amt: 2210 },
    { name: "Page X", uv: 210, pv: 9800, amt: 2290 },
    { name: "Page Y", uv: 278, pv: 3908, amt: 2000 },
    { name: "Page Z", uv: 189, pv: 4800, amt: 2181 },
    { name: "Page AA", uv: 239, pv: 3800, amt: 2500 },
    { name: "Page AB", uv: 349, pv: 4300, amt: 2100 },
    { name: "Page AC", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page AD", uv: 300, pv: 1398, amt: 2210 },
  ];

  return (
    <div className="w-full h-96 flex flex-col gap-2 justify-center items-center bg-primary-a p-4 ">
      <div className="text-white font-bold text-xl tracking-widest">
        GRAPHICAL REPRESENTATION
      </div>
      <div
        className="h-full w-full bg-white
       rounded-md flex items-center justify-center"
      >
        <LineChart
          className="h-full w-full"
          height={300}
          width={1350}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
}
