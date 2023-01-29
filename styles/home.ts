import styled from "styled-components";
import { animationEntring, animationFadeIn } from "./animations";

export const StyledHome = styled.main`
  margin-top: 60px;
  > div {
    margin: 0 10px;
    padding: 10px;
    background-color: var(--color-menu);
    border-radius: 5px;
    border: 3px double var(--color-primary);
    > aside {
      display: flex;
      flex-direction: column;
      padding: 20px;
      cursor: default;
      > h2 {
        color: var(--color-grey-3);
        text-transform: uppercase;
        font-size: 26px;
        letter-spacing: 2px;
      }
      > h3 {
        color: var(--color-grey-2);
        font-size: 18px;
        letter-spacing: 2px;
      }
    }
  }
  @media (min-width: 700px) {
    margin-top: 70px;
    > div {
    }
  }

  @media (min-width: 1140px) {
    > div {
      margin: 0 auto;
    }
  }
`;

export const StyledCv = styled.section`
  display: flex;
  justify-content: center;
  > div {
    width: 260px;
    display: flex;
    > a {
      position: relative;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      text-decoration: none;
      text-align: center;
      letter-spacing: 2px;
      font-weight: 500;
      color: var(--color-grey-3);
      background-color: var(--color-bg);
      border: 1px solid var(--color-grey-2);
      border-radius: 5px;
      transform: translate(0);
      overflow: hidden;
      transition: 0.3s;
      padding: 10px;
      width: 100%;
      gap: 12px;
      ::before {
        content: "";
        position: absolute;
        background: var(--color-primary);
        width: 8px;
        top: 0;
        bottom: 0;
        left: -35px;
        transform: rotate(-16deg);
        filter: blur(6px);
      }
      :hover::before {
        left: calc(100% + 35px);
        transition: 0.75s;
      }
      :hover {
        background-color: var(--color-grey-1);
        border: 1px solid var(--color-primary);
        color: var(--color-primary);
      }
    }
  }
`;
