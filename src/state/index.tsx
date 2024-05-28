import React, { createContext, useReducer, Dispatch } from "react";

// Define state structure with an interface
interface State {
  menu: boolean;
  pokemonModal: boolean;
  aboutModal: boolean;
  activeModal: string;
  hidePokemonModalButton: boolean;
  hideAboutModalButton: boolean;
  tab: number;
  fetchPokemonLoading: boolean;
  selectedPokemon: {
    name: string | null;
    stats: unknown[];
    types: unknown[];
    abilities: unknown[];
  };
  spriteEndpoint: string;
}

// Define action type with a type union and interfaces
type Action =
  | { type: "SET_MENU"; payload: boolean }
  | { type: "SET_POKEMON_MODAL"; payload: boolean }
  | { type: "SET_ABOUT_MODAL"; payload: boolean }
  | { type: "SET_TAB"; payload: number }
  | { type: "SET_FETCH_POKEMON_LOADING"; payload: boolean }
  | { type: "SET_ACTIVE_MODAL"; payload: string }
  | { type: "SET_SELECTED_POKEMON"; payload: State["selectedPokemon"] }
  | { type: "SET_HIDE_POKEMON_MODAL_BUTTON"; payload: boolean }
  | { type: "SET_HIDE_ABOUT_MODAL_BUTTON"; payload: boolean };

const initialState: State = {
  menu: false,
  pokemonModal: false,
  aboutModal: false,
  activeModal: "",
  hidePokemonModalButton: true,
  hideAboutModalButton: true,
  tab: 0,
  fetchPokemonLoading: false,
  selectedPokemon: {
    name: null,
    stats: [],
    types: [],
    abilities: [],
  },
  spriteEndpoint:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
};

// Create a context with an undefined default value, then assert the type.
const StoreContext = createContext<[State, Dispatch<Action>] | undefined>(
  undefined
);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_MENU":
    case "SET_POKEMON_MODAL":
    case "SET_ABOUT_MODAL":
    case "SET_HIDE_POKEMON_MODAL_BUTTON":
    case "SET_HIDE_ABOUT_MODAL_BUTTON":
      action.payload && setBodyOverflow(action.payload ? "hidden" : "visible");
      return {
        ...state,
        [action.type.replace("SET_", "").toLowerCase()]: action.payload,
      };
    case "SET_TAB":
    case "SET_FETCH_POKEMON_LOADING":
    case "SET_ACTIVE_MODAL":
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        [action.type.replace("SET_", "").toLowerCase()]: action.payload,
      };
    default:
      return state;
  }
}

function setBodyOverflow(property: string) {
  document.body.style.overflow = property;
}

const Store = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
export { StoreContext };
