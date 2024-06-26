import { useState } from "react";
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar,
} from "react95";

import { AppContainer, AppIcon, AppLabel, AppLink } from "../pages/HomePage";
import { toggleWindow } from "../redux/feats/windows/windowSlice";
import { useAppDispatch } from "../redux/hooks";
import { WindowRenderer } from "./Renderer";
import logoIMG from "/images/windowslogo.png";
import { links } from "../utils/constants";

export function Default() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<string | null>(null);

  const handleGitHub = () => {
    window.open("https://github.com/nyumat", "_blank");
  };

  return (
    <div style={{ background: "teal", height: "100vh" }}>
      <nav>
        <AppBar position="fixed" style={{ bottom: 0, top: "auto" }}>
          <Toolbar style={{ justifyContent: "space-between" }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <Button
                onClick={() => setOpen(!open)}
                active={open}
                style={{ fontWeight: "bold" }}
              >
                <img
                  src={logoIMG}
                  alt="react95 logo"
                  style={{ height: "20px", marginRight: 4 }}
                />
                Start
              </Button>
              {open && (
                <MenuList
                  style={{
                    position: "absolute",
                    left: "0",
                    bottom: "100%",
                  }}
                  onClick={() => setOpen(false)}
                >
                  <MenuListItem onClick={handleGitHub}>
                    <span role="img" aria-label="👨‍💻">
                      <img
                        src="/images/github.gif"
                        alt="windows logo"
                        style={{
                          height: "35px",
                          marginTop: 10,
                        }}
                      />
                    </span>
                    GitHub
                  </MenuListItem>
                  <MenuListItem onClick={() => dispatch(toggleWindow("about"))}>
                    <span role="img" aria-label="📝">
                      <img
                        src="/images/info-bubble.png"
                        alt="about"
                        style={{
                          height: "35px",
                          marginTop: 10,
                        }}
                      />
                    </span>
                    About
                  </MenuListItem>
                  <Separator />
                  <MenuListItem disabled>
                    <span role="img" aria-label="🔙">
                      🔙
                    </span>
                    Logout
                  </MenuListItem>
                </MenuList>
              )}
            </div>
            {/* Render Active windows here */}
            <TextInput placeholder="Search..." width={150} />
          </Toolbar>
        </AppBar>
      </nav>
      <main>
        <AppContainer>
          {links.map((link) => (
            <AppLink
              to={link.link}
              key={link.label}
              onClick={() => {
                setSelected(link.label);
              }}
              selected={selected === link.label}
            >
              <AppIcon src={link.iconURL} alt={link.label} />
              <AppLabel>{link.label}</AppLabel>
            </AppLink>
          ))}
          <WindowRenderer />
        </AppContainer>
      </main>
    </div>
  );
}
