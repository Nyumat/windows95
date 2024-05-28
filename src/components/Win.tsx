import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Window, WindowContent, Button, WindowHeader } from "react95";
import { RootState } from "../redux/store";
import { toggleWindow } from "../redux/feats/windows/windowSlice";

interface WindowProps {
  id: string;
  title: string;
}

const WindowComponent: React.FC<WindowProps> = ({ id, title }) => {
  const isOpen = useSelector(
    (state: RootState) => state.windows.openWindows[id]
  );
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <Window
      style={{ zIndex: 100, position: "absolute", left: "20%", top: "10%" }}
    >
      <WindowHeader>
        <span>{title}</span>
        <Button onClick={() => dispatch(toggleWindow(id))}>
          <span style={{ fontWeight: "bold", transform: "translateY(-1px)" }}>
            x
          </span>
        </Button>
      </WindowHeader>
      <WindowContent>
        <p>Content for {title}</p>
      </WindowContent>
    </Window>
  );
};

export default WindowComponent;
