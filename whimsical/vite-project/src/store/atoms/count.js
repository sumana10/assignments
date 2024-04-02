import { atom } from "recoil";
import { selector } from 'recoil';

export const countAtom = atom({
    key: "countAtom",
    default: 0
});

export const eventSelector = selector({
    key: 'eventSelector',
    get: ({ get }) => {

      const count = get(countAtom);
      return count % 2 === 0;
      
    },
  });