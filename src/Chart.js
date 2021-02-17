// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { useCallback } from "react";
import { ResponsiveLine } from "@nivo/line";
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
  const ambito = [
    ["Fecha", "Compra", "Venta"],
    ["12-02-2021", "145,00", "150,00"],
    ["11-02-2021", "144,00", "149,00"],
    ["10-02-2021", "146,00", "151,00"],
    ["09-02-2021", "147,00", "152,00"],
    ["08-02-2021", "146,00", "151,00"],
    ["08-02-2021", "146,00", "151,00"],
    ["08-02-2021", "146,00", "151,00"],
    ["08-02-2021", "146,00", "151,00"],
    ["05-02-2021", "146,00", "151,00"],
    ["04-02-2021", "145,00", "150,00"],
    ["03-02-2021", "148,00", "153,00"],
    ["02-02-2021", "148,00", "153,00"],
    ["01-02-2021", "148,00", "153,00"],
    ["29-01-2021", "148,00", "153,00"],
    ["28-01-2021", "149,00", "154,00"],
    ["27-01-2021", "149,00", "154,00"],
    ["26-01-2021", "151,00", "156,00"],
    ["25-01-2021", "151,00", "156,00"],
    ["22-01-2021", "151,00", "156,00"],
    ["22-01-2021", "151,00", "156,00"],
    ["21-01-2021", "151,00", "156,00"],
    ["20-01-2021", "151,00", "156,00"],
    ["19-01-2021", "152,00", "157,00"],
    ["15-01-2021", "153,00", "159,00"],
    ["14-01-2021", "153,00", "159,00"],
    ["13-01-2021", "154,00", "160,00"],
    ["12-01-2021", "153,00", "159,00"],
    ["11-01-2021", "153,00", "159,00"],
    ["08-01-2021", "155,00", "161,00"],
    ["07-01-2021", "156,00", "162,00"],
    ["06-01-2021", "154,00", "160,00"],
    ["05-01-2021", "154,00", "160,00"],
    ["04-01-2021", "159,00", "165,00"],
    ["30-12-2020", "160,00", "166,00"],
    ["29-12-2020", "159,00", "165,00"],
    ["28-12-2020", "158,00", "164,00"],
    ["23-12-2020", "153,00", "159,00"],
    ["22-12-2020", "146,00", "152,00"],
    ["22-12-2020", "145,00", "151,00"],
    ["21-12-2020", "144,00", "150,00"],
    ["18-12-2020", "144,00", "150,00"],
    ["17-12-2020", "143,00", "149,00"],
    ["16-12-2020", "144,00", "150,00"],
    ["15-12-2020", "145,00", "151,00"],
    ["14-12-2020", "145,00", "151,00"],
    ["11-12-2020", "142,00", "148,00"],
    ["10-12-2020", "140,00", "146,00"],
    ["09-12-2020", "143,00", "149,00"],
    ["04-12-2020", "144,00", "150,00"],
    ["03-12-2020", "145,00", "151,00"],
    ["02-12-2020", "147,00", "153,00"],
    ["01-12-2020", "147,00", "153,00"],
    ["30-11-2020", "149,00", "155,00"],
    ["27-11-2020", "150,00", "156,00"],
    ["26-11-2020", "151,00", "157,00"],
    ["25-11-2020", "152,00", "158,00"],
    ["24-11-2020", "154,00", "160,00"],
    ["20-11-2020", "155,00", "161,00"],
    ["19-11-2020", "157,00", "163,00"],
    ["18-11-2020", "158,00", "164,00"],
    ["17-11-2020", "157,00", "163,00"],
    ["16-11-2020", "156,00", "162,00"],
    ["13-11-2020", "166,00", "172,00"],
    ["12-11-2020", "161,00", "167,00"],
    ["11-11-2020", "156,00", "162,00"],
    ["10-11-2020", "143,00", "149,00"],
    ["09-11-2020", "145,00", "151,00"],
    ["06-11-2020", "151,00", "157,00"],
    ["05-11-2020", "151,00", "157,00"],
    ["04-11-2020", "155,00", "161,00"],
    ["03-11-2020", "159,00", "165,00"],
    ["02-11-2020", "162,00", "168,00"],
    ["30-10-2020", "163,00", "169,00"],
    ["29-10-2020", "169,00", "175,00"],
    ["28-10-2020", "172,00", "178,00"],
    ["27-10-2020", "175,00", "181,00"],
    ["26-10-2020", "184,00", "190,00"],
    ["23-10-2020", "189,00", "195,00"],
    ["22-10-2020", "184,00", "190,00"],
    ["21-10-2020", "177,00", "183,00"],
    ["20-10-2020", "174,00", "180,00"],
    ["19-10-2020", "175,00", "181,00"],
    ["16-10-2020", "172,00", "178,00"],
    ["15-10-2020", "165,00", "171,00"],
    ["14-10-2020", "161,00", "167,00"],
    ["13-10-2020", "160,00", "166,00"],
    ["09-10-2020", "161,00", "167,00"],
    ["08-10-2020", "152,00", "158,00"],
    ["07-10-2020", "149,00", "155,00"],
    ["06-10-2020", "146,00", "152,00"],
    ["05-10-2020", "144,00", "150,00"],
    ["02-10-2020", "144,00", "150,00"],
    ["01-10-2020", "141,00", "147,00"],
    ["30-09-2020", "140,00", "146,00"],
    ["29-09-2020", "140,00", "146,00"],
    ["28-09-2020", "139,00", "145,00"],
    ["25-09-2020", "139,00", "145,00"],
    ["24-09-2020", "141,00", "147,00"],
    ["23-09-2020", "139,00", "145,00"],
    ["22-09-2020", "138,00", "144,00"],
    ["21-09-2020", "135,00", "141,00"],
    ["18-09-2020", "134,00", "140,00"],
    ["17-09-2020", "135,00", "141,00"],
    ["16-09-2020", "135,00", "145,00"],
    ["15-09-2020", "127,00", "131,00"],
    ["14-09-2020", "128,00", "132,00"],
    ["11-09-2020", "127,00", "131,00"],
    ["10-09-2020", "127,00", "131,00"],
    ["09-09-2020", "127,00", "131,00"],
    ["08-09-2020", "127,00", "131,00"],
    ["07-09-2020", "127,00", "131,00"],
    ["04-09-2020", "128,00", "132,00"],
    ["03-09-2020", "130,00", "134,00"],
    ["02-09-2020", "129,00", "133,00"],
    ["01-09-2020", "129,00", "133,00"],
    ["31-08-2020", "131,00", "135,00"],
    ["28-08-2020", "132,00", "136,00"],
    ["27-08-2020", "134,00", "138,00"],
    ["26-08-2020", "133,00", "137,00"],
    ["25-08-2020", "133,00", "137,00"],
    ["24-08-2020", "133,00", "137,00"],
    ["21-08-2020", "134,00", "138,00"],
    ["20-08-2020", "131,00", "136,00"],
    ["19-08-2020", "129,00", "134,00"],
    ["18-08-2020", "127,00", "132,00"],
    ["17-08-2020", "127,00", "132,00"],
    ["14-08-2020", "127,00", "132,00"],
    ["13-08-2020", "128,00", "133,00"],
    ["12-08-2020", "127,00", "132,00"],
    ["11-08-2020", "126,00", "131,00"],
    ["10-08-2020", "126,00", "131,00"],
    ["07-08-2020", "128,00", "133,00"],
    ["07-08-2020", "127,00", "132,00"],
    ["07-08-2020", "127,00", "132,00"],
    ["07-08-2020", "127,00", "132,00"],
    ["06-08-2020", "127,00", "132,00"],
    ["06-08-2020", "125,00", "130,00"],
    ["05-08-2020", "124,00", "129,00"],
    ["04-08-2020", "123,00", "128,00"],
    ["03-08-2020", "131,00", "136,00"],
    ["31-07-2020", "131,00", "136,00"],
    ["30-07-2020", "131,00", "136,00"],
    ["29-07-2020", "130,00", "135,00"],
    ["28-07-2020", "130,00", "135,00"],
    ["27-07-2020", "131,00", "136,00"],
    ["24-07-2020", "134,00", "139,00"],
    ["23-07-2020", "131,00", "136,00"],
    ["22-07-2020", "128,00", "133,00"],
    ["21-07-2020", "127,00", "132,00"],
    ["20-07-2020", "125,00", "130,00"],
    ["17-07-2020", "125,00", "130,00"],
    ["16-07-2020", "120,00", "130,00"],
    ["15-07-2020", "117,00", "127,00"],
    ["14-07-2020", "117,00", "127,00"],
    ["13-07-2020", "117,00", "127,00"],
    ["10-07-2020", "117,00", "127,00"],
    ["10-07-2020", "117,00", "127,00"],
    ["08-07-2020", "117,00", "127,00"],
    ["07-07-2020", "117,00", "127,00"],
    ["06-07-2020", "117,00", "127,00"],
    ["03-07-2020", "117,00", "127,00"],
    ["02-07-2020", "119,00", "129,00"],
    ["01-07-2020", "118,00", "128,00"],
    ["30-06-2020", "116,00", "126,00"],
    ["29-06-2020", "119,00", "129,00"],
    ["26-06-2020", "119,00", "129,00"],
    ["25-06-2020", "118,00", "128,00"],
    ["24-06-2020", "118,00", "128,00"],
    ["23-06-2020", "117,00", "127,00"],
    ["22-06-2020", "117,00", "127,00"],
    ["19-06-2020", "118,00", "128,00"],
    ["18-06-2020", "117,00", "127,00"],
    ["17-06-2020", "114,00", "124,00"],
    ["16-06-2020", "115,00", "125,00"],
    ["12-06-2020", "116,00", "126,00"],
    ["11-06-2020", "113,00", "123,00"],
    ["10-06-2020", "114,00", "124,00"],
    ["09-06-2020", "114,00", "124,00"],
    ["08-06-2020", "115,00", "125,00"],
    ["05-06-2020", "115,00", "125,00"],
    ["04-06-2020", "113,00", "123,00"],
    ["03-06-2020", "113,00", "123,00"],
    ["02-06-2020", "114,00", "124,00"],
    ["01-06-2020", "118,00", "128,00"],
    ["29-05-2020", "115,00", "125,00"],
    ["28-05-2020", "114,00", "124,00"],
    ["27-05-2020", "117,00", "127,00"],
    ["26-05-2020", "119,00", "129,00"],
    ["22-05-2020", "116,00", "126,00"],
    ["21-05-2020", "115,00", "125,00"],
    ["20-05-2020", "114,00", "124,00"],
    ["19-05-2020", "114,00", "124,00"],
    ["18-05-2020", "118,00", "128,00"],
    ["15-05-2020", "128,00", "138,00"],
    ["14-05-2020", "128,00", "138,00"],
    ["13-05-2020", "123,00", "133,00"],
    ["12-05-2020", "117,00", "127,00"],
    ["11-05-2020", "114,50", "124,50"],
    ["08-05-2020", "112,00", "122,00"],
    ["07-05-2020", "112,00", "122,00"],
    ["06-05-2020", "112,00", "122,00"],
    ["05-05-2020", "110,00", "120,00"],
    ["04-05-2020", "110,00", "120,00"],
    ["30-04-2020", "108,00", "118,00"],
    ["29-04-2020", "111,00", "121,00"],
    ["28-04-2020", "110,00", "120,00"],
    ["27-04-2020", "108,00", "118,00"],
    ["24-04-2020", "107,00", "117,00"],
    ["23-04-2020", "110,00", "120,00"],
    ["22-04-2020", "100,00", "110,00"],
    ["21-04-2020", "98,00", "107,00"],
    ["20-04-2020", "96,00", "105,00"],
    ["17-04-2020", "96,00", "105,00"],
    ["16-04-2020", "95,00", "100,00"],
    ["15-04-2020", "90,00", "96,00"],
    ["14-04-2020", "85,00", "90,00"],
    ["13-04-2020", "84,25", "89,25"],
    ["08-04-2020", "80,00", "85,00"],
    ["07-04-2020", "80,00", "85,00"],
    ["06-04-2020", "80,00", "85,00"],
    ["03-04-2020", "78,50", "83,50"],
    ["02-04-2020", "78,50", "83,50"],
    ["01-04-2020", "79,50", "83,50"],
    ["30-03-2020", "78,50", "83,50"],
    ["27-03-2020", "78,50", "83,50"],
    ["26-03-2020", "79,50", "84,50"],
    ["25-03-2020", "79,50", "84,50"],
    ["20-03-2020", "80,50", "85,50"],
    ["19-03-2020", "81,50", "85,50"],
    ["18-03-2020", "84,25", "89,25"],
    ["17-03-2020", "82,50", "86,50"],
    ["16-03-2020", "81,00", "85,00"],
    ["13-03-2020", "79,75", "83,75"],
    ["12-03-2020", "79,00", "83,00"],
    ["11-03-2020", "76,00", "80,00"],
    ["10-03-2020", "75,75", "79,75"],
    ["09-03-2020", "75,50", "79,50"],
    ["06-03-2020", "74,50", "78,50"],
    ["05-03-2020", "74,50", "78,50"],
    ["04-03-2020", "74,50", "78,50"],
    ["03-03-2020", "74,50", "78,50"],
    ["02-03-2020", "74,50", "78,50"],
    ["28-02-2020", "74,50", "78,50"],
    ["27-02-2020", "74,50", "78,50"],
    ["26-02-2020", "74,70", "78,70"],
    ["21-02-2020", "74,80", "78,80"],
    ["20-02-2020", "74,80", "78,80"],
    ["19-02-2020", "74,90", "78,90"],
    ["18-02-2020", "74,70", "78,70"],
    ["17-02-2020", "74,00", "78,00"],
    ["14-02-2020", "73,90", "77,90"],
    ["13-02-2020", "74,90", "78,90"],
    ["12-02-2020", "74,25", "78,25"],
    ["11-02-2020", "73,50", "77,50"],
    ["10-02-2020", "73,00", "77,00"],
    ["07-02-2020", "73,50", "77,50"],
    ["06-02-2020", "73,50", "77,50"],
    ["05-02-2020", "74,00", "78,00"],
    ["04-02-2020", "74,00", "78,00"],
    ["03-02-2020", "74,00", "78,00"],
    ["31-01-2020", "74,00", "78,00"],
    ["30-01-2020", "74,00", "78,00"],
    ["29-01-2020", "74,25", "78,25"],
    ["28-01-2020", "74,25", "78,25"],
    ["27-01-2020", "74,00", "78,00"],
    ["24-01-2020", "74,50", "78,50"],
    ["23-01-2020", "73,75", "77,75"],
    ["22-01-2020", "73,75", "77,75"],
    ["21-01-2020", "73,50", "77,50"],
    ["20-01-2020", "74,00", "78,00"],
    ["17-01-2020", "73,75", "77,75"],
    ["16-01-2020", "73,75", "77,75"],
    ["15-01-2020", "74,00", "78,00"],
    ["14-01-2020", "73,50", "77,50"],
    ["13-01-2020", "71,50", "76,50"],
    ["10-01-2020", "71,50", "76,50"],
    ["09-01-2020", "71,50", "76,50"],
    ["08-01-2020", "71,50", "76,50"],
    ["07-01-2020", "71,25", "76,25"],
    ["06-01-2020", "72,25", "77,25"],
    ["03-01-2020", "72,00", "77,00"],
    ["02-01-2020", "72,00", "77,00"]
  ];

  // console.log(Date.parse("2021-01-03"));

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
