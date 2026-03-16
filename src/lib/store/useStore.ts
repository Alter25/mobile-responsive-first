import { create } from "zustand";

interface StoreType {
  logged: boolean;
  dark: boolean;
  showNewProd: boolean;
  search: string;
  shiftLogged: () => void;
  shiftDark: () => void;
  shiftShowNewProduct: () => void;
  setSearch: (s: string) => void;
}

export const useStore = create<StoreType>((set) => ({
  logged: true,
  dark: false,
  search: "",
  showNewProd: true,
  shiftLogged: () =>
    set((state) => ({
      logged: !state.logged,
    })),
  shiftDark: () =>
    set((state) => ({
      dark: !state.dark,
    })),
  shiftShowNewProduct: () =>
    set((state) => ({
      showNewProd: !state.showNewProd,
    })),
  setSearch: (s: string) =>
    set(() => ({
      search: s,
    })),
}));
