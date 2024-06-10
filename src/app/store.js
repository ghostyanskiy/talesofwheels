import { configureStore } from "@reduxjs/toolkit";
import {
  brandSlice,
  cardSlice,
  contactSlice,
  faqSlice,
  footerSlice,
  historySlice,
  navbarSlice,
  newsSlice,
  sponsorsSlice,
} from "../features";

const store = configureStore({
  reducer: {
    footer: footerSlice,
    navbar: navbarSlice,
    card: cardSlice,
    brand: brandSlice,
    news: newsSlice,
    faq: faqSlice,
    history: historySlice,
    contact: contactSlice,
    sponsors: sponsorsSlice,
  },
});

export default store;
