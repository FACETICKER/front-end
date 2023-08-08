import { useDispatch, useSelector } from "react-redux";
import NicknamePageSlice from "./NicknamePageSlice";
import Nickname from "./StickerName";
import Letter from "./StickerLetter";

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
