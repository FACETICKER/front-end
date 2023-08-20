import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style/Select.module.css";
import StickerSlice from "./StickerSlice";
import BtnWrap from "./BtnWrap";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import store from "../store";
import styles1 from "./style/Popup.module.css";
import styles2 from "./Modal_jh.module.css";
import Close from "../img/QnA_img/close-x.png";
import Dots from "../components/Dots";
import {
  setCaptureEnabled,
  setImageUrl,
  setNext,
  setVisitorId,
} from "./CaptureSlice";
import axios from "axios";
import StickerName from "../Nickname/StickerName";
import Idtoken from "../Stickers/Idtoken";
import { setChangeSticker } from "../components/SettingSllice";

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000, // z-index 값
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    zIndex: 1001,
    border: "2px solid rgba(245, 245, 245, 1)",
    borderRadius: "20px",
    width: "342px",
    height: "240px",
    padding: "0px",
    margin: "0px",
    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.5)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

// 선택창 관리 컴포넌트

const Select = ({ handleCaptureImg }) => {
  const [name, setname] = useState(false);
  const [stickeris, setStickeris] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [test2, setTest] = useState(null);
  const [setting, setSetting] = useState(false);
  const [settingcomplete, setSettingComplete] = useState(true);

  // userId, 토큰, 방문자가 가지고 온  호스트Id 가져오기
  const hostid = useSelector((state) => state.login.hostid);

  const jwt = Idtoken()[1]; //호스트 토큰
  const userId = Idtoken()[0]; //호스트 아이디
  console.log("아이디", userId);
  console.log("토큰", jwt);

  const VID = useSelector((state) => state.visitorId);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  //호스트 설정에서 스티커 변경하려고 온 유저는 모달창 X 바로 메인
  const changesticker = useSelector((state) => state.setting.changesticker);

  //호스트가 완료 누를 때
  const capture = (isEnabled) => {
    if (
      //호스트가 아무것도 선택 안 했으면 기본 이미지 넘기기
      stickerState.face === 0 &&
      stickerState.eyes === 0 &&
      stickerState.nose === 0 &&
      stickerState.mouth === 0 &&
      stickerState.hand === 0 &&
      stickerState.foot === 0 &&
      stickerState.accessory === 0
    ) {
      if (changesticker == false) {
        setSetting(true);
      } else setModalIsOpen(true);
    }
    dispatch(setCaptureEnabled(true));
    if (changesticker) {
      setSetting(true);
    } else {
      setModalIsOpen(true);
    }
  };

  //방문자가 완료 누를 때
  const captureVisitor = () => {
    if (
      //방문자가 아무것도 선택 안 했으면 캡쳐 하지 말고 기본 이미지 저장
      stickerState.face === 0 &&
      stickerState.eyes === 0 &&
      stickerState.nose === 0 &&
      stickerState.mouth === 0 &&
      stickerState.hand === 0 &&
      stickerState.foot === 0 &&
      stickerState.accessory === 0
    ) {
      dispatch(setImageUrl("https://i.ibb.co/3yhK7VW/1-2.png"));
    } else {
      dispatch(setCaptureEnabled(true));
    }

    /*   navigate("/stickername", { state: { test: test2 } }); */
  };

  const step = useSelector((state) => {
    return state.sticker.step;
  });

  const up = (isEnabled) => {
    dispatch(StickerSlice.actions.stepcontrol(true));
  };
  const up2 = (isEnabled) => {
    dispatch(setCaptureEnabled(isEnabled));
    dispatch(StickerSlice.actions.stepcontrol(true));
  };

  const down = () => {
    dispatch(StickerSlice.actions.stepcontrol(false));
  };
  const handleMain = () => {
    navigate(`/main/host/${userId}`);
  };

  const handlestatus = () => {
    navigate("/status");
  };

  //완료 누르면 백에 POST
  const stickerState = useSelector((state) => state.sticker);
  console.log("StickerSlice Value:", stickerState);

  const whatType = hostid == null ? "host" : "visitor";
  console.log("what", whatType);

  //완료 누르고 버튼 지정
  const CompleteButton = whatType == "host" ? capture : captureVisitor;
  console.log("버튼 ", CompleteButton);

  //헤더
  const headers = {
    "x-access-token": jwt,
    "Content-Type": "application/json",
  };
  console.log(headers);
  const VisitorHeader = {
    "Content-Type": "application/json",
  };
  const Header = whatType == "host" ? headers : VisitorHeader;
  console.log("header", Header);
  const Id = whatType == "host" ? userId : hostid;
  console.log("id", Id);

  //sticker 없을 때 post, 있으면 patch

  //호스트면 자기 스티커 get해오기
  useEffect(() => {
    if (whatType === "host") {
      fetch(`http://app.faceticker.site/${userId}/sticker/detail`, {
        headers: headers,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("호스트 캐릭터 get 성공", data);
          dispatch(
            StickerSlice.actions.update(["face", data.result[0].face_id])
          );
          dispatch(
            StickerSlice.actions.update(["eyes", data.result[0].eyes_id])
          );
          dispatch(
            StickerSlice.actions.update(["nose", data.result[0].nose_id])
          );
          dispatch(
            StickerSlice.actions.update(["mouth", data.result[0].mouth_id])
          );
          dispatch(
            StickerSlice.actions.update(["hand", data.result[0].arm_id])
          );
          dispatch(
            StickerSlice.actions.update(["foot", data.result[0].foot_id])
          );
          dispatch(
            StickerSlice.actions.update([
              "accessory",
              data.result[0].accessory_id,
            ])
          );
          dispatch(StickerSlice.actions.update(["step", 6]));
          console.log("stickeris1", stickeris);
          setStickeris(true);
        })

        .catch((error) => {
          console.error("호스트 캐릭터 get 실패", error);
        });
    }
  }, [whatType]);

  console.log("stickeris", stickeris);
  //sticker 보낼 거
  const imageUrl = useSelector((state) => state.capture.imageUrl);
  const visitorId = useSelector((state) => state.visitorId);
  const next = useSelector((state) => state.capture.next);

  const finalsticker = {
    face: stickerState.face,
    eyes: stickerState.eyes,
    nose: stickerState.nose,
    mouth: stickerState.mouth,
    arm: stickerState.hand,
    foot: stickerState.foot,
    accessory: stickerState.accessory,
    final: imageUrl,
  };

  console.log("finalsticker", finalsticker);
  console.log("url", imageUrl);
  console.log("stickeris", stickeris);

  const apiUrl = stickeris
    ? `http://app.faceticker.site/${Id}/sticker/patch`
    : `http://app.faceticker.site/${Id}/sticker`;
  console.log("api", apiUrl);

  const PostOrPatch = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: stickeris ? "PATCH" : "POST",
        headers: Header,
        body: JSON.stringify(finalsticker),
      });

      const responseData = await response.json();
      console.log("성공", responseData);

      if (whatType === "visitor") {
        console.log(responseData.result.visitor_sticker_id);
        dispatch(setVisitorId(responseData.result.visitor_sticker_id));
        setTest(responseData.result.visitor_sticker_id);
        console.log("dispatch id1", VID);
        dispatch(setNext(true));

        // 응답을 받은 후에 navigate 실행
        await navigate("/stickername", { state: { test: test2 } }); // 목표 화면 이름으로 변경
      }
    } catch (error) {
      console.error("PATCH request failed:", error);
    }
  };

  useEffect(() => {
    if (imageUrl) {
      console.log("이미지 캡쳐 완료");
      PostOrPatch();
    }
  }, [imageUrl]);

  console.log("test2", test2);

  /*   useEffect(() => {
    if (test2) {
      console.log("test2", test2);
      dispatch(StickerSlice.actions.update(["step", 0]));
      navigate("/stickername", { state: { test: test2 } });
    }
  }, [test2]); */

  //방문자는 이미지 링크 redux로 저장해놓기
  /* const loginData = useSelector((state) => state.login);
  console.log("id", loginData.id);
  console.log("token", loginData.token);
 */

  const stickernmae = () => {
    setname(true);
  };

  useEffect(() => {
    if (setting && next) {
      navigate(`/main/host/${userId}`);
      dispatch(setChangeSticker(false));
    }
  }, [setting, next]);

  return (
    <div className={styles.background}>
      <div className={styles.line}></div>
      <div className={styles.stepchoice}>
        <button
          className={`${styles.button} ${step !== 0 ? "" : styles.hidden}`}
          onClick={down}
        >
          이전
        </button>
        <button
          className={`${styles.button} ${
            step !== 5 && step !== 6 ? "" : styles.hidden
          }`}
          onClick={up}
        >
          다음
        </button>

        {step == 5 && (
          <button onClick={up} className={styles.button}>
            다음
          </button>
        )}

        {step == 6 && (
          <button onClick={CompleteButton} className={styles.button}>
            완료
          </button>
        )}
        <Modal
          onRequestClose={closeModal}
          isOpen={modalIsOpen}
          style={modalStyle}
        >
          <div className={styles1.background}>
            <div className={styles2.top_div}>
              <Dots />
              <img
                src={Close}
                onClick={closeModal}
                className={styles2.close}
              ></img>
            </div>
            <div className={styles2.remain}>
              <p className={styles2.p1}>방문자들에게 한 마디 남기시겠어요?</p>
              <p className={styles2.p2}>미 작성시 랜덤 문구가 표시됩니다.</p>
              <div className={styles2.button_zone}>
                <div className={styles2.button1}>
                  <button onClick={handleMain} className={styles2.btn}>
                    나중에..
                  </button>
                  <button className={styles2.btnshadow}></button>
                </div>
                <div className={styles2.button2}>
                  <button onClick={handlestatus} className={styles2.btn_red}>
                    좋아요
                  </button>
                  <button className={styles2.btnshadow}></button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <BtnWrap />
    </div>
  );
};

export default Select;
