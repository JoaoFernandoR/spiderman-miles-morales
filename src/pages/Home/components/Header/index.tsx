import { useState } from "react";
import LogoSpider from "../../../../assets/LogoSpider.svg";

import {
  Header,
  LogoDiv,
  Menu,
  MenuList,
  Social,
  Item,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
  HamburguerIcon,
  MenuHidden,
} from "./styles";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header>
        <LogoDiv>
          <img src={LogoSpider} alt=" Logo Do Homem Aranha" />
          <Menu>
            <MenuList>
              <a href="/#">
                <Item> HOME </Item>
              </a>
            </MenuList>
            <MenuList>
              <a href="/#">
                <Item> STORY </Item>
              </a>
            </MenuList>
            <MenuList>
              <a href="/#">
                <Item> WALLPAPERS </Item>
              </a>
            </MenuList>
            <MenuList>
              <a href="/#">
                <Item> #BEYOURSELF </Item>
              </a>
            </MenuList>
          </Menu>
        </LogoDiv>
        <Social>
          <li>
            <a href="/#">
              <FacebookIcon size={24} />
            </a>
          </li>
          <li>
            <a href="/#">
              <TwitterIcon size={24} />
            </a>
          </li>
          <li>
            <a href="/#">
              <YoutubeIcon size={24} />
            </a>
          </li>
          <li>
            <a href="/#">
              <InstagramIcon size={24} />
            </a>
          </li>
        </Social>
        <HamburguerIcon size={42} onClick={() => setIsOpen(!isOpen)} />
      </Header>
      <MenuHidden isOpen={isOpen}>
        <MenuList>
          <a href="/#">
            <Item> HOME </Item>
          </a>
        </MenuList>
        <MenuList>
          <a href="/#">
            <Item> STORY </Item>
          </a>
        </MenuList>
        <MenuList>
          <a href="/#">
            <Item> WALLPAPERS </Item>
          </a>
        </MenuList>
        <MenuList>
          <a href="/#">
            <Item> #BEYOURSELF </Item>
          </a>
        </MenuList>
      </MenuHidden>
    </>
  );
};

export default HeaderComponent;
