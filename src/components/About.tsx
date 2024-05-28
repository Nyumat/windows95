import Draggable from "react-draggable";
import { Anchor, Button, Window, WindowContent, WindowHeader } from "react95";
import { toggleWindow } from "../redux/feats/windows/windowSlice";
import { useAppDispatch } from "../redux/hooks";

export function About() {
  const dispatch = useAppDispatch();
  return (
    <>
      <Draggable handle=".handle">
        <Window
          style={{
            minWidth: "550px",
          }}
        >
          <WindowHeader
            className="handle"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>About</span>
            <Button
              onClick={() => dispatch(toggleWindow("about"))}
              style={{ marginLeft: "auto" }}
            >
              <span
                style={{ fontWeight: "bold", transform: "translateY(-1px)" }}
              >
                x
              </span>
            </Button>
          </WindowHeader>
          <WindowContent>
            <img
              src="/images/me.png"
              alt="me"
              style={{
                float: "right",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                border: "2px solid black",
                margin: "0 0 1rem 1rem",
              }}
            />
            <p style={{ width: "100%" }}>
              Hey! I'm Nyumat. I build stuff...sometimes.
            </p>
            <p className="mt2">
              I built this for the BeaverHacks Spring 2024 Hackathon. <br />
              Be sure to ⭐️ the repo if you enjoy this project.
            </p>
            <p className="mt2">
              {"Built with "}{" "}
              <Anchor href="https://react.dev/" target="_blank">
                React
              </Anchor>
              {", "}
              <Anchor
                href="https://github.com/arturbien/React95"
                target="_blank"
              >
                React95
              </Anchor>
              {`, and the `}{" "}
              <Anchor href="https://pokeapi.co/" target="_blank">
                PokeAPI
              </Anchor>
              .
            </p>
            <p className="mt2">
              {"Icons are retrieved "}{" "}
              <Anchor
                href="https://artage.io/en/icon-packs/original-windows-95-icons"
                target="_blank"
              >
                from here.
              </Anchor>
            </p>
          </WindowContent>
        </Window>
      </Draggable>
    </>
  );
}
