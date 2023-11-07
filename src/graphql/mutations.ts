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

export const UPDATE_MEDICINE = gql(`
mutation Mutation($id: ID!, $laboratory: String, $name: String, $description: String, $amount: Int) {
  updateMedicine(_id: $id, laboratory: $laboratory, name: $name, description: $description, amount: $amount) {
    _id
    name
    description
    laboratory
    pharmacy
    amount
    completed
    createdAt
  }
}
`);
