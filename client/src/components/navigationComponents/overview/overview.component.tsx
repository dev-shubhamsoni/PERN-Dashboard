import Header from "../../reuseableComponents/header/header.component";
import Loader from "../../loader/loader.component";
import useLoading from "../../../hooks/useLoadingHook";
import { useGetSalesQuery } from "../../../api/apiSlice";
import { useState } from "react";
import OverviewChart from "../../reuseableComponents/overviewChart/overviewChart.component";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const Overview: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
  const heading: string = "Overview";
  const subHeading: string = "Chart showing overall sales.";
  const { data, isLoading, isSuccess } = useGetSalesQuery();
  const [internalLoading] = useLoading(isLoading, 2000);
  const [view, setView] = useState<string>("units");

  const valueChange = (value: string) => {
    setView(value);
  }

  return (
    <div className="overflow-y-auto overflow-x-auto flex flex-col gap-5 h-[78vh] w-[90vw] p-[25px] bg-white rounded-3xl">
      <div className=" flex gap-[2vw]">
        <div>
          <Header heading={heading} subHeading={subHeading} />
        </div>
        <div>
          <Select value={view} onValueChange={(value) => valueChange(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a view" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                
                <SelectItem value="sales">Total Sales</SelectItem>

                

                <SelectItem value="units">Total Units</SelectItem>
                
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {internalLoading ? (
        <div className="  flex justify-center items-center h-[78vh]">
          <Loader />
        </div>
      ) : (
        <OverviewChart view={view} data={isSuccess ? data : {}} />
      )}
    </div>
  );
};

export default Overview;
