import styled from "styled-components";

import { useEffect } from "react";
import Clouds from "/images/clouds.jpg";

const Wrapper = styled.div`
  background-image: url(${Clouds});
  background-size: cover;
  background-position: center;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Centered = styled.div`
  position: absolute;
  width: 100%;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Links = styled.div`
  display: inline-block;
  position: absolute;
  bottom: -1.5em;
  left: 50%;
  transform: translate(-50%, 100%);
  line-height: 1.5;
  font-size: 1.4em;
  text-align: left;

  img {
    display: inline-block;
    height: 38px;
    position: relative;
    top: 7px;
  }
  @media (max-height: 700px) {
    font-size: 1.2em;
  }
  @media (max-width: 700px) {
    font-size: 1.2em;
    text-align: center;

    img {
      height: 33px;
      top: 7px;
    }
  }
  @media (max-width: 475px) {
    font-size: 1em;

    img {
      height: 26px;
      top: 5px;
    }
  }
`;

export default function Hero({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.location.hash === "#startup") {
      window.location.hash = "#hero";
    }
  }, []);
  return (
    <Wrapper>
      <Centered>
        <Links>{children}</Links>
      </Centered>
    </Wrapper>
  );
}
