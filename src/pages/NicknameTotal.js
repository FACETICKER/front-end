import { useDispatch, useSelector } from "react-redux";
import NicknamePageSlice from "../Nickname/NicknamePageSlice";
import Nickname from "../Nickname/StickerName";
import Letter from "../Nickname/StickerLetter";

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
