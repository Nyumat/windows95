import { Button, Window, WindowContent, WindowHeader } from "react95";

export const SomeWindow = ({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) => (
  <Window style={{ width: 300 }}>
    <WindowHeader>
      <span>{id}</span>
      <Button onClick={onClose}>
        <span style={{ fontWeight: "bold", transform: "translateY(-1px)" }}>
          x
        </span>
      </Button>
    </WindowHeader>
    <WindowContent>
      <p>This is some content...</p>
    </WindowContent>
  </Window>
);
