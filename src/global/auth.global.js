import create from 'zustand';

export const authStore = create((set) => ({
  otp: '',
  secret_ID: '',
  token: '',
  isAuthenticated: false,
  setOTP: (payload) => set({ otp: payload }),
  setSecret: (payload) => set({ secret_ID: payload }),
  setAuth: (payload) => set({ isAuthenticated: payload }),
}));
