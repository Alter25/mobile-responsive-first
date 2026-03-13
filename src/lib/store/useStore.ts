import { create } from "zustand";

interface StoreType {
  logged: boolean;
  dark: boolean;
  search: string;
  shiftLogged: () => void;
  shiftDark: () => void;
  setSearch: (s: string) => void;
}

export const useStore = create<StoreType>((set) => ({
  logged: false,
  dark: false,
  search: "",
  shiftLogged: () =>
    set((state) => ({
      logged: !state.logged,
    })),
  shiftDark: () =>
    set((state) => ({
      dark: !state.dark,
    })),
  setSearch: (s: string) =>
    set(() => ({
      search: s,
    })),
}));
