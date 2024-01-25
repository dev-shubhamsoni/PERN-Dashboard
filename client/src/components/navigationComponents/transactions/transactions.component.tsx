import Header from "../../reuseableComponents/header/header.component";
import Loader from "../../loader/loader.component";
import { useState } from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
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

interface Transaction {
  user_id: string;
  id: string;
  products: string;
  cost: string;
}

const Transactions: React.FC<React.HTMLProps<HTMLFormElement>> = () => {
  const heading: string = "Transactions";
  const subHeading: string = "See your list of Transactions.";
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [entries, setEntries] = useState<number>(1);
  const [data, setdata] = useState<Transaction[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const callingApi = (e: React.FormEvent) => {
    e.preventDefault();
    finApi();
  };

  const callingNext = () => {
    if (page === 0) {
      alert("page no cannot be 0");
      setPage(1);
      return;
    }
    if (entries === 0) {
      alert("entries cannot be 0");
      setEntries(1);
      return;
    }
    setPage((prevPage) => prevPage + 1);
    setCounter((prevCounter) => prevCounter + 1);
    finApi();
  };

  const callingPrev = () => {
    if (page === 0) {
      alert("page no cannot be 0");
      setPage(1);
      return;
    }
    if (entries === 0) {
      alert("entries cannot be 0");
      setEntries(1);
      return;
    }
    setPage((prevPage) => prevPage - 1);
    setCounter(page);
    finApi();
  };

  const finApi = async () => {
    const res = await fetch(
      `http://localhost:4003/api/v1/client/transactions?page=${page}&pageSize=${entries}`
    );
    const data = await res.json();
    setdata(data);
    setIsLoading(false);
  };

  return (
    <div className="scrollbarToHide flex flex-col gap-5 h-[78vh] w-[90vw] p-[25px] bg-white rounded-3xl overflow-y-auto">
      <div className=" flex justify-between">
        <div>
          <Header heading={heading} subHeading={subHeading} />
        </div>
        <div>
          <form
            className=" flex gap-2 items-end"
            onSubmit={(e) => callingApi(e)}
          >
            <div className=" flex flex-col gap-1">
              <Label htmlFor="page" className=" text-[1rem] font-medium">
                Page no
              </Label>
              <Input
                id="page"
                type="number"
                onChange={(e) => setPage(Number(e.target.value))}
                value={page}
                className=" border-gray-600 border-2"
                placeholder="Page no"
                min="1"
              />
            </div>
            <div className=" flex flex-col gap-1">
              <Label htmlFor="entries" className=" text-[1rem] font-medium">
                No of entries per page
              </Label>
              <Input
                type="number"
                id="entries"
                onChange={(e) => setEntries(Number(e.target.value))}
                value={entries}
                className=" border-gray-600 border-2"
                min="1"
                max="500"
              />
            </div>
            <Button disabled={page && entries ? false : true}>Submit</Button>
          </form>
        </div>
      </div>
      <div className=" flex justify-center  h-[60vh]">
        {isLoading ? (
          <div className=" flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className=" flex gap-[3vw] mt-[1rem]">
            <div className=" flex justify-center items-start overflow-x-auto">
              <Table>
                <TableCaption>A list of your recent transactions</TableCaption>
                <TableHeader>
                  <TableRow className=" bg-gray-300 ">
                    <TableHead className=" text-black hover:text-white">
                      User Id
                    </TableHead>
                    <TableHead className=" text-black hover:text-white">
                      Id
                    </TableHead>
                    <TableHead className=" text-black hover:text-white">
                      Cost
                    </TableHead>
                    <TableHead className="text-cebter text-black hover:text-white">
                      Products Id
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((item: Transaction, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {item.user_id}
                      </TableCell>
                      <TableCell className="font-medium">{item.id}</TableCell>
                      <TableCell className="font-medium">{item.cost}</TableCell>
                      <TableCell className="font-medium">
                        {Object.entries(item.products).map((product, index) => {
                          return <p key={index}>{product}</p>;
                        })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={4}>Total</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
            <div className=" flex gap-[1vw]">
              <Button onClick={() => callingNext()}>Next</Button>
              <Button
                onClick={() => callingPrev()}
                disabled={page === 0 ? true : false}
              >
                Prev
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
