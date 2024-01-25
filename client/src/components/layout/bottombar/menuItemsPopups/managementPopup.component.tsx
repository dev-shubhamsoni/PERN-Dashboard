import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import HandlePopupBoolValue from "../../../../hooks/sendingPopupBoolValueHook";
import { X, User2Icon } from "lucide-react";
import "./popup.styles.css";

const ManagementPopup = () => {
  const { handleOpenCloseClientPopup, navigateTo } = HandlePopupBoolValue();

  const handleClick = (trueName:string, falsename:string[] ) => {

    handleOpenCloseClientPopup(trueName, falsename);
    navigateTo(trueName);

  };

  const { management } = useSelector((state: RootState) => state.menuPopup);

  const admin = management.admin;
  const performance = management.performance;

  return (
    <div className="absolute bottom-16 DropDown max-w-[50vw] h-[20vh] bg-white rounded-t-3xl flex gap-[2vw] pr-[2vw] items-center">
      <div className=" flex flex-col justify-between items-center h-[17vh] w-[4vw] border-r-2">
        <X
          onClick={() =>
            handleOpenCloseClientPopup(undefined, [
              "managementPopup",
              "admin",
              "perfomance",
            ])
          }
          className=" mt-[1vw] cursor-pointer hover:animate-bounce"
        />
        <User2Icon className=" mb-[1vw]  hover:animate-bounce" />
      </div>
      <div className=" grid grid-cols-2 gap-x-[1vw] items-center h-[15vh]">
        <button
          onClick={() => handleClick("admin", ["performance"])}
          className=" relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-10 w-[10vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold"
        >
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out  bg-[#664d6c] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out  bg-[#854d61] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#95554d] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#936639] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Admin</p>
        </button>

        <button
          onClick={() => handleClick("performance", ["admin"])}
          className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-10 w-[10vw] rounded-md bg-sky-800 p-2 flex justify-center items-center font-semibold"
        >
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#664d6c] delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#854d61] delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#95554d] delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#936639] delay-150 group-hover:delay-300"></div>
          <p className="z-10">Performance</p>
        </button>
      </div>

      {admin && (
        <div className="popLeft w-[20vw] p-[10px] border-l-2">
          <p>
            <span>Admin:</span>These are Admin
          </p>
        </div>
      )}

      {performance && (
        <div className="popLeft w-[20vw] p-[10px] border-l-2">
          <p>
            <span>Performance:</span>These are Performance
          </p>
        </div>
      )}
    </div>
  );
};
export default ManagementPopup;
