import { Dispatch, SetStateAction } from "react";

enum TypeStatus {
  SIN_REVISAR = "sin revisar",
  PENDIENTE = "pendiente",
  COMPLETADO = "completado",
}

export interface Medicine {
  amount: number;
  status: TypeStatus;
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
