import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    id: 1,
    img: "./images/sponsors/f1.png",
    alt: "f1",
  },
  {
    id: 2,
    img: "./images/sponsors/hoonigan.png",
    alt: "hoonigan",
  },
  {
    id: 3,
    img: "./images/sponsors/petronas.png",
    alt: "petronas",
  },
  {
    id: 4,
    img: "./images/sponsors/redbull.png",
    alt: "redbull",
  },
  {
    id: 5,
    img: "./images/sponsors/mobil1.png",
    alt: "mobil1",
  },
  {
    id: 6,
    img: "./images/sponsors/siemens.png",
    alt: "siemens",
  },
];

const sponsorsSlice = createSlice({
  name: "sponsors",
  initialState: initialValue,
  reducers: {},
});

export const getSponsors = (state) => state.sponsors;
export default sponsorsSlice.reducer;
