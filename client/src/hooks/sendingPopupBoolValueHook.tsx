
import { useDispatch } from "react-redux";
import { openPopup } from "../feature/menu popups/menuPopupSlice";
import { useNavigate } from "react-router-dom";

const HandlePopupBoolValue = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOpenCloseClientPopup = (
    trueName: string | undefined,
    menuNames: string[]
    ) => {     
    menuNames.forEach((menuName) => {
      dispatch(openPopup({ [menuName]: false }));
    });
    if (trueName !== undefined) {
      dispatch(openPopup({ [trueName]: true }));
    }
  };

  const navigateTo = (pathTo:string) => {
    navigate(pathTo);
  }



  return {handleOpenCloseClientPopup, navigateTo};
}

export default HandlePopupBoolValue;
