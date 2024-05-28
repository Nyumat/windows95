import Draggable from "react-draggable";
import {
  Button,
  Frame,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import styled from "styled-components";
import { LinkDoubleClick } from "../components/DoubleClickLink";

export const HomePage = ({
  selected,
  setSelected,
}: {
  selected: string | null;
  setSelected: (selected: string | null) => void;
}) => {
  return (
    <>
      <Draggable>
        <Window resizable className="window">
          <WindowHeader className="window-title">
            <span>react95.exe</span>
            <Button>
              <span className="close-icon" />
            </Button>
          </WindowHeader>
          <Toolbar>
            <Button variant="menu" size="sm">
              File
            </Button>
            <Button variant="menu" size="sm">
              Edit
            </Button>
            <Button variant="menu" size="sm" disabled>
              Save
            </Button>
          </Toolbar>
          <WindowContent>
            <p>
              When you set "resizable" prop, there will be drag handle in the
              bottom right corner (but resizing itself must be handled by you
              tho!)
            </p>
          </WindowContent>
          <Frame variant="well" className="footer">
            Put some useful information here
          </Frame>
        </Window>
      </Draggable>
    </>
  );
};

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px 12px;
  gap: 40px;
`;

export const AppLink = styled(LinkDoubleClick)<{ selected: boolean }>`
  width: 120px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: ${({ selected }) =>
    selected ? "0 0 0 1px black" : "0 0 0 1px transparent"};
`;

export const AppIcon = styled.img`
  width: 64px;
  height: 64px;
  aspect-ratio: 1 / 1;
`;

export const AppLabel = styled.div`
  color: white;
  text-align: center;
`;

export const links = [
  {
    label: "Pokedex",
    link: "/pokedex",
    iconURL: `/images/pokeball.png`,
  },
  {
    label: "Media Player",
    link: "/media-player",
    iconURL: `/images/return-tape.png`,
  },
  {
    label: "MS Paint",
    link: "/paint",
    iconURL: "/images/paint.png",
  },
];
