import Loader from "../../loader/loader.component";
import { ResponsivePie } from "@nivo/pie";
import useLoading from "../../../hooks/useLoadingHook";
import { useGetDashboardQuery } from "../../../api/apiSlice";
import { useGetSalesQuery } from "../../../api/apiSlice";
import Person2 from "@mui/icons-material/Person2";
import {
  BadgeIndianRupeeIcon,
  Tally4Icon,
  CalendarCheckIcon,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import BreakdownChart from "../../reuseableComponents/breakdownChart/breakdownChart.component";
import OverviewChart from "../../reuseableComponents/overviewChart/overviewChart.component";
import "./dashboard.css";

const Dashboard: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
  const { data, isLoading, isSuccess } = useGetDashboardQuery();
  const {
    data: salesData,
    isLoading: salesIsLoading,
    isSuccess: salesIsSuccess,
  } = useGetSalesQuery();


  const [internalLoading] = useLoading(isLoading, 2000);

  const formatterData =
    salesData &&
    salesData.length > 0 &&
    salesData[0].sales_by_category &&
    salesData[0].sales_by_category.length > 0
      ? Object.entries(salesData[0].sales_by_category[0]).map(([category, sales]) => ({
          id: category,
          label: category,
          value: sales,
        }))
      : [];

  return (
    <div className="scrollbarToHide flex-wrap overflow-y-auto gap-5 h-[36rem] w-[90vw] p-[15px] rounded-3xl flex justify-between items-center ">
      {internalLoading ? (
        <div className="  flex justify-center items-center h-[78vh] w-[90vw]">
          <Loader />
        </div>
      ) : (
        <div className=" gap-2 container-1 grid grid-cols-12 grid-rows-12 lg:grid-rows-6  h-[100rem] lg:h-[60rem] w-[100%] rounded-lg ">
          <div
            id="box-1"
            className="hover:scale-105 transition duration-500 col-span-12 lg:col-span-2 lg:row-span-1 rounded-lg p-[15px] bg-white flex flex-col justify-between"
          >
            <div className=" flex justify-between">
              <p>Total Customers</p>
              <Person2 className="text-[#219ebc]" />
            </div>
            <p className=" text-[1.2rem] ">
              {isSuccess
                ? data.userOverallstat[0].total_customers
                : "...loading"}
            </p>
            <div className="  flex justify-between ">
              <p className="italic text-[#f6bd60] text-[0.9rem]">+14%</p>
              <p className="text-[0.9rem]">Since Last Month</p>
            </div>
          </div>
          <div
            id="box-2"
            className="hover:scale-105 transition duration-500 col-span-12 lg:col-span-2 lg:row-span-1 rounded-lg p-[15px]  bg-white flex flex-col justify-between"
          >
            <div className=" flex justify-between">
              <p>Sales today</p>
              <BadgeIndianRupeeIcon className="text-[#3a5a40]" />
            </div>
            <p className=" text-[1.2rem] ">7916</p>
            <div className="  flex justify-between">
              <p className="italic text-[#f6bd60] text-[0.9rem]">+21%</p>
              <p className="text-[0.9rem]">Since Last Month</p>
            </div>
          </div>
          <div
            id="box-3"
            className="col-span-12 row-span-2 lg:col-span-8 lg:row-span-2 rounded-lg p-[5px] bg-white "
          >
            <OverviewChart
              view="sales"
              isDashboard={true}
              data={salesIsSuccess ? salesData : {}}
            />
          </div>
          <div
            id="box-4"
            className="hover:scale-105 transition duration-500 col-span-12 lg:col-span-2 rounded-lg p-[15px]  bg-white flex flex-col justify-between"
          >
            <div className=" flex justify-between">
              <p>Monthly sales</p>
              <Tally4Icon className="text-[#e07a5f]" />
            </div>
            <p className=" text-[1.2rem] ">
              {isSuccess
                ? data.userOverallstat[0].monthly_data[10].totalSales
                : "...loading"}
            </p>
            <div className="  flex justify-between">
              <p className="italic text-[#f6bd60] text-[0.9rem]">+5%</p>
              <p className="text-[0.9rem]">Since Last Month</p>
            </div>
          </div>
          <div
            id="box-5"
            className="hover:scale-105 transition duration-500 col-span-12 lg:col-span-2 rounded-lg p-[15px]  bg-white flex flex-col justify-between"
          >
            <div className=" flex justify-between">
              <p>Yearly sales</p>
              <CalendarCheckIcon className="text-[#6d597a]" />
            </div>
            <p className=" text-[1.2rem] ">
              {isSuccess
                ? data.userOverallstat[0].yearly_sales_total
                : "...loading"}
            </p>
            <div className="  flex justify-between">
              <p className="italic text-[#f6bd60] text-[0.9rem]">+43%</p>
              <p className="text-[0.9rem]">Since Last Month</p>
            </div>
          </div>

          <div
            id="box-6"
            className=" scrollbarToHide col-span-12 row-span-3 lg:col-span-7 lg:row-span-4 rounded-lg p-[5px] bg-white overflow-y-auto "
          >
            <Table  className=" ">
              <TableHeader>
                <TableRow className=" bg-gray-700 ">
                  <TableHead className="w-[50px]">Id</TableHead>
                  <TableHead className="w-[500px]">User Id</TableHead>
                  <TableHead className="w-[500px]">Products</TableHead>
                  <TableHead className=" text-right w-[500px]">Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isSuccess &&
                  data.userTransaction.map(
                    ({ id, user_id, products, cost }, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium text-[0.8rem]">
                          {id}
                        </TableCell>
                        <TableCell className=" text-[0.8rem]">
                          {user_id}
                        </TableCell>
                        <TableCell className=" text-[0.8rem]">
                          {products.map((item)=>{
                            return ` ${item}`
                          })}
                        </TableCell>
                        <TableCell className="text-right text-[0.8rem]">
                          {cost}
                        </TableCell>
                      </TableRow>
                    )
                  )}
              </TableBody>
              
            </Table>
            
          </div>

          <div 
      className={`h-["400px"] 
    min-h-["325px" ]
    min-w-["325px" ] relative
    
    rounded-lg p-[5px] bg-white w-[100%] col-span-12 row-span-3 lg:col-span-5 lg:row-span-4' 
    `}
    >
      <ResponsivePie
        data={formatterData}
        margin={{ top: 10, right: 80, bottom: 60, left: 50 } }
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLabels={true}
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
            translateX: 20,
            translateY: 50 ,
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
        </div>
      )}
    </div>
  );
};

export default Dashboard;
