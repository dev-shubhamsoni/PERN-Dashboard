import Header from "../../reuseableComponents/header/header.component";
import Loader from "../../loader/loader.component";
import useLoading from "../../../hooks/useLoadingHook";
import { useGetSalesQuery } from "../../../api/apiSlice";
import { ResponsiveLine } from "@nivo/line";
import { useMemo } from "react";

const Monthly: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
  const heading: string = "Monthly";
  const subHeading: string = "Chart showing monthly data.";
  const { data, isLoading } = useGetSalesQuery();
  const [internalLoading] = useLoading(isLoading, 2000);

  const [formattedData] = useMemo(() => {
    if (!data) return [];

    const { monthly_data } = data[0];

    const totalSalesLine = {
      id: "totalSales",
      color: "#6a040f",
      data: [] as { x: string; y: number }[],
    };

    const totalUnitsLine = {
      id: "totalUnits",
      color: "#9d8189",
      data: [] as { x: string; y: number }[],
    };

    Object.values(monthly_data).forEach(({ month, totalSales, totalUnits }) => {
      totalSalesLine.data.push({ x: month, y: totalSales });
      totalUnitsLine.data.push({ x: month, y: totalUnits });
    });

    console.log(totalSalesLine, totalUnitsLine);

    const formattedData = [totalSalesLine, totalUnitsLine];
    return [formattedData];
  }, [data]);
  return (
    <div className="overflow-y-auto overflow-x-auto flex flex-col gap-5 h-[78vh] w-[90vw] p-[25px] bg-white rounded-3xl">
      <Header heading={heading} subHeading={subHeading} />

      {internalLoading ? (
        <div className="  flex justify-center items-center h-[78vh]">
          <Loader />
        </div>
      ) : (
        <ResponsiveLine
          data={ formattedData }
          // colors={{datum: "color"}}
          margin={{ top: 50, right: 70, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          curve="catmullRom"
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            format: (v) => {
              return v;
            },
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 45,
            legend: "Month",
            legendOffset: 60,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Total",
            legendOffset: -50,
            legendPosition: "middle",
          }}
          enableGridX={false}
          enableGridY={false}
          pointSize={6}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "top-right",
              direction: "column",
              justify: false,
              translateX: 50,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      )}
    </div>
  );
};

export default Monthly;
