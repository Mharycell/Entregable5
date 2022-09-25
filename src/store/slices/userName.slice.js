import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userName = createSlice({
  name: "UserName",
  initialState: "",
  reducers: {
    changeName: (state, action) => {
      const name = action.payload;
      return name;
    },
  },
});

export const { changeName } = userName.actions;

export default userName.reducer;
