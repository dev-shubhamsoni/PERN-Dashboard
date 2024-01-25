import { SettingsOutlined, ArrowDropDownOutlined } from "@mui/icons-material";
import Person2Icon from "@mui/icons-material/Person2";
import { Input } from "../../ui/input";

// Define the types for your user data
type UserData = {
  name: string;
  occupation: string;
};

interface NavigationProps {
  userData: UserData;
}

const Navigation: React.FC<NavigationProps> = ({ userData }) => {

  
  return (
    <div className="min-h-[4rem] bg-[#fff] border-b-2 w-[100%] flex justify-between items-center px-[2vw]">
      <div>
        <Input
          className="border-b-[#4caf50] border-2 border-l-0 border-t-0 border-r-0 rounded-none focus:border-2 focus:border-[#4caf50] focus:rounded-xl 
          focus:ease-linear focus:transition focus:duration-1000"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex gap-4 justify-center items-center">
        <SettingsOutlined className="text-[#343540]" />
        <Person2Icon className="text-[#343540]" />
        <div>
          <p>{userData.name}</p>
          <p className=" text-[0.8rem] ">{userData.occupation}</p>
          {/* Access other properties as needed */}
        </div>
        <ArrowDropDownOutlined className="text-[#343540]" />
      </div>
    </div>
  );
};

export default Navigation;
