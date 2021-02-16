import styled from "styled-components";

export const VideoBG = styled.video``;

export const VideoSection = styled.section`
  width: 100%;
  height: 100%;
  z-index: -2;

  overflow: hidden;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.8);
  }
`;
