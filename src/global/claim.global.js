import create from 'zustand';

export const claimStore = create((set) => ({
  claim: {},
  setClaim: (payload) => set({ claim: payload }),
}));
