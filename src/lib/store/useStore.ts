import { create } from "zustand";

interface StoreType {
  isLogged: boolean;
  dark: boolean;
  showNewProd: boolean;
  search: string;
  shiftLogged: () => void;
  shiftDark: () => void;
  shiftShowNewProduct: () => void;
  setSearch: (s: string) => void;
}

export const useStore = create<StoreType>((set) => ({
  isLogged: false,
  dark: false,
  search: "",
  showNewProd: true,
  shiftLogged: () =>
    set((state) => ({
      isLogged: !state.isLogged,
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
