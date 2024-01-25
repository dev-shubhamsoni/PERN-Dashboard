import Header from "../../reuseableComponents/header/header.component";
import Loader from "../../loader/loader.component";
import useLoading from "../../../hooks/useLoadingHook";
import { useGetSalesQuery } from "../../../api/apiSlice";
import { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "../../../lib/utils";
import { Button } from "../../ui/button";
import { Calendar } from "../../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { ResponsiveLine } from "@nivo/line";

const Daily: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(
    new Date("2021-02-01")
  );
  
  const [endDate, setEndDate] = useState<Date | undefined>(
    new Date("2021-03-01")
  );
  const heading: string = "Daily";
  const subHeading: string = "Chart showing daily data.";
  const { data, isLoading} = useGetSalesQuery();
  const [internalLoading] = useLoading(isLoading, 2000);

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2021, 1, 1),
    to: new Date(2021, 2, 1),
  });

  useEffect(() => {
    if (date !== undefined) {
      const { from, to } = date;

      if (from && to) {
        const startDate = from.toISOString().slice(0, 10);
        const endDate = to.toISOString().slice(0, 10);
        setStartDate(startDate);
        setEndDate(endDate);
      } else if (from) {
        const startDate = from.toISOString().slice(0, 10);
        setStartDate(startDate);
      }
    }
  }, [date]);

  const [formattedData] = useMemo(() => {
    if (!data) return [];

    const { daily_data } = data[0];

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

    Object.values(daily_data).forEach(({ date, totalSales, totalUnits }) => {
      const dateFormatted = new Date(date).toISOString().slice(0, 10);

      if (dateFormatted >= startDate && dateFormatted <= endDate) {
        const splitDate = date.substring(date.indexOf("-") + 1);

        totalSalesLine.data.push({ x: splitDate, y: totalSales });
        totalUnitsLine.data.push({ x: splitDate, y: totalUnits });
      }
    });

    const formattedData = [totalSalesLine, totalUnitsLine];
    return [formattedData];
  }, [data, startDate, endDate]);

  return (
    <div className="overflow-y-auto overflow-x-auto flex flex-col gap-5 h-[78vh] w-[90vw] p-[25px] bg-white rounded-3xl">
      <div className=" flex gap-[2vw]">
        <div>
          <Header heading={heading} subHeading={subHeading} />
        </div>
        <div>
          <div className={cn("grid gap-2")}>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-[300px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      {internalLoading ? (
        <div className="  flex justify-center items-center h-[78vh]">
          <Loader />
        </div>
      ) : (
        <ResponsiveLine
          data={formattedData}
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

export default Daily;
