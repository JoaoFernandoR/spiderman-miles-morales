import styled from "styled-components";

import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "@styled-icons/boxicons-logos";

import { MenuAltRight } from "@styled-icons/boxicons-regular";

import { grayTwo, white, redLight } from "../../../../shared/Colors/colors";

interface IMenuHidden {
  isOpen: boolean;
}

export const Header = styled.header`
  padding: 2rem;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* border: 1px solid green; */
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;

  img {
    min-width: 54px;
    min-height: 75px;
  }
`;

export const Menu = styled.ul`
  display: flex;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const MenuList = styled.li`
  margin-left: 72px;

  a {
    display: inline-block;

    padding: 0.5rem 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${grayTwo};

    transition: 1.3s linear;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: -30px;

      height: 0px;
      width: 2px;
      border-radius: 3px;
      background-image: linear-gradient(
        180deg,
        rgba(233, 29, 34, 0),
        rgba(234, 29, 34, 0.8)
      );
      transition: 1s ease;
    }

    &:hover {
      color: ${white};

      &::after {
        height: 40px;
      }
    }
  }
`;

export const Social = styled.div`
  display: flex;

  @media (max-width: 960px) {
    display: none;
  }

  li {
    margin-left: 16px;

    &:hover {
      transform: translate3d(0, -3px, 0);
    }
  }

  a {
    &:hover {
      color: ${redLight};
    }
  }
`;

export const Item = styled.h4`
  letter-spacing: 0.2px;
`;

export const FacebookIcon = styled(Facebook)``;
export const TwitterIcon = styled(Twitter)``;
export const YoutubeIcon = styled(Youtube)``;
export const InstagramIcon = styled(Instagram)``;

export const HamburguerIcon = styled(MenuAltRight)`
  display: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 960px) {
    display: flex;
    width: 80px;
  }
`;

export const MenuHidden = styled.div<IMenuHidden>`
  width: 100%;

  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;

  @media (min-width: 960px) {
    display: none;
  }
`;
