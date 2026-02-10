'use client';

import type { Dispatch, SetStateAction } from 'react';
import type { RecoLocItem } from '@/types/AIBestLocation/reco';

export type MapFocusHandler = (item: RecoLocItem, index?: number) => void;

export function createMapFocusHandler(args: {
  setFocusItem: Dispatch<SetStateAction<RecoLocItem | null>>;
  setFocusKey: Dispatch<SetStateAction<number>>;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}): MapFocusHandler {
  const { setFocusItem, setFocusKey, setActiveIndex } = args;
  return (item, index) => {
    setFocusItem(item);
    setFocusKey((k) => k + 1);
    if (typeof index === 'number') {
      setActiveIndex(index);
    }
  };
}
