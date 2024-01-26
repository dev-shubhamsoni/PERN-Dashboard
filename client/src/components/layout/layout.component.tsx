import { BottomBar } from "./bottombar/bottomBar.component";
import Navigation from "./navigation/navigation.component";
import { Outlet } from "react-router-dom";
import { useSelector} from "react-redux";
import { RootState } from "../../store/store";
import ClientPopup from "./bottombar/menuItemsPopups/clientPopup.component";
import SalesPopup from "./bottombar/menuItemsPopups/salesPopup.component";
import ManagementPopup from "./bottombar/menuItemsPopups/managementPopup.component";
import { useGetUserQuery } from "../../api/apiSlice";
import LeftIcons from "./leftIcons/leftIcons.components";


const Layout = () => {
  const { client, sales, management, userId } = useSelector(
    (state: RootState) => state.menuPopup
  );

  const clientPopup = client.clientPopup;
  const salesPopup = sales.salesPopup;
  const managementPopup = management.managementPopup;
  const getUserId = userId.id;
  const { data } = useGetUserQuery(getUserId);

  return (
    <div className="h-[100vh] flex flex-col justify-between items-center">
      <Navigation userData={data || {}} />
      <div className=" flex gap-[2vw]">
        
        <LeftIcons />
        <Outlet />
      </div>

      {clientPopup && <ClientPopup />}
      {salesPopup && <SalesPopup />}
      {managementPopup && <ManagementPopup />}

      <BottomBar />
    </div>
  );
};

export default Layout;
