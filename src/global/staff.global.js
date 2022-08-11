import create from 'zustand';

export const staffStore = create((set) => ({
  staff: null,
  setStaff: (payload) => set({ staff: payload }),
}));
