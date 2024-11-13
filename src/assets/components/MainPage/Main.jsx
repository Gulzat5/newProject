import { styled } from "@mui/material";
import React from "react";

export const Main = () => {
  return (
    <MainContainer>
      <img src="src/assets/image/Rectangle 12.png" alt="" />
      <FirstBlockContainer>
        <div>
          <h1>
            Enjoy Your <br /> Morning Coffee.
          </h1>
          <p>
            The coffee is brewed by first roasting the green coffee <br /> beans
            over hot coals in a brazier. Given to Opportunity
          </p>
          <button>Test Coffee</button>
        </div>
      </FirstBlockContainer>
      <SecondMainBlock>
        <img src="src/assets/plugins/Play.svg" alt="" />
      </SecondMainBlock>
    </MainContainer>
  );
};

const MainContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 675px;
  display: flex;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    position: absolute;
    z-index: -1;
  }

  h1 {
    color: #ffffff;
    z-index: 4;
    font-family: Righteous;
    font-size: 5vw;
    font-weight: 400;
    text-align: left;
  }

  p {
    font-family: Urbanist;
    font-size: 2vw;
    font-weight: 500;
    line-height: 3vw;
    text-align: left;
    color: #ffffff;
  }

  button {
    background: #c99e71;
    z-index: 4;
    width: 30%;
    max-width: 160px;
    height: 60px;
    color: #ffffff;
    font-family: Inter;
    font-size: 1.5vw;
    font-weight: 700;
    text-align: center;
  }

  @media (max-width: 1024px) {
    height: auto;

    h1 {
      font-size: 5vw;
    }

    p {
      font-size: 2.5vw;
    }

    button {
      width: 40%;
      font-size: 3vw;
    }
  }

  @media (max-width: 768px) {
    height: auto;

    h1 {
      font-size: 6vw;
    }

    p {
      font-size: 4vw;
    }

    button {
      width: 60%;
      font-size: 4vw;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 8vw;
    }

    p {
      font-size: 5vw;
    }

    button {
      width: 80%;
      font-size: 5vw;
    }
  }
`;

const SecondMainBlock = styled("div")`
  display: flex;
  flex-direction: column;

  img {
    width: 10vw;
    max-width: 100px;
    left: 75%;
    top: 65%;
  }

  @media (max-width: 1024px) {
    img {
      width: 15vw;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 20vw;
    }
  }
`;

const FirstBlockContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: absolute;
  top: 18%;
  left: 5%;
`;
