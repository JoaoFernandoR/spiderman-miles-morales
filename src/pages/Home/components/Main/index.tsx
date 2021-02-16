import {
  Main,
  Container,
  ContainerButton,
  ContainerOne,
  ContainerTwo,
  ContainerIcons,
  OrderButton,
  TeaserButton,
  SpiderMan,
} from "./styles";

import SpiderImg from "../../../../assets/spider-man.png";
import SpiderText from "../../../../assets/spiderman-text.png";
import Marvel from "../../../../assets/marvel.svg";
import Ps5 from "../../../../assets/ps5.svg";

const MainContainer = () => {
  return (
    <Main>
      <Container>
        <ContainerOne>
          <div>
            <img src={SpiderText} alt="Spider-Man Miles Morales Text" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            aliquam, explicabo recusandae molestias a qui iure dignissimos
            sapiente facilis corporis reiciendis officiis maiores. Facere ipsum
            eveniet tenetur debitis itaque id corporis, necessitatibus totam quo
            dolore rem illo, deleniti amet distinctio.
          </p>
          <ContainerButton>
            <OrderButton href="/#"> Pre-order now</OrderButton>
            <TeaserButton href="/#"> Watch the Teaser </TeaserButton>
          </ContainerButton>
          <ContainerIcons>
            <img src={Ps5} alt="" />
            <img src={Marvel} alt="" />
          </ContainerIcons>
        </ContainerOne>
        <ContainerTwo>
          <SpiderMan src={SpiderImg} alt="Spider Man with Sparking hand" />
        </ContainerTwo>
      </Container>
    </Main>
  );
};

export default MainContainer;
