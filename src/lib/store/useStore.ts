import { create } from "zustand";


interface StoreType{
  logged: boolean;
  dark: boolean;
  shiftLogged: () => void;
  shiftDark:()=>void;
}

export const useStore = create<StoreType>((set) => ({
  logged: false,
  dark: false,
  shiftLogged: () => set((state) => ({
    logged: !state.logged,
  })),
  shiftDark: () => set((state) => ({
    dark: !state.dark,
  }))
}))