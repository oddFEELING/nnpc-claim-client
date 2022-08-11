import create from 'zustand';

export const authStore = create((set) => ({
  isAuthenticated: true,
  setAuth: (payload) => set({ isAuthenticated: payload }),
}));
