import { gql } from "@apollo/client";

export const PRODUCT_VARIATION_GET_STOCK = gql`query getInventoryVariationStatus($variationId: ID) {
  productVariation(id: $variationId, idType: databaseId) {
    stockQuantity
    stockStatus
    status
    manageStock
  }
}`;

