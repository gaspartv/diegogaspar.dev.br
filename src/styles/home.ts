import styled from "styled-components";

export const StyledHome = styled.main`
  margin-top: 60px;
  > div {
    margin: 0 10px;
    padding: 10px;
    background-color: var(--color-menu);
    border-radius: 5px;
    border: 4px double var(--color-primary);
    > aside {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 20px;
      cursor: default;
      gap: 12px;
      > h2 {
        color: var(--color-grey-3);
        font-size: 42px;
        font-weight: 400;
        letter-spacing: 2px;
        > span {
          color: var(--color-primary);
          font-weight: 600;
        }
      }
      > h3 {
        color: var(--color-grey-3);
        letter-spacing: 2px;
        font-weight: 400;

        font-size: 22px;
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        > span {
          color: var(--color-white);
          font-weight: 600;
        }
      }
      > p {
        color: var(--color-grey-2);
        font-size: 14px;
        letter-spacing: 1px;
      }
    }
  }
  @media (min-width: 425px) {
    margin-top: 70px;
    > div {
      > aside {
        > h2 {
        }
        > h3 {
          display: block;
        }
      }
    }
  }

  @media (min-width: 700px) {
    margin-top: 70px;
    > div {
      > aside {
        > h2 {
        }
        > h3 {
          font-size: 45px;
          display: flex;
          flex-direction: row;
          align-self: center;
          gap: 18px;
        }
      }
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
  margin-top: 40px;
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

export const StyledSocial = styled.section`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  > div {
    display: flex;
    align-items: center;
    gap: 20px;
    > a {
      :hover {
        filter: brightness(1.5);
      }
    }
  }
`;

export const StyledAbout = styled.section`
  margin-top: 50px;
  cursor: default;
  > div {
    margin: 0 10px;
    padding: 10px;
    background-color: var(--color-menu);
    border-radius: 5px;
    border: 4px double var(--color-primary);
    > section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      color: var(--color-grey-3);
      margin: 50px 0;
      gap: 30px;
      > div {
        width: 40%;
        min-width: 300px;
        > span {
          display: flex;
          gap: 5px;
          margin-bottom: 15px;
          > h3 {
            font-size: 20px;
            font-weight: 400;
            letter-spacing: 1px;
          }
        }
        > h4 {
          color: var(--color-grey-2);
          font-size: 17px;
          font-weight: 400;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }
        > div {
          padding: 0 15px;

          > ul {
            display: flex;
            flex-direction: column;
            gap: 3px;
            > li {
              color: var(--color-grey-2);
              font-size: 14px;
              font-weight: 400;
              letter-spacing: 1px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1140px) {
    > div {
      margin: 0 auto;
    }
  }
`;

export const StyledPortfolio = styled.section`
  margin-top: 50px;
  cursor: default;
  color: var(--color-grey-3);
  > div {
    margin: 0 10px;
    padding: 10px;
    background-color: var(--color-menu);
    border-radius: 5px;
    border: 4px double var(--color-primary);
  }
  @media (min-width: 1140px) {
    > div {
      margin: 0 auto;
    }
  }
`;
