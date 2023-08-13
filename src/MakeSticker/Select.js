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
import { setCaptureEnabled, setVisitorId } from "./CaptureSlice";

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
  const [stickeris, setStickeris] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  //호스트가 완료 누를 때
  const capture = (isEnabled) => {
    dispatch(setCaptureEnabled(isEnabled));
    setModalIsOpen(true);
    PostOrPatch();
  };

  //방문자가 완료 누를 때
  const captureVisitor = (isEnabled) => {
    dispatch(setCaptureEnabled(isEnabled));
    PostOrPatch();
    /*     navigate("/stickername"); */
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
    navigate("/mainhost");
  };

  const handlenickname = () => {
    navigate("/stickername");
  };

  //완료 누르면 백에 POST
  const stickerState = useSelector((state) => state.sticker);
  console.log("StickerSlice Value:", stickerState);

  /*  const headers = {
    "x-access-token": { jwt },
    "Content-Type": "application/json",
  };
 */

  //수정하기 userId, 토큰, 방문자가 가지고 온  호스트Id 가져오기
  const jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2VtYWlsIjoic3UxMGppbjExQGhhbm1haWwubmV0IiwiaWF0IjoxNjkxOTMzOTA2LCJleHAiOjE2OTE5Mzc1MDZ9.lQdUWyBQYeCz7OEnapawJFzBgaYsSktpDBDB14UvjG0";
  const userId = "1"; //호스트 자신 아이디
  const HostId = null; //방문자가 가지고 온 호스트 아이디

  //jwt가 없으면 visitor, jwt 있으면 host
  const whatType = HostId == null ? "host" : "visitor";
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
  const Id = whatType == "host" ? userId : HostId;
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
          console.log("성공", data);
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
          console.log("stickeris1", stickeris);
          setStickeris(true);
        })

        .catch((error) => {
          console.error("실패", error);
        });
    }
  }, [whatType]);

  console.log("stickeris", stickeris);
  //sticker 보낼 거
  const imageUrl = useSelector((state) => state.capture.imageUrl);

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

  console.log("stickeris", stickeris);

  const PostOrPatch = () => {
    const apiUrl = stickeris
      ? `http://app.faceticker.site/${Id}/sticker/put`
      : `http://app.faceticker.site/${Id}/sticker`;
    console.log("api", apiUrl);

    fetch(apiUrl, {
      method: stickeris ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ finalsticker }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("성공", data);
        console.log("스티커 아이디", data.result.visitor_sticker_id);
        dispatch(setVisitorId(data.result.visitor_sticker_id));
        console.log("스티커아이디 저장 완료");
      })
      .catch((error) => {
        console.error("실패:", error);
      });
  };

  //방문자는 이미지 링크 redux로 저장해놓기

  /*   const loginData = useSelector((state) => state.login);

  console.log("id", loginData.id);
  console.log("token", loginData.token);
 */
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
          <button onClick={up2} className={styles.button}>
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
                  <button onClick={handlenickname} className={styles2.btn_red}>
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
