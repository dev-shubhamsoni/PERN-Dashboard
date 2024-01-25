import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import HandlePopupBoolValue from "../../../../hooks/sendingPopupBoolValueHook";
import { X, BadgeIndianRupeeIcon } from "lucide-react";
import "./popup.styles.css";

const SalesPopup = () => {

  const {handleOpenCloseClientPopup, navigateTo} = HandlePopupBoolValue();

  const handleClick = (trueName:string, falsename:string[] ) => {

    handleOpenCloseClientPopup(trueName, falsename);
    navigateTo(trueName);

  };

  const { sales} = useSelector(
    (state: RootState) => state.menuPopup
  );

  const overview = sales.overview;
  const daily = sales.daily;
  const monthly = sales.monthly;
  const breakdown = sales.breakdown;

  return (
    <div className="absolute bottom-16 DropDown max-w-[50vw] h-[20vh] bg-white rounded-t-3xl flex gap-[2vw] pr-[2vw] items-center">
      <div className=" flex flex-col justify-between items-center h-[17vh] w-[4vw] border-r-2">
        <X
          onClick={() =>
            handleOpenCloseClientPopup(undefined, [
              "salesPopup",
              "overview",
              "daily",
              "monthly",
              "breakdown"
            ])
          }
          className=" mt-[1vw] cursor-pointer hover:animate-bounce"
        />
        <BadgeIndianRupeeIcon className=" mb-[1vw]  hover:animate-bounce" />
      </div>
      <div className=" grid grid-cols-2 gap-x-[1vw] items-center h-[15vh]">


        <button
          onClick={() =>
            handleClick("overview", [
              "daily",
              "breakdown",
              "monthly",
            ])
          }
          className=" relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-10 w-[10vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold"
        >
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out  bg-[#005f73] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out  bg-[#008188] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#00928e] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#00a48e] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Overview</p>
        </button>


        <button
          onClick={() =>
            handleClick("daily", [
              "overview",
              "breakdown",
              "monthly",
            ])
          }
          className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-10 w-[10vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold"
        >
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#005f73] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#008188] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#00928e] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#00a48e] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Daily</p>
        </button>


        <button
          onClick={() =>
            handleClick("monthly", [
              "overview",
              "daily",
              "breakdown",
            ])
          }
          className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-10 w-[10vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold"
        >
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#005f73] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#008188] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#00928e] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#00a48e] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Monthly</p>
        </button>


        <button onClick={() =>
            handleClick("breakdown", [
              "overview",
              "daily",
              "monthly",
            ])
          } className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-10 w-[10vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold">
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#005f73] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#008188] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#00928e] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#00a48e] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Breakdown</p>
        </button>

      </div>


      {overview && (
        <div className="popLeft w-[20vw] p-[10px] border-l-2">
          <p>
            <span>Overview:</span>These are Overview
          </p>
        </div>
      )}

      {daily && (
        <div className="popLeft w-[20vw] p-[10px] border-l-2">
          <p>
            <span>Daily:</span>These are Daily
          </p>
        </div>
      )}

      {monthly && (
        <div className="popLeft w-[20vw] p-[10px] border-l-2">
          <p>
            <span>Monthly:</span>These are Monthly
          </p>
        </div>
      )}

      {breakdown && (
        <div className="popLeft w-[20vw] p-[10px] border-l-2">
          <p>
            <span>Breakdown:</span>These are Breakdown
          </p>
        </div>
      )}
    </div>
  );
};
export default SalesPopup;
