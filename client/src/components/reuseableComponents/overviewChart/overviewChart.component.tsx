import { ResponsiveLine } from "@nivo/line";
import { useMemo } from "react";

type DailyData = {
  date: string;
  totalSales: number;
  totalUnits: number;
};

type MonthlyData = {
  id: number;
  month: string;
  totalSales: number;
  totalUnits: number;
};

type SalesByCat = {
  accessories: number;
  clothing: number;
  misc: number;
  shoes: number;
};

type DataTypes = {
  daily_data: DailyData;
  monthly_data: MonthlyData;
  sales_by_category: SalesByCat;
  total_customers: number;
  year: number;
  yearly_sales_total: string;
  yearly_total_sold_units: number;
};

type OverviewChartProps = {
  view: string;
  data: DataTypes[];
  isDashboard: boolean;
};

const OverviewChart: React.FC<OverviewChartProps> = ({
  isDashboard = false,
  view,
  data,
}) => {
  const [totalSalesLine, totalUnitsLine] = useMemo(() => {
    if (!data || data.length === 0) return [];

    const monthlyData = data[0].monthly_data;

    const totalSalesLine = [
      {
        id: "totalSales",
        color: "#000",
        data: monthlyData.map((entry) => ({
          x: entry.month,
          y: entry.totalSales,
        })),
      },
    ];

    const totalUnitsLine = [
      {
        id: "totalUnits",
        color: "#00f",
        data: monthlyData.map((entry) => ({
          x: entry.month,
          y: entry.totalUnits,
        })),
      },
    ];

    return [totalSalesLine, totalUnitsLine];
  }, [data]);



  return (
    <ResponsiveLine
      data={view === "sales" ? totalSalesLine : totalUnitsLine}
      margin={{ top: 20, right: 50, bottom: 50, left: 70 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      enableArea={isDashboard}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: (v) =>{
            if (isDashboard) return v.slice(0,3);
            return v;
        },
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? '' : "Month",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? '' : `Total ${view === 'sales' ? 'Revenue': 'units'} for year`,
        legendOffset: -60,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      colors={{ scheme: 'category10' }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={
        isDashboard ? undefined : [
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 50,
          translateY: -40,
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
  );
};

export default OverviewChart;
