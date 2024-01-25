import Header from "../../reuseableComponents/header/header.component";
import Loader from "../../loader/loader.component";
import useLoading from "../../../hooks/useLoadingHook";
import { useGetAdminsQuery } from "../../../api/apiSlice";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";

const Admin: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
  const heading: string = "Admins";
  const subHeading: string = "Table showing all Admins.";
  const { data, isLoading } = useGetAdminsQuery();
  const [internalLoading] = useLoading(isLoading, 2000);

  return (
    <div className="overflow-y-auto overflow-x-auto flex flex-col gap-5 h-[78vh] w-[90vw] p-[25px] bg-white rounded-3xl">
      <div className=" flex gap-[2vw]">
        <div>
          <Header heading={heading} subHeading={subHeading} />
        </div>
      </div>
      {internalLoading ? (
        <div className="  flex justify-center items-center h-[78vh]">
          <Loader />
        </div>
      ) : (
        <Table >
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow className=" bg-gray-700">
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone no</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Occupation</TableHead>
              <TableHead className="text-right">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(({id,name, email, role,phone_number, country, occupation}, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{id}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{phone_number}</TableCell>
                <TableCell>{country}</TableCell>
                <TableCell>{occupation}</TableCell>
                
                <TableCell className="text-right">
                  {role}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          
        </Table>
      )}
    </div>
  );
};

export default Admin;
