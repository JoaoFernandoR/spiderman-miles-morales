import styled from "styled-components";

import { red, white } from "../../../../shared/Colors/colors";

export const Main = styled.section`
  max-width: 100vw;
  height: calc(100vh - 151px);
  padding: 2rem;

  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: auto;

  display: flex;
  align-items: center;

  overflow: hidden;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ContainerOne = styled.div`
  max-width: 576px;
`;
export const ContainerTwo = styled.div``;

export const SpiderMan = styled.img`
  width: 130%;
  transform: translate3d(-250px, 0, 0);

  @media (max-width: 960px) {
    width: 100%;
    transform: translate3d(90px, -120px, 0);
  }
`;

export const ContainerButton = styled.div`
  margin-top: 40px;
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const OrderButton = styled.a`
  width: 266px;
  height: 56px;
  border-radius: 3px;
  background: linear-gradient(225deg, #ea1d22 0%, #b31317 100%);
  transform: matrix(0.98, 0, -0.19, 1, 0, 0);
  text-transform: uppercase;
  color: ${white};
  font-weight: bold;
  transition: 0.7s ease;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    opacity: 0;
    transition: 0.7s ease;

    top: -2px;
    left: -2px;

    width: 50px;
    height: 50px;

    border-top: 3px solid ${white};
    border-left: 3px solid ${white};
  }

  &::before {
    content: "";
    position: absolute;
    opacity: 0;
    transition: 0.7s ease;

    bottom: -2px;
    right: -2px;

    width: 50px;
    height: 50px;

    border-bottom: 3px solid ${white};
    border-right: 3px solid ${white};
  }

  &:hover {
    transform: scale(1.05) skew(-10deg);

    &::after {
      opacity: 1;
    }

    &:before {
      opacity: 1;
    }
  }
`;

export const TeaserButton = styled.a`
  background: transparent;
  border: 1px solid ${red};

  width: 266px;
  height: 56px;
  border-radius: 3px;
  transform: skew(-10deg);

  text-transform: uppercase;
  color: ${white};
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  position: relative;

  &::after {
    content: "";
    position: absolute;

    z-index: -1;

    transition: 0.4s ease;
    width: 0%;
    height: 100%;
    border-radius: 3px;

    background: linear-gradient(225deg, #ea1d22 0%, #b31317 100%);
  }

  &:hover {
    &::after {
      width: 101%;
    }
  }
`;

export const ContainerIcons = styled.div`
  width: 400px;
  padding: 1rem;

  display: flex;

  img {
    max-width: 54px;
    max-height: 75px;
    margin-right: 35px;
    margin-top: 20px;
  }
`;
