import ReactFullpage from "@fullpage/react-fullpage";
import { useEffect, useState } from "react";
import { Anchor, Button, ProgressBar, styleReset } from "react95";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import useSound from "use-sound";

/* Pick a theme of your choice */
import original from "react95/dist/themes/original";
import startupSound from "/sounds/win95.mp3";

/* Original Windows95 font (optional) */
import { useReward } from "react-rewards";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import { Default } from "./components/AppBar";
import Code from "./components/Code";
import Hero from "./components/Hero";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
`;
const Section = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
`;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  // @ts-expect-error - TS can't find the type for useSound
  const [play] = useSound(startupSound);
  const [opacity, setOpacity] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const { reward, isAnimating } = useReward("rewardId", "confetti");

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (hasClicked) {
      const interval = setInterval(() => {
        setPercent((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [hasClicked]);

  return (
    <div id="app">
      <GlobalStyles />
      {showSplash ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "32px",
            color: "white",
            opacity: opacity,
            transition: "opacity 1s ease-in-out",
          }}
        >
          <Main>
            <ReactFullpage
              credits={{
                enabled: false,
              }}
              licenseKey="gplv3-license"
              anchors={["hero", "startup"]}
              scrollingSpeed={1000}
              render={({ fullpageApi }) => {
                return (
                  <ReactFullpage.Wrapper>
                    <Section className="section">
                      <Hero>
                        <Code style={{ color: "black" }}>
                          A Windows 95 Pokedex by{" "}
                          <Anchor
                            href="https://github.com/nyumat"
                            className="text-blue"
                          >
                            @nyumat
                          </Anchor>
                        </Code>
                        <Button
                          primary
                          size="lg"
                          disabled={isAnimating}
                          onClick={() => {
                            setHasClicked(true);
                            reward();
                            play();
                            setTimeout(() => {
                              fullpageApi.moveSectionDown();
                              setTimeout(() => {
                                setOpacity(0);
                                setTimeout(() => {
                                  setShowSplash(false);
                                }, 1000);
                              }, 4000);
                            }, 1000);
                          }}
                        >
                          <span id="rewardId" />
                          Click to Start
                        </Button>
                      </Hero>
                    </Section>
                    <Section
                      className="section"
                      style={{
                        width: "100%",
                        margin: "0 auto",
                        backgroundImage: "url('/images/plastic.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div
                        style={{
                          maxWidth: "420px",
                          margin: "0 auto",
                          display: "flex",
                          flexDirection: "column",
                          gap: "15px",
                        }}
                      >
                        <h1>Booting up...</h1>
                        <ProgressBar variant="tile" value={percent} />
                      </div>
                    </Section>
                  </ReactFullpage.Wrapper>
                );
              }}
            />
          </Main>
        </div>
      ) : (
        <ThemeProvider theme={original}>
          <Default />
        </ThemeProvider>
      )}
    </div>
  );
};

export default App;
