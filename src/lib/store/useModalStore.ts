import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  data: unknown;
  Open: (data?: unknown) => void;
  Close: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  Open: (data = null) =>
    set({
      isOpen: true,
      data,
    }),
  Close: () =>
    set({
      isOpen: false,
      data: null,
    }),
}));
