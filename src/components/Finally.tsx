import { useReward } from "react-rewards";
import styled from "styled-components";

import Celebration from "/images/celebration.gif";
import Hourglass from "/images/hourglass.gif";
import LogoIcon from "/images/windowslogo.png";

import { Button } from "react95";

import { useEffect } from "react";
import Center from "./Center";
import Code from "./Code";

const StyledCenter = styled(Center)`
  width: 100%;
`;
const Wrapper = styled.div`
  position: relative;
  height: 100%;
  box-shadow: inset 0 20px 20px -20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const CelebrationImage = styled.img`
  width: calc(100% - 3rem);
  max-width: 480px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  margin: 3rem 0;

  transition: 0.2s all ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
  @media (max-height: 700px) {
    max-width: 420px;
  }
`;

const StyledCode = styled(Code)`
  position: absolute;
  top: -1em;
  font-family: "ms_sans_serif";
  letter-spacing: 0.1rem;
  font-weight: bold;
`;
const HourglassIcon = styled.img`
  height: 40px;
  position: relative;
  top: 10px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  left: 50%;
  bottom: -2em;
  transform: translateX(-50%);
  padding: 0 0.5em;
  font-weight: bold;
  font-size: 1.4em;

  filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.5));
  &:active {
    filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.5));
  }
  img {
    height: 28px;
    margin-right: 0.25em;
    margin-left: -0.125em;
  }
`;

export function Finally({ onStart }: { onStart: () => void }) {
  const { reward, isAnimating } = useReward("rewardId", "confetti");
  useEffect(() => {
    if (!isAnimating) {
      onStart();
    }
  }, [isAnimating, onStart]);
  return (
    <Wrapper>
      <StyledCenter>
        <StyledCode>
          The <HourglassIcon src={Hourglass} alt="Hourglass" /> is over.
          <br />
        </StyledCode>
        <CelebrationImage
          src={Celebration}
          alt="Bill Gates and Steve Ballmer dancing during Windows 95 launch"
        />
        <StyledButton size="lg" disabled={isAnimating} onClick={reward}>
          <img src={LogoIcon} alt="React95 logo" />
          Start
        </StyledButton>
      </StyledCenter>
    </Wrapper>
  );
}
