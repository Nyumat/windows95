import { Anchor, Button, Window, WindowContent, WindowHeader } from "react95";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleWindow } from "../redux/feats/windows/windowSlice";

export function About() {
  const state = useAppSelector((state) => state.windows);
  const dispatch = useAppDispatch();

  return (
    <>
      <Window>
        <WindowHeader className="flex items-center justify-between">
          <span>About</span>
          <Button onClick={() => dispatch(toggleWindow("about"))}>
            <span style={{ fontWeight: "bold", transform: "translateY(-1px)" }}>
              x
            </span>
          </Button>
        </WindowHeader>
        <WindowContent>
          <p className="h1">Poké95</p>
          <p className="mt2">An open source Windows 95 style Pokédex.</p>
          <p className="mt2">
            {"Built with "}{" "}
            <Anchor href="https://reactjs.org/" target="_blank">
              React
            </Anchor>
            {", "}
            <Anchor href="https://github.com/arturbien/React95" target="_blank">
              React95
            </Anchor>
            {`, and `}{" "}
            <Anchor href="https://pokeapi.co/" target="_blank">
              PokeAPI
            </Anchor>
            .
          </p>
          <p className="mt2">
            {"Icons "}{" "}
            <Anchor
              href="https://artage.io/en/icon-packs/original-windows-95-icons"
              target="_blank"
            >
              downloaded here.
            </Anchor>
          </p>
        </WindowContent>
      </Window>
    </>
  );
}
