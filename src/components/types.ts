import { Dispatch, SetStateAction } from "react";

export interface Medicine {
  amount: number;
  completed: boolean;
  createdAt: string;
  description: string;
  laboratory: string;
  name: string;
  pharmacy: string;
  _id: string;
}

export interface NewMedicine {
  amount: number;
  description: string;
  laboratory: string;
  name: string;
}

export type ListMedicinesQuery = {
  ListMedicines: Array<Medicine>;
};

export type LoginQuery = {
  login: {
    token: string;
    user: {
      email: string;
      name: string;
      role: string;
      createdAt: string;
    };
  };
};

export type ModalContextType = {
  item: Medicine;
  setItem: Dispatch<SetStateAction<Medicine>>;
};

export interface ListMedicineCache {
  ListMedicines: Array<Medicine>;
}

export interface CreateMedicineMutation {
  createMedicine: Medicine;
}

export interface UpdateMedicineMutation {
  updateMedicine: Medicine;
}
