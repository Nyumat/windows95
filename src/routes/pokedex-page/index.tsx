import { WindowBox } from "@/components/browser";
import { ImagePixelated } from "@/components/image-pixelated";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "swiper/css";

export const PokdexPageHome = () => {
  const navigate = useNavigate();

  return (
    <WindowBox
      title="Pokedex"
      onClose={() => navigate("/")}
      address="hi"
      containerStyle={{
        width: "50%",
        margin: "auto",
        height: "70%",
      }}
    >
      <p>Hello</p>
    </WindowBox>
  );
};

const Hero = styled.img`
  display: block;
  max-width: 872px;
  margin-top: 32px;
`;

const HeroTitle = styled.h1`
  color: #ffff00;
  font-size: 40px;
  line-height: 40px;
  margin-top: 40px;
`;

const HeroDescription = styled.p`
  max-width: 440px;
  color: #ffffff;
  margin-top: 16px;
  text-align: center;
`;

const SwiperContainer = styled.div`
  width: 100%;
  height: 224px;
  margin-top: 32px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 40px;

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SwiperButton = styled.img<{ dir: "left" | "right" }>`
  display: block;
  width: 62px;
  height: 62px;
  transform: rotate(${({ dir }) => (dir === "left" ? "0deg" : "180deg")});
  cursor: pointer;
`;

const TitleContainer = styled(Link)`
  appearance: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  gap: 8px;
`;

const TitleImage = styled(ImagePixelated)`
  display: block;
  width: 120px;
  height: 180px;
  aspect-ratio: 120 / 180;
`;

const TitleLabel = styled.h2`
  color: #00ccff;
  text-align: center;
`;

const TopTitlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  margin-top: 24px;
`;

const NewGif = styled.img`
  width: 120px;
  height: 30px;
  margin-top: 64px;
`;

const Top10Gif = styled.img`
  width: 232px;
  height: 80px;
  margin-top: 80px;
`;

const SeparatorGif = styled.img<{ dir: "left" | "right" }>`
  transform: rotate(${({ dir }) => (dir === "left" ? "0deg" : "180deg")});
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const TOP_TITLES = [
  {
    id: 162,
    poster_path: "/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
    title: "Jurassic Park",
  },
  {
    id: 17,
    poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    title: "Pulp Fiction",
  },
  {
    id: 106,
    poster_path: "/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg",
    title: "Die Hard",
  },
  {
    id: 19,
    poster_path: "/5M0j0B18abtBI5gi2RhfjjurTqb.jpg",
    title: "Terminator 2: Judgment Day",
  },
  {
    id: 12,
    poster_path: "/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    title: "The Lion King",
  },
  {
    id: 769,
    poster_path: "/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg",
    title: "Home Alone",
  },
  {
    id: 21,
    poster_path: "/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
    title: "Back to the Future",
  },
  {
    id: 48,
    poster_path: "/2162lAT2MP36MyJd2sttmj5du5T.jpg",
    title: "Interview with the Vampire",
  },
  {
    id: 226,
    poster_path: "/yaHnZqJvsSddOKYxf4zCj2Ww2hA.jpg",
    title: "Ace Ventura",
  },
  {
    id: 9,
    poster_path: "/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    title: "Toy Story",
  },
];
