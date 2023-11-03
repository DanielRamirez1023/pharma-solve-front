import { gql } from "@apollo/client";

export const CREATE_MEDICINE = gql(`
mutation CreateMedicine($name: String, $laboratory: String, $description: String, $pharmacy: TypePharmacy, $amount: Int) {
  createMedicine(name: $name, laboratory: $laboratory, description: $description, pharmacy: $pharmacy, amount: $amount) {
    _id
    name
    laboratory
    description
    pharmacy
    amount
    completed
    createdAt
  
  }
}`);

export const DELETE_MEDICINE = gql(`
mutation Mutation($id: ID!) {
  deleteMedicine(_id: $id) {
    name
    laboratory
    description
    createdAt
    amount
  }
}`);
