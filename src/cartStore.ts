import { atom } from 'nanostores';

export const selectedItems = atom({slice: 0, mini: 0, whole: 0});

export const isItemMenuRendered = atom(false);

export const currentSearchParam = atom("");