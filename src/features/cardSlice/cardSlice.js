import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    id: 1,
    text: "911 LEGACY",
    secondary: "CREATED FOR SPEED",
    img: "./images/cards/911.jpg",
    video: "./videos/cards/911.mp4",
    keyText1: "CardPorsche1",
    keyText2: "CardPorsche2",
  },
  {
    id: 2,
    text: "RALLY RAPTOR",
    secondary: "UNLEASHING THE QUATTRO SPIRIT",
    img: "./images/cards/quattro.jpg",
    video: "./videos/cards/quattro.mp4",
    keyText1: "CardAudi1",
    keyText2: "CardAudi2",
  },
  {
    id: 3,
    text: "THE SCARLET SPEEDSTER",
    secondary: "INSANE F40",
    img: "./images/cards/f40.jpg",
    video: "./videos/cards/f40.mp4",
    keyText1: "CardFerrari1",
    keyText2: "CardFerrari2",
  },
  {
    id: 4,
    text: "PHANTOM FURY",
    secondary: "THE BEAST WITHIN",
    img: "./images/cards/lotec.jpg",
    video: "./videos/cards/lotec.mp4",
    keyText1: "CardLotec1",
    keyText2: "CardLotec2",
  },
];

const cardSlice = createSlice({
  name: "card",
  initialState: initialValue,
  reducers: {},
});

export const getCards = (state) => state.card;
export default cardSlice.reducer;
