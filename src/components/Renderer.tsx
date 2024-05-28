import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { About } from "./About";
import { MediaPlayer } from "./MediaPlayer";
import { Paint } from "./Paint";
export const WindowRenderer = () => {
  const openWindows = useAppSelector(
    (state: RootState) => state.windows.openWindows
  );
  return (
    <div
      style={{
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: `calc(50% + ${Math.floor(Math.random() * 41) - 120}px)`,
        left: `calc(50% + ${Math.floor(Math.random() * 41) - 120}px)`,
      }}
    >
      {openWindows.about && <About />}
      {openWindows.mediaplayer && <MediaPlayer youtubeKey="JuYeHPFR3f0" />}
      {openWindows.paint && <Paint />}
    </div>
  );
};
