import styled from "styled-components";
import { animationEntring, animationFadeIn } from "./animations";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-menu);
  box-shadow: 0px 0px 3px 0px var(--color-primary);
  > div {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    transition: 2s;
    > button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      .menuOpen {
        animation: ${animationFadeIn} 0.2s ease-in;
        display: flex;
      }
      .menuClosed {
        animation: ${animationFadeIn} 0.2s ease-in;
        display: none;
      }
    }
    > h1 {
      display: flex;
      align-items: flex-end;
      font-size: 18px;
      font-family: var(--inter-font);
      letter-spacing: 2px;
      text-transform: uppercase;
      cursor: default;
      color: var(--color-primary);
      filter: brightness(1.5);
    }
    .menuNavOpen {
      visibility: visible;
    }
    .menuNavClosed {
      visibility: hidden;
      left: -1000px;
    }
    > nav {
      background-color: var(--color-menu);
      box-shadow: 0px 0px 3px 0px var(--color-primary);
      position: absolute;
      top: 55px;
      left: 0;
      z-index: 101;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      padding: 8px 0;
      font-family: var(--inter-font);
      transition: all 0.5s ease-in-out;
      > a {
        width: 150px;
        display: flex;
        align-items: center;
        gap: 15px;
        position: relative;
        color: var(--color-primary);
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 600;
        text-decoration: none;
        filter: brightness(0.7);
        transition: 0.4s;
        :hover {
          filter: brightness(1.5);
        }
        > span {
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 1px;
          background-color: var(--color-primary);
        }
        :hover span {
          width: 100%;
          animation: ${animationEntring} 0.3s linear;
        }
      }
    }
  }
  @media (min-width: 700px) {
    > div {
      > button {
        display: none;
      }
      .menuNavClosed {
        visibility: visible;
        left: 0;
      }
      > nav {
        position: relative;
        flex-direction: row;
        top: 0;
        left: 0;
        box-shadow: none;
        width: auto;
        transition: none;
        > a {
          width: auto;
          gap: 5px;
        }
      }
    }
  }
`;
