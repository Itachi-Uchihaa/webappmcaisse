

import { create } from 'zustand'

interface TableData {
  id: string;
  name: string;
  numberCouverts: number;
  shape: string;
  scale: number;
  x: number;
  y: number;
  salleID: string;
}

interface TableState {
  data: TableData;
  loading: boolean;
  error: string | null;
  fetchData?: () => Promise<void>;
}

const useTableStore = create<TableState>((set) => ({
  data: {
    "id": "3382EAA7-7954-4C22-B720-E43692579541",
    "name": "7",
    "numberCouverts": 6,
    "shape": "rectangle",
    "scale": 1,
    "x": 0.5573202967643738,
    "y": 0.5337530970573425,
    "salleID": "C972F3E8-9796-48B7-AA6F-6B4FA935A147"
  },
  loading: false,
  error: null,
  fetchData: async () => {
  },
}));

export default useTableStore;