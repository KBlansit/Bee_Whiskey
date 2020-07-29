import React from "react";
import { render } from "react-dom";
import { ResponsiveSwarmPlot } from "@nivo/swarmplot";
import swarmData from "./swarmData.json";

const styles = {
  margin: "2em",
  height: "500px"
};

const App = () => {
  const [valueHolder, setValueHolder] = React.useState("___");
  return (
    <div style={styles}>
      <ResponsiveSwarmPlot
        data={swarmData}
        groups={["group A", "group B", "group C"]}
        value="price"
        valueFormat="$.2f"
        valueScale={{ type: "linear", min: 0, max: 500, reverse: false }}
        size={20}
        forceStrength={4}
        simulationIterations={260}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.6], ["opacity", 0.5]]
        }}
        margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
        axisTop={{
          orient: "top",
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legend: "group if vertical, price if horizontal",
          legendPosition: "middle",
          legendOffset: -46
        }}
        axisRight={{
          orient: "right",
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legend: "price if vertical, group if horizontal",
          legendPosition: "middle",
          legendOffset: 76
        }}
        axisBottom={{
          orient: "bottom",
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legend: "group if vertical, price if horizontal",
          legendPosition: "middle",
          legendOffset: 46
        }}
        axisLeft={{
          orient: "left",
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legend: "price if vertical, group if horizontal",
          legendPosition: "middle",
          legendOffset: -76
        }}
        motionStiffness={50}
        motionDamping={10}
        tooltip={input => {
          setValueHolder(input.node.value);
          return <div>heoo</div>;
        }}
      />
      <button onClick={() => setValueHolder("EEEE")}>
        Value is: {valueHolder}
      </button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
