import { create } from "zustand";

export const useModelStore = create((set) => ({
    inViewModel: null,
    setInViewModel: (model) => set({ inViewModel: model }),
}));