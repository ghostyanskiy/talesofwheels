import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    id: 1,
    textKey1: "ContactPhoneNumber",
    textKey2: "ContactNumber1",
    textKey3: "ContactNumber2",
    textKey4: "ContactNumber3",
  },
  {
    id: 2,
    textKey1: "ContactMailAddress",
    textKey2: "ContactMail1",
    textKey3: "ContactMail2",
    textKey4: "ContactMail3",
  },
  {
    id: 3,
    textKey1: "ContactAddress",
    textKey2: "ContactAdd1",
    textKey3: "ContactAdd2",
    textKey4: "ContactAdd3",
  },
];

const contactSlice = createSlice({
  name: "contact",
  initialState: initialValue,
  reducers: {},
});

export const getContact = (state) => state.contact;
export default contactSlice.reducer;
