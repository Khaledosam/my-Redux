import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "0",
    name: "khaled",
  },
  {
    id: "1",
    name: "Hala",
  },
  {
    id: "2",
    name: "Kareem",
  },
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
