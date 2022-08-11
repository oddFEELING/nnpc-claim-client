import create from 'zustand';

export const navStore = create((set) => ({
  current: 'Home',

  // ======= Set current nav state -->
  setCurrent: (payload) =>
    set(() => {
      sessionStorage.setItem('nav', payload);
      return { current: payload };
    }),
}));
