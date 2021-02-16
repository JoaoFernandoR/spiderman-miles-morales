import VideoSpiderMan from "../../../../assets/spiderman2.mp4";

import { VideoBG, VideoSection } from "./styled";

const BgVideo = () => {
  return (
    <VideoSection id="bg-video">
      <VideoBG autoPlay muted loop>
        <source src={VideoSpiderMan} type="video/mp4" />
      </VideoBG>
    </VideoSection>
  );
};

export default BgVideo;
