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
    completed
  }
}`);
