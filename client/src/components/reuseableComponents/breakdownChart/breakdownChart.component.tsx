import { ResponsivePie } from "@nivo/pie";
import { useGetSalesQuery } from "../../../api/apiSlice";

const BreakdownChart = ({ isDashboard = false, data}) => {
  
  const formatterData =
    data &&
    data.length > 0 &&
    data[0].sales_by_category &&
    data[0].sales_by_category.length > 0
      ? Object.entries(data[0].sales_by_category[0]).map(([category, sales]) => ({
          id: category,
          label: category,
          value: sales,
        }))
      : [];


  return (
    <div id="box-7"
      className={`h-[${isDashboard ? "400px" : "100%"}] 
    min-h-[${isDashboard ? "325px" : undefined}]
    min-w-[${isDashboard ? "325px" : undefined}] relative
    
    ${isDashboard ? 'rounded-lg p-[5px] bg-white w-[100%] col-span-12 row-span-3 lg:col-span-5 lg:row-span-4' : ''}
    `}
    >
      <ResponsivePie
        data={formatterData}
        margin={isDashboard ? { top: 10, right: 80, bottom: 60, left: 50 } : { top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLabels={!isDashboard}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: isDashboard ? 20 : 0,
            translateY: isDashboard ? 50 : 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default BreakdownChart;
