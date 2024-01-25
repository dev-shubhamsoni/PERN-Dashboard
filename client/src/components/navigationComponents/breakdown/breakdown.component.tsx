import Header from "../../reuseableComponents/header/header.component";
import Loader from "../../loader/loader.component";
import useLoading from "../../../hooks/useLoadingHook";
import { useGetSalesQuery } from "../../../api/apiSlice";
import BreakdownChart from "../../reuseableComponents/breakdownChart/breakdownChart.component";


const Breakdown: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
  const heading: string = "Breakdown";
  const subHeading: string = "Pie Chart showing Breakdown by categories.";
  const { data, isLoading, isSuccess } = useGetSalesQuery();
  const [internalLoading] = useLoading(isLoading, 2000);

  return (
    <div className="overflow-y-auto overflow-x-auto flex flex-col gap-5 h-[78vh] w-[90vw] p-[25px] bg-white rounded-3xl">
      <Header heading={heading} subHeading={subHeading} />

      {internalLoading ? (
        <div className="  flex justify-center items-center h-[78vh]">
          <Loader />
        </div>
      ) : (
        <BreakdownChart data={isSuccess ? data : {}}/>
      )}
    </div>
  );
};

export default Breakdown;
