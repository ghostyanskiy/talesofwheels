import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    id: 1,
    text: "HISTORY OF CARS",
    link: "/history",
    class: "history",
    animation: "slideLeft",
    duration: "1s",
  },
  {
    id: 2,
    text: "FAST NEWS",
    link: "/news",
    class: "news",
    animation: "slideLeft",
    duration: "1.2s",
  },
  {
    id: 3,
    text: "FAMOUS BRANDS",
    link: "/brands",
    class: "brands",
    animation: "slideLeft",
    duration: "1.4s",
  },
  {
    id: 4,
    text: "ABOUT US",
    link: "/about",
    class: "about",
    animation: "slideRight",
    duration: "1.6s",
  },
  {
    id: 5,
    text: "CONTACT US",
    link: "/contact",
    class: "contact",
    animation: "slideRight",
    duration: "1.7s",
  },
];

const navbarSlice = createSlice({
  name: "navbar",
  initialState: initialValue,
  reducers: {},
});

export const getNavbar = (state) => state.navbar;
export default navbarSlice.reducer;
