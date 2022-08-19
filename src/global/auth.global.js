import create from 'zustand';

export const authStore = create((set) => ({
  otp: '',
  secret_ID: '',
  token: '',
  isAuthenticated: true,
  setOTP: (payload) => set({ otp: payload }),
  setToken: (payload) => set({ token: payload }),
  setSecret: (payload) => set({ secret_ID: payload }),
  setAuth: (payload) => set({ isAuthenticated: payload }),
}));
