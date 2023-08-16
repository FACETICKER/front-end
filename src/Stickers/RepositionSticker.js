import styled from "styled-components";
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsImageFixed, setSelectedImageKey } from "./reducers";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setSelectedImage, setSelectedImage2 } from "./imageSlice";
import Idtoken from "./Idtoken";
import { useDrag } from "react-use-gesture";

//방문자 기록 컴포넌트

// 배경 이미지 링크 랜덤 함수
const getRandomImageLink = () => {
  const images = [
    "https://i.ibb.co/hgQ81HN/1.png",
    "https://i.ibb.co/Z1GwRWj/Untitled-1-1.png",
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};
//style
const HostImg = styled.img`
  max-width: 100px;
  max-height: 150px;
  display: flex;
  position: absolute;
  transform: translate(-40%, -50%);
  top: 50%;
  left: 50%;
`;

const BottomWrap = styled.div`
  height: 60%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Bottoms = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 40px;
  border: 2px solid var(--unnamed, #12151c);
  width: 90%;
  height: 90%;
  background-image: url("${getRandomImageLink()}");
`;

const Bottom = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ZoomButtons = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 8px;
`;

const ZoomButton = styled.button`
  padding: 6px 10px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
`;
const Move = styled.img`
  max-width: 100px;
`;

export function RepositionSticker() {
  const [hostImageUrl, setHostImageUrl] = useState(null);
  const isImageFixed = useSelector((state) => state.app.isImageFixed);
  const [imageData, setImageData] = useState([]);
  const [componentWidth, setComponentWidth] = useState(0);
  const [componentHeight, setComponentHeight] = useState(0);
  const navigate = useNavigate();
  const [move, setMove] = useState();
  const [logoPos, setlogoPos] = useState({ x: null, y: null });
  const [xy, setXY] = useState({ x: null, y: null });
  const [VID, setVID] = useState(null);
  const [first, setFirst] = useState({ x: null, y: null });

  const location = useSelector((state) => state.app.change);

  const bindLogoPos = useDrag((params) => {
    setlogoPos({
      x: params.offset[0],
      y: params.offset[1] - 20,
    });
  });

  /*   const userId = Idtoken()[0]; */ //호스트 아이디
  const userId = 1;
  const ID = userId;
  const jwt = Idtoken()[1]; //호스트 토큰

  const dispatch = useDispatch();

  const handleStickerClick = (item) => {
    dispatch(setSelectedImage2(item.visitor_sticker_id)); // 클릭한 이미지의 alt 값을 dispatch로 저장
  };

  //컴포넌트 높이, 너비
  const componentRef = useRef(null);
  useEffect(() => {
    if (componentRef.current) {
      const w = componentRef.current.offsetWidth;
      const h = componentRef.current.offsetHeight;
      console.log("Width:", w);
      console.log("Height:", h);
      setComponentWidth(w);
      setComponentHeight(h);
    }
  }, []);
  const selectedImageId = useSelector((state) => state.image.selectedImageId2);
  console.log(selectedImageId);

  //이미지들 불러오기
  useEffect(() => {
    fetch(`http://app.faceticker.site/${ID}/sticker/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHostImageUrl(data.result.userStickerResult[0].final_image_url);
        const filteredData = data.result.visitorStickerResult.filter(
          (item) => item.location_x !== null
        );

        console.log("00", filteredData);

        setImageData(filteredData);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  //이미지들 불러오기
  useEffect(() => {
    fetch(`http://app.faceticker.site/${ID}/sticker/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHostImageUrl(data.result.userStickerResult[0].final_image_url);
        const filteredData = data.result.visitorStickerResult.filter(
          (item) => item.location_x !== null
        );

        console.log("00", filteredData);

        setImageData(filteredData);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, [selectedImageId]);

  //선택한 캐릭터 불러오기
  useEffect(() => {
    fetch(`http://app.faceticker.site/${ID}/sticker/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const filteredData2 = data.result.visitorStickerResult.filter(
          (item) => item.visitor_sticker_id == selectedImageId
        ); //선택한 캐릭터

        console.log("01", filteredData2);
        setFirst({
          x: parseInt(filteredData2[0].location_x),
          y: parseInt(filteredData2[0].location_y),
        });
        setlogoPos({
          x: parseInt(filteredData2[0].location_x),
          y: parseInt(filteredData2[0].location_y),
        });
        setMove(filteredData2[0].final_image_url);
        setVID(filteredData2[0].visitor_sticker_id);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, [selectedImageId]);

  console.log(move);
  console.log("222", first);
  console.log("111", logoPos);
  const [zoomLevel, setZoomLevel] = useState(1);
  const minZoomLevel = 0.5;
  const maxZoomLevel = 2;

  /*   // 줌 인 함수
  const zoomIn = () => {
    if (zoomLevel < maxZoomLevel) {
      setZoomLevel((prevZoom) => prevZoom + 0.1);
    }
  };

  // 줌 아웃 함수
  const zoomOut = () => {
    if (zoomLevel > minZoomLevel) {
      setZoomLevel((prevZoom) => prevZoom - 0.1);
    }
  }; */

  const handleOuterClick = (event) => {
    // bottomWrap의 영역을 제외한 다른 영역 클릭 시 드래그 이벤트 전파를 막음
    event.stopPropagation();
  };

  const isImageFixed2 = useSelector((state) => state.app.isImageFixed2);

  console.log("VID", VID);
  //이미지 PATCH

  useEffect(() => {
    if (isImageFixed2) {
      fetch(`http://app.faceticker.site/${ID}/sticker/attach?id=${VID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logoPos),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("patch 성공", data);
        })
        .catch((error) => {
          console.error("patch 오류", error);
        });
    }
  }, [isImageFixed2]);

  return (
    <BottomWrap>
      <Bottoms onClick={handleOuterClick}>
        <Bottom ref={componentRef} style={{ transform: `scale(${zoomLevel})` }}>
          <HostImg src={hostImageUrl} />

          {imageData &&
            imageData.map((item) => {
              if (item.visitor_sticker_id !== selectedImageId) {
                return (
                  <img
                    onClick={() => handleStickerClick(item)}
                    key={item.visitor_sticker_id}
                    src={item.final_image_url}
                    style={{
                      position: "absolute",
                      top: `${(item.location_y * componentHeight) / 100}px`,
                      left: `${(item.location_x * componentWidth) / 100}px`,
                      zIndex: 9999,
                      maxWidth: "100px",
                    }}
                    alt={item.visitor_sticker_id}
                  />
                );
              }
              return null; // 클릭된 visitor_sticker_id에 해당하는 이미지를 렌더링하지 않음
            })}

          {Move && (
            <div
              {...bindLogoPos()}
              style={{
                /*MODIFIED!*/ position: "relative",

                top: `${(logoPos.y * componentHeight) / 100}px`,
                left: `${(logoPos.x * componentWidth) / 100}px`,
                /* ...(location
                  ? { top: first.y, left: first.x } // location이 true인 경우 top과 left를 10px로 설정
                  : {}), */
              }}
            >
              <Move src={move} />
            </div>
          )}
        </Bottom>
      </Bottoms>

      {/*      <ZoomButtons>
        <ZoomButton onClick={zoomIn}>Zoom In</ZoomButton>
        <ZoomButton onClick={zoomOut}>Zoom Out</ZoomButton>
      </ZoomButtons> */}
    </BottomWrap>
  );
}

export default RepositionSticker;
