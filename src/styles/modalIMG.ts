import styled from "styled-components";

export const StyledModalIMG = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 501;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000000;
  width: 100vw;
  height: 100vh;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1100px;
    position: relative;
    > button {
      position: absolute;
      top: -50px;
      right: 30px;
      background-color: transparent;
      cursor: pointer;
    }
    > img {
      width: 90%;
    }
  }
`;
