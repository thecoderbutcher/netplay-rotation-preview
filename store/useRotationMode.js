import { create } from "zustand";

export const useRotationMode = create((set) => ({
  mode: "base",
  active: "base",
  position: "Posición inicial",
  setPosition: (position) => set({ position }),
  setMode: (mode) => set({ mode }),
  setActive: (active) => set({ active }),
}));
