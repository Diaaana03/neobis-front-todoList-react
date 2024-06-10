import { create } from "zustand";

export default create((set) => {
  return {
    color: "blue",

    getBlueColor: () => {
      set((state) => {
        return { color: "blue" };
      });
    },

    getPinkColor: () => {
      set((state) => {
        return { color: "pink" };
      });
    },
  };
});
