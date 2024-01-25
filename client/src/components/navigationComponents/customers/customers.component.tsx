import Header from "../../reuseableComponents/header/header.component";
import Loader from "../../loader/loader.component";
import useLoading from "../../../hooks/useLoadingHook";
import { columns } from "../../reuseableComponents/table/column";
import { useGetRoleUserQuery } from "../../../api/apiSlice";
import { DataTable } from "../../reuseableComponents/table/table";
import { useState, useEffect } from "react";
import '../../../../src/index.css'

interface Item {
  id: string;
  name: string;
  email: string;
  phone_number: number;
  country:string;
  occupation:string;
  role:string;
  // Add other properties as needed
}

const Customers: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
  const heading = "Customers";
  const subHeading = "List of Customers";

  const { data, isLoading, isSuccess } = useGetRoleUserQuery();
  const [newData, setNewData] = useState<Item[]>([]);
  const [internalLoading] = useLoading(isLoading, 2000);

  useEffect(() => {
    if (isSuccess) {
      const mappedData = data.map((item: Item) => ({
        id: item.id,
        name: item.name,
        email: item.email,
        phone_number: item.phone_number,
        country: item.country,
        occupation: item.occupation,
        role: item.role,
        
      }));
      setNewData(mappedData);
    }
  }, [isSuccess, data]);

  return (
    <div className="scrollbarToHide flex flex-col gap-5 h-[78vh] w-[90vw] p-[25px] bg-white rounded-3xl">
      <div>
        <Header heading={heading} subHeading={subHeading} />
      </div>
      {internalLoading ? (
          <div className=" flex justify-center items-center h-[78vh]">
            <Loader />
          </div>
        ) : (<div className="flex justify-center align-middle overflow-y-auto">
        <DataTable columns={columns} data={isSuccess ? data : {}} />
      </div>)}
    </div>
  );
};

export default Customers;
