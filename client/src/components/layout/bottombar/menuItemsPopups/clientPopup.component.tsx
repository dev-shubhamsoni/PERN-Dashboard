import {useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import HandlePopupBoolValue from "../../../../hooks/sendingPopupBoolValueHook";

import { X, HomeIcon } from "lucide-react";
import "./popup.styles.css";

const ClientPopup = () => {
  const {handleOpenCloseClientPopup, navigateTo} = HandlePopupBoolValue();

  const handleClick = (trueName:string, falsename:string[] ) => {

    handleOpenCloseClientPopup(trueName, falsename);
    navigateTo(trueName);

  };

  const { client} = useSelector(
    (state: RootState) => state.menuPopup
  );

  const products = client.products;
  const customers = client.customers;
  const transactions = client.transactions;
  const geography = client.geography;

  

  return (
    <div className="absolute bottom-16 DropDown max-w-[50vw] h-[20vh] bg-white rounded-t-3xl flex gap-[2vw] pr-[2vw] items-center">
      <div className=" flex flex-col justify-between items-center h-[17vh] w-[4vw] border-r-2">
        <X
          onClick={() =>
            handleOpenCloseClientPopup(undefined, [
              "clientPopup",
              "customers",
              "products",
              "geography",
              "transactions",
              "salesPopup",
              "overview",
              "daily",
              "monthly",
              "breakdown",
              "managementPopup",
              "admin",
              "performance"
            ])
          }
          className=" mt-[1vw] cursor-pointer hover:animate-bounce"
        />
        <HomeIcon className=" mb-[1vw]  hover:animate-bounce" />
      </div>
      <div className=" grid grid-cols-2 gap-x-[1vw] items-center h-[15vh]">
        <button
          onClick={() =>
            handleClick("products", [
              "customers",
              "transactions",
              "geography",
            ])
          }
          className=" relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-10 w-[10vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold"
        >
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#2f4858] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#236166] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#3e785f] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#588157] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Products</p>
        </button>
        <button
          onClick={() =>
            handleClick("customers", [
              "products",
              "transactions",
              "geography",
            ])
          }
          className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-10 w-[10vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold"
        >
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#2f4858] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#236166] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#3e785f] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#588157] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Customers</p>
        </button>
        <button
          onClick={() =>
            handleClick("transactions", [
              "customers",
              "products",
              "geography",
            ])
          }
          className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-10 w-[10vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold"
        >
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#2f4858] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#236166] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#3e785f] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#588157] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Transactions</p>
        </button>
        <button onClick={() =>
            handleClick("geography", [
              "customers",
              "products",
              "transactions",
            ])
          } className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-10 w-[10vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold">
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#2f4858] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#236166] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#3e785f] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#588157] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Geography</p>
        </button>
      </div>
      {products && (
        <div className="popLeft w-[20vw] p-[10px] border-l-2">
          <p>
            <span>Products:</span>These are prodcuts
          </p>
        </div>
      )}
      {customers && (
        <div className="popLeft w-[20vw] p-[10px] border-l-2">
          <p>
            <span>Customers:</span>These are prodcuts
          </p>
        </div>
      )}
      {transactions && (
        <div className="popLeft w-[20vw] p-[10px] border-l-2">
          <p>
            <span>Transctions:</span>These are prodcuts
          </p>
        </div>
      )}
      {geography && (
        <div className="popLeft w-[20vw] p-[10px] border-l-2">
          <p>
            <span>Geography:</span>These are prodcuts
          </p>
        </div>
      )}
    </div>
  );
};
export default ClientPopup;
