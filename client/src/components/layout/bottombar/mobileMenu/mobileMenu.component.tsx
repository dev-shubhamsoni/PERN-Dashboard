import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../../ui/sheet";
import { Button } from "../../../ui/button";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MobileMenu = () => {
  const navigate = useNavigate();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className=" ml-[4vw]" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className=" rounded-2xl overflow-y-auto flex md:hidden h-[38rem] w-[60vw] justify-start items-center flex-col ">
       

        <button
          onClick={() => navigate("dashboard")}
          className=" mt-10 border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden h-12 w-[40vw] rounded-md bg-sky-200 p-2 flex justify-center items-center font-semibold"
        >
          <div className="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
          <div className="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
          <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
          <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
          <p className="z-10">Dashboard</p>
        </button>



        <button
          onClick={() => navigate("products")}
          className=" relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-12 w-[40vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold"
        >
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#2f4858] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#236166] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#3e785f] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#588157] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Products</p>
        </button>


        <button
          onClick={() => navigate("customers")}
          className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-12 w-[40vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold"
        >
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#2f4858] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#236166] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#3e785f] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#588157] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Customers</p>
        </button>

        <button
          onClick={() => navigate("transactions")}
          className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-12 w-[40vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold"
        >
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#2f4858] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#236166] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#3e785f] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#588157] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Transactions</p>
        </button>


        <button onClick={() => navigate("geography")} className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-12 w-[40vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold">
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#2f4858] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#236166] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#3e785f] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#588157] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Geography</p>
        </button>





        <button onClick={() => navigate("overview")}
          
          className=" relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-12 w-[40vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold"
        >
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out  bg-[#005f73] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out  bg-[#008188] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#00928e] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#00a48e] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Overview</p>
        </button>


        <button onClick={() => navigate("daily")}
          
          className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-12 w-[40vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold"
        >
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#005f73] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#008188] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#00928e] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#00a48e] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Daily</p>
        </button>


        <button onClick={() => navigate("monthly")}
          
          className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-12 w-[40vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold"
        >
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#005f73] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#008188] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#00928e] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#00a48e] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Monthly</p>
        </button>


        <button onClick={() => navigate("breakdown")}
        className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-12 w-[40vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold">
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#005f73] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#008188] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#00928e] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#00a48e] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Breakdown</p>
        </button>

        
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
