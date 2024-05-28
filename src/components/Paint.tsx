import Draggable from "react-draggable";
import { Button, WindowHeader } from "react95";
import { toggleWindow } from "../redux/feats/windows/windowSlice";
import { useAppDispatch } from "../redux/hooks";
import { StyledWindow } from "./MediaPlayer";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

export function Paint() {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(toggleWindow("paint"));
  };

  return (
    <>
      <Draggable handle=".handle">
        <div className="player">
          <ResizableBox
            width={800}
            height={600}
            minConstraints={[200, 200]}
            maxConstraints={[800, 600]}
            className="box"
          >
            <StyledWindow
              resizable
              style={{
                width: "100%",
                height: "100%",
                minWidth: "400px",
                minHeight: "100%",
              }}
            >
              <WindowHeader
                className="window-title handle"
                style={{ display: "flex" }}
              >
                <span>paint.exe</span>{" "}
                <Button
                  style={{ marginLeft: "auto", marginTop: "3px" }}
                  size="sm"
                  onClick={handleClose}
                >
                  <span role="img" aria-label="minimize">
                    -
                  </span>
                </Button>{" "}
              </WindowHeader>
              <iframe
                src="https://jspaint.app"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </StyledWindow>
          </ResizableBox>
        </div>
      </Draggable>
    </>
  );
}
