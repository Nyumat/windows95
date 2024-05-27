import { AppLayoutHeader, AppLayoutMenu } from "@/components/layout";
import { getImagesUrl } from "@/utils/get-cdn-url";
import { PropsWithChildren, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select, Separator, Window } from "react95";
import styled from "styled-components";
import { LinkDoubleClick } from "../link-double-click";
import { Container as BgContainer } from "../../routes/home-page/index";

type Props = {
  title?: ReactNode;
  isLoading?: boolean;
  containerStyle?: React.CSSProperties;
  address?: string;
  onClose?: () => void;
};

export const Browser = ({
  title,
  containerStyle,
  address,
  onClose,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Container style={containerStyle}>
      <AppLayoutHeader title={title} onClose={onClose} />
      <AppLayoutMenu
        menu={[
          { label: "File", children: [] },
          { label: "Edit", children: [] },
          { label: "View", children: [] },
          { label: "Favorites", children: [] },
          { label: "Help", children: [] },
        ]}
      />
      <AppBar>
        <AppBarContainer>
          <Separator />
          <ImageBrowserIcons
            src={getImagesUrl("/browser-icons.png")}
            alt="browser icons"
          />
          <Separator />
          <AddressBarContainer>
            <AddressText>Address:</AddressText>
            <Select
              width="92%"
              value={address}
              options={[
                {
                  label: address,
                  value: address,
                },
              ]}
            />
          </AddressBarContainer>
        </AppBarContainer>
        <Win95LogoContainer>
          <Win95Logo src={getImagesUrl("/win95-logo.png")} alt="win95 logo" />
        </Win95LogoContainer>
      </AppBar>
      <WindowContent>{children}</WindowContent>
    </Container>
  );
};

const WindowContent = styled.div`
  height: calc(100dvh - 250px);
  overflow: auto;
`;

const AppBar = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  justify-content: space-between;
`;

const AppBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AddressBarContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 8px 4px;
`;

const AddressText = styled.div`
  width: 80px;
  padding-left: 8px;
`;

const ImageBrowserIcons = styled.img`
  width: 678px;
  height: 44px;
  padding: 8px 16px;
`;

const Win95LogoContainer = styled.div`
  width: 110px;
  height: 110px;
  border: 2px solid;
  border-top-color: #707070;
  border-left-color: #707070;
  border-right-color: #d9d9d9;
  border-bottom-color: #d9d9d9;
`;

const Win95Logo = styled.img`
  width: 106px;
  height: 106px;
  border: 2px solid;
  border-top-color: black;
  border-left-color: black;
  border-right-color: white;
  border-bottom-color: white;
`;

const WindowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WindowBox = ({
  title,
  containerStyle,
  address,
  onClose,
  children,
}: PropsWithChildren<{
  title: ReactNode;
  containerStyle?: React.CSSProperties;
  address: string;
  onClose?: () => void;
}>) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <>
      <BgContainer style={containerStyle}>
        {links.map((link) => (
          <AppLink
            to={link.link}
            key={link.label}
            onClick={() => setSelected(link.label)}
            selected={selected === link.label}
          >
            <AppIcon src={link.iconURL} alt={link.label} />
            <AppLabel>{link.label}</AppLabel>
          </AppLink>
        ))}
        <AppLayoutHeader title={title} onClose={onClose} />
        <AppLayoutMenu
          menu={[
            { label: "File", children: [] },
            { label: "Edit", children: [] },
            { label: "View", children: [] },
            { label: "Favorites", children: [] },
            { label: "Help", children: [] },
          ]}
        />
        <AppBar></AppBar>
        <WindowContent>{children}</WindowContent>
      </BgContainer>
    </>
  );
};

const links = [
  {
    label: "Refine Video Club",
    link: "/video-club",
    iconURL: `${getImagesUrl("/refine-video-club-app-icon.png")}`,
  },
  {
    label: "RVC Website",
    link: "/rvc-website",
    iconURL: `${getImagesUrl("/rvc-website-app-icon.png")}`,
  },
  {
    label: "Pokedex",
    link: "/pokedex",
    iconURL: `${getImagesUrl("/pokeball.png")}`,
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px 12px;
  gap: 40px;
`;

const AppLink = styled(LinkDoubleClick)<{ selected: boolean }>`
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

const AppIcon = styled.img`
  width: 64px;
  height: 64px;
  aspect-ratio: 1 / 1;
`;

const AppLabel = styled.div`
  color: white;
  text-align: center;
`;
