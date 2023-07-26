import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./Slice/questionSlice";
import IDSlice from "./Slice/IDSlice";
import AnswerSlice from "./Slice/AnswerSlice";
import ID_answerSlice from "./Slice/ID_AnswerSlice";
import Buttons_idSlice from "./Slice/Buttons_idSlice";
import ChoiceSlice from "./Slice/ChoiceSlice";
import Choice_answer_Slice from "./Slice/Choice_answer_Slice";
import AnsEditSlice from "./Slice/AnsEditSlice";
import Switchquestion_Slice from "./Slice/Switchquestion_Slice";
import OpencheckSlice from "./Slice/OpencheckSlice";
import ModalpositionSlice from "./Slice/ModalpositionSlice";
import FirstSlice from "./Slice/FirstSlice";
import PageSlice from "./Slice/PageSlice";
import Basic_questionSlice from "./Slice/Basic_questionSlice";
import PopupSlice from "./Slice/PopupSlice";
import appReducer from "../Stickers/reducers";
import StickerSlice from "../MakeSticker/StickerSlice";
import PopupSlice from "../MakeSticker/PopupSliceSlice";

const store = configureStore({
  reducer: {
    question: questionSlice.reducer, // 질문 저장소
    idcounter: IDSlice.reducer, // 질문 ID 값 지정해주는 저장소
    answer: AnswerSlice.reducer, // 답변 저장소
    id_answer: ID_answerSlice.reducer, // 답변 ID 값 지정해주는 저장소
    buttons_id: Buttons_idSlice.reducer, // 이거 삭제 가능할 것 같은데
    choice: ChoiceSlice.reducer, // 질문 버튼 클릭 시 답변 / 삭제 창 띄우는 거 컨트롤 요소 저장소
    choice_answer: Choice_answer_Slice.reducer, // 답변 버튼 클릭 시 답변 / 삭제 창 띄우는 거 컨트롤 요소 저장소
    ansedit: AnsEditSlice.reducer, // 답변 클릭 시 수정 / 신규 작성 여부 구분
    switch_question: Switchquestion_Slice.reducer, // 답변 / 미답변 질문 여부 구분
    opencheck: OpencheckSlice.reducer, // 질문 비공개 / 공개 여부 저장
    modalposition: ModalpositionSlice.reducer, // 팝업창 위치 저장소
    first: FirstSlice.reducer, // 첫 렌더링의 경우 스크롤 맨 밑으로 내리게 하는 변수
    page: PageSlice.reducer, // page 전환용 컨트롤러
    basic_question: Basic_questionSlice.reducer, // 기본 질문 저장소
    popup: PopupSlice.reducer, // 기본 질문 팝업창 관리

    app: appReducer, //Stickers(수진)

    sticker: StickerSlice.reducer, //  총 저장소
    popup: PopupSlice.reducer, // 팝업창 onoff 저장소
  },
});
export default store;
