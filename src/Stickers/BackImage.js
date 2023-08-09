import Back from "../img/Stickers_img/Back.png";
import Button from "../img/Stickers_img/Button.png";
import styled from "styled-components";

const BackContainer = styled.img`
  position: absolute;
  max-width: 400px;
  top: 95px;
  left: 115px;
`;
const ButtonImg = styled.img``;

export function BackImage() {
  return (
    <div>
      <BackContainer src={Back} />
      <ButtonImg src={Button} />
    </div>
  );
}

export default BackImage;
