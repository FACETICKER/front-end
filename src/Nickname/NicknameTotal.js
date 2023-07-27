import { useDispatch, useSelector } from "react-redux";
import NicknamePageSlice from "./NicknamePageSlice";
import Nickname from "../pages/StickerName";
import Letter from "../pages/StickerLetter";

export function NicknameTotal() {
  const page = useSelector((state) => {
    return state.nicknamepage;
  });

  return (
    <div>
      {page === "nickname" && <Nickname />}
      {page === "letter" && <Letter />}
    </div>
  );
}

export default NicknameTotal;
