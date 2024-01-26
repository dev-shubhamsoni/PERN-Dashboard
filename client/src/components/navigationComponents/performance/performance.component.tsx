import { useGetUserPerformanceQuery } from "../../../api/apiSlice";
import Header from "../../reuseableComponents/header/header.component";
import Loader from "../../loader/loader.component";
import useLoading from "../../../hooks/useLoadingHook";


const Performance: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
 
  const idUser = '63701cc1f03239b7f700000e';
  const heading = "Products";
  const subHeading = "See your list of Products";
  const { data, isLoading } = useGetUserPerformanceQuery(idUser);
  const [internalLoading] = useLoading(isLoading, 2000);

  return (
    <div className="scrollbarToHide flex flex-col gap-5 h-[78vh] w-[90vw] p-[25px] bg-white rounded-3xl overflow-y-auto">
      <div>
        <Header heading={heading} subHeading={subHeading} />
      </div>
      <div className=" flex justify-center  h-[60vh]">
        {internalLoading ? (
          <div className=" flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Performance;
