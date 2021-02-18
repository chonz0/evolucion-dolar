// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { useCallback } from "react";
import { ResponsiveLine } from "@nivo/line";
import ambito from "./data.json";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const Chart = ({ data /* see data tab */ }) => {
  const compra = {
    id: "Compra",
    data: []
  };
  const venta = {
    id: "Venta",
    data: []
  };

  ambito.map((tuple, index) => {
    if (index > 0) {
      const [date, buy, sell] = tuple;
      const [day, month, year] = date.split("-");
      //const newDate = new Date(Date.parse(`${year}-${month}-${day}`));
      //console.log(newDate.toLocaleDateString());
      compra.data.push({
        // x: newDate.toDateString(),
        x: `${year}-${month}-${day}`,
        y: parseInt(buy, 10)
      });
      venta.data.push({
        // x: newDate.toDateString(),
        x: `${year}-${month}-${day}`,
        y: parseInt(sell, 10)
      });
    }
  });

  const series = [compra, venta];

  const hover = true;
  const yScale = useCallback(() => {
    return {
      type: "linear"
      //min: minY,
      //max: maxY
    };
  }, []);

  const xScale = {
    type: "time",
    precision: "day",
    format: "%Y-%m-%d"
    // format: "%d"
  };

  const axisBottom = {
    format: "%Y-%m-%d",
    tickValues: "every 2 months",
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "Time",
    legendPosition: "middle",
    legendOffset: 25
  };

  const axisLeft = {
    legend: "Price",
    legendOffset: -32,
    legendPosition: "middle",
    tickSize: 0
    //tickValues: 2,
    //tickPadding: 4
  };

  let margin = {
    top: 10,
    right: 0,
    bottom: 30,
    left: 40
  };

  return (
    <ResponsiveLine
      curve={"monotoneX"}
      data={series}
      margin={margin}
      enableGridY={hover}
      enableGridX={hover}
      yScale={yScale()}
      xScale={xScale}
      axisBottom={axisBottom}
      axisLeft={axisLeft}
      enableSlices="x"
      sliceTooltip={({ slice }) => {
        return (
          <div
            style={{
              background: "white",
              padding: "9px 12px",
              border: "1px solid #ccc",
              fontSize: "12px"
            }}
          >
            {slice.points.map((point) => (
              <div
                key={point.id}
                style={{
                  color: point.serieColor,
                  padding: "3px 0"
                }}
              >
                {point.serieId}
                <div>
                  {point.data.xFormatted.toLocaleDateString()}:
                  <b> ${point.data.yFormatted}</b>
                </div>
              </div>
            ))}
          </div>
        );
      }}
      lineWidth={2}
      pointSize={0}
      //useMesh={true}
      crosshairType="cross"
      //tooltip={toolTipElement}
    />
  );
};

export default Chart;
