// @ts-nocheck
import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import { Button, Hourglass, WindowContent, WindowHeader } from "react95";
import { toggleWindow } from "../redux/feats/windows/windowSlice";
import { useAppDispatch } from "../redux/hooks";
import { StyledWindow } from "./MediaPlayer";

export function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        const fetches = data.results.map((p) =>
          fetch(p.url).then((response) => response.json())
        );
        Promise.all(fetches).then((pokemonData) => {
          setPokemon(pokemonData);
          setLoading(false);
        });
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredPokemon);

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
                <span>pokedex.exe</span>{" "}
                <Button
                  style={{ marginLeft: "auto", marginTop: "3px" }}
                  size="sm"
                  onClick={() => dispatch(toggleWindow("pokedex"))}
                >
                  <span role="img" aria-label="minimize">
                    -
                  </span>
                </Button>{" "}
              </WindowHeader>
              <WindowContent
                style={{
                  //   max height 500px and width 500px
                  maxHeight: "500px",
                  maxWidth: "500px",
                  overflow: "scroll",
                }}
              >
                <input
                  placeholder="Search Pokemon..."
                  value={search}
                  onChange={handleSearchChange}
                />
                {loading ? (
                  <Hourglass />
                ) : (
                  <div>
                    {filteredPokemon.map((p, index) => (
                      <div key={index}>
                        <img
                          src={p.sprites.front_default}
                          //   alt={p.name}
                          style={{ marginRight: "10px" }}
                        />
                        {p.name}
                      </div>
                    ))}
                  </div>
                )}
              </WindowContent>
            </StyledWindow>
          </ResizableBox>
        </div>
      </Draggable>
    </>
  );
}
