import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { About } from "./About";
export const WindowRenderer = () => {
  const openWindows = useAppSelector(
    (state: RootState) => state.windows.openWindows
  );
  const dispatch = useAppDispatch();

  return (
    <div
      style={{
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: `calc(50% + ${Math.floor(Math.random() * 41) - 120}px)`,
        left: `calc(50% + ${Math.floor(Math.random() * 41) - 120}px)`,
      }}
    >
      {Object.keys(openWindows).map(
        (id) =>
          openWindows["about"] && (
            // <SomeWindow
            //   key={id}
            //   id={id}
            //   onClose={() => dispatch(toggleWindow(id))}
            // />
            <About />
          )
      )}
    </div>
  );
};
