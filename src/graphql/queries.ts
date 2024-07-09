import { gql } from "@apollo/client";

export const LIST_MEDICINES = gql(`
query Medicines {
  ListMedicines {
    _id
    name
    laboratory
    description
    amount
    createdAt
    pharmacy
    status
  }
}`);

export const LIST_USERS = gql(`
  query ListUsers {
  ListUsers {
    _id
    email
    name
    role
    createdAt
  }
}
  `);
