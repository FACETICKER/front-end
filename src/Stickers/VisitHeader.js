import styled from "styled-components";
import backicon from "../img/Stickers_img/backIcon.png";

const HeaderWrap = styled.div`
  height: 10%;
  justify-content: center;
  align-item: center;
  display: flex;
  flex-direction: column;
  background-color: yellow;
`;
const FirstHeader = styled.div`
  height: 30%;
  display: flex;
  background-color: red;
  justify-content: flex-start;
  padding-left: 10px;
`;
const BackIcon = styled.img`
  max-width: 30px;
`;
const TextHeader = styled.div`
  height: 70%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Text1 = styled.div`
  color: #191919;
  display: flex;
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  margin-top: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
`;
const Text2 = styled.div`
  color: rgba(25, 25, 25, 0.8);
  text-align: center;
  display: flex;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
`;

export function VisitHeader() {
  return (
    <HeaderWrap>
      <FirstHeader>
        <BackIcon src={backicon} />
      </FirstHeader>
      <TextHeader>
        <Text1>스티커를 붙여보세요!</Text1>
        <Text2>부착된 스티커는 호스트 외 삭제할 수 없습니다.</Text2>
      </TextHeader>
    </HeaderWrap>
  );
}

export default VisitHeader;
