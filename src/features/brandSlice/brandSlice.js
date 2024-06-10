import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    id: 1,
    brand: "Mercedes-Benz",
    name: "benz",
    image: "./images/brands/select/mercedes.jpg",
  },
  {
    id: 2,
    brand: "Porsche",
    name: "porsche",
    image: "./images/brands/select/porsche.jpg",
  },
  {
    id: 3,
    brand: "Ferrari",
    name: "ferrari",
    image: "./images/brands/select/ferrari.jpeg",
  },
  {
    id: 4,
    brand: "Lamborghini",
    name: "lamborghini",
    image: "./images/brands/select/lamborghini.jpg",
  },
  {
    id: 5,
    brand: "Bugatti",
    name: "bugatti",
    image: "./images/brands/select/bugatti.jpg",
  },
  {
    id: 6,
    brand: "Hennessey",
    name: "hennessey",
    image: "./images/brands/select/hennessey.jpg",
  },
  {
    id: 7,
    brand: "Ford",
    name: "ford",
    image: "./images/brands/select/ford.jpeg",
  },
  {
    id: 8,
    brand: "Lancia",
    name: "lancia",
    image: "./images/brands/select/lancia.jpeg",
  },
  {
    id: 9,
    brand: "Chevrolet",
    name: "chevrolet",
    image: "./images/brands/select/chevrolet.jpg",
  },
  {
    id: 10,
    brand: "Aston Martin",
    name: "aston",
    image: "./images/brands/select/aston.jpg",
  },
  {
    id: 11,
    brand: "BMW",
    name: "bmw",
    image: "./images/brands/select/bmw.jpg",
  },
  {
    id: 12,
    brand: "AUDI",
    name: "audi",
    image: "./images/brands/select/audi.jpg",
  },
];

const brandSlice = createSlice({
  name: "brand",
  initialState: initialValue,
  reducers: {},
});

export const getBrands = (state) => state.brand;
export default brandSlice.reducer;
