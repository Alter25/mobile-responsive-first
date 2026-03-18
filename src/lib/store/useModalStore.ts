import { create } from "zustand";
import type { ProductsType } from "@/types/Types";

interface ModalStore {
  isOpen: boolean;
  data: ProductsType | null;
  open: (data: ProductsType | null) => void;
  close: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: true,
  data: null,
  open: (data) =>
    set({
      isOpen: true,
      data,
    }),
  close: () =>
    set({
      isOpen: false,
      data: null,
    }),
}));
