import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  footerLinks: [
    {
      id: 1,
      link: "/history",
      textKey: "HistoryOfCars",
    },
    {
      id: 2,
      link: "/news",
      textKey: "AutomobileNews",
    },
    {
      id: 3,
      link: "/brands",
      textKey: "FamousBrands",
    },
    {
      id: 4,
      link: "/about",
      textKey: "AboutUs",
    },
    {
      id: 5,
      link: "/contact",
      textKey: "ContactUs",
    },
  ],
};

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {},
});

export const getFooter = (state) => state.footer.footerLinks;
export const getTranslations = (state) => state.footer.translations;

export default footerSlice.reducer;
