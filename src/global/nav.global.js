import create from 'zustand';

export const navStore = create((set) => ({
  current: 'Dashboard',
  setCurrent: (payload) => set(() => ({ current: payload })),
}));
