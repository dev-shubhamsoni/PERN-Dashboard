import { useNavigate } from "react-router-dom";
import HandlePopupBoolValue from "../../../hooks/sendingPopupBoolValueHook";
import { Button } from "../../ui/button";
import { LogOutIcon } from "lucide-react";
import MobileMenu from "./mobileMenu/mobileMenu.component";

export const BottomBar = () => {
  const navigate = useNavigate();

  const { handleOpenCloseClientPopup } = HandlePopupBoolValue();

  const handleDashClick = () => {
    navigate("dashboard");
  };

  return (
    <div
      className="
        
        flex bg-[#fff] border-t-[2px] border-[#76a881] h-[4rem] w-[100%]"
    >
      <div className=" hidden md:flex bg-[#4caf50]  border-dashed w-[12rem] h-[4rem]  justify-center align-middle items-center">
        <p className=" text-[#fff]  hover:scale-[110%]  transition duration-500 ease-in-out">
          PERN Dashboard
        </p>
      </div>
      {/* buttons start */}
      <div className="flex justify-between items-center w-[100vw] mr-[5vw]">
        <div className=" hidden md:flex w-[100vw] md:w-[50vw] gap-[2vw] ml-[5vw]">
          <div className="max-w-[15vw] h-[4rem] flex justify-center items-center">
            <button
              onClick={() => {
                handleDashClick();
              }}
              className="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden h-12 w-[14vw] rounded-md bg-sky-200 p-2 flex justify-center items-center font-semibold"
            >
              <div className="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
              <div className="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
              <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
              <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
              <p className="z-10">Dashboard</p>
            </button>
          </div>
          <div className="max-w-[15vw] h-[4rem] flex justify-center items-center">
            <button
              onClick={() =>
                handleOpenCloseClientPopup("clientPopup", [
                  "salesPopup",
                  "overview",
                  "daily",
                  "monthly",
                  "breakdown",
                  "managementPopup",
                  "admin",
                  "performance",
                ])
              }
              className="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-12 w-[10vw] rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700"
            >
              <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
              <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-[#588157]"></div>
              <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
              <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
              <p className="z-10 absolute bottom-2 left-2">Client</p>
            </button>
          </div>
          <div className="max-w-[15vw] h-[4rem] flex justify-center items-center">
            <button
              onClick={() =>
                handleOpenCloseClientPopup("salesPopup", [
                  "clientPopup",
                  "customers",
                  "products",
                  "geography",
                  "transactions",
                  "managementPopup",
                  "admin",
                  "performance",
                ])
              }
              className="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-12 w-[10vw] rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700"
            >
              <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
              <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-[#005f73]"></div>
              <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
              <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
              <p className="z-10 absolute bottom-2 left-2">Sales</p>
            </button>
          </div>
          <div className=" md:max-w-[15vw] max-w-[50vw] h-[4rem] flex justify-center items-center">
            <button
              onClick={() =>
                handleOpenCloseClientPopup("managementPopup", [
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
                ])
              }
              className="border text-gray-50  duration-300 relative group cursor-pointer overflow-hidden h-12 md:w-[15vw] xl:w-[10vw] w-[20vw] rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700"
            >
              <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
              <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-[#936639]"></div>
              <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
              <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
              <p className="z-10 absolute bottom-2 left-2">Management</p>
            </button>
          </div>

          <div className="max-w-[15vw] h-[4rem] flex justify-center items-center"></div>
        </div>

        <div className=" md:hidden">
          
          <MobileMenu />

        </div>

        <div className="max-w-[15vw] h-[4rem] flex justify-center items-center md:border-l-2 md:max-lg:pl-2 lg:pl-10 mr-[2rem] md:mr-0 md:border-dashed border-[#000]">
          <Button className="bg-[#a4161a] gap-2 text-[1rem] font-medium md:max-lg:w-[12vw]">
            <LogOutIcon width="20px" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};
