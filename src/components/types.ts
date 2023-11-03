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
