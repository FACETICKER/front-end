import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 1;
  width: 60px;
  justify-content: space-between;
`;
const D1 = styled.div`
  border-radius: 16px;
  width: 16px;
  height: 16px;
  display: flex;
  border: 1px solid #767676;
  background: var(--unnamed, #ff6d00);
`;
const D2 = styled.div`
  border-radius: 16px;

  width: 16px;
  height: 16px;
  display: flex;
  border: 1px solid #767676;
  background: var(--unnamed, #ffe14f);
`;
const D3 = styled.div`
  border-radius: 16px;
  width: 16px;
  height: 16px;
  display: flex;
  border: 1px solid #767676;
  background: var(--unnamed, #fefaef);
`;

export function Dots() {
  return (
    <Div>
      <D1 />
      <D2 />
      <D3 />
    </Div>
  );
}

export default Dots;
