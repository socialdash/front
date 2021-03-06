// @flow strict

import { graphql } from 'react-relay';
import { basicMutation } from 'relay/mutations/basicMutation';
import type { MutationType } from 'relay/mutations/basicMutation/basicMutation';

import type {
  RemoveDeliveryMethodForProductMutationVariables,
  RemoveDeliveryMethodForProductMutationResponse,
} from './__generated__/RemoveDeliveryMethodForProductMutation.graphql';

const mutation = graphql`
  mutation RemoveDeliveryMethodForProductMutation(
    $input: RemoveDeliveryMethodFromCartInput!
  ) {
    removeDeliveryMethodFromCart(input: $input) {
      id
      productsCost
      deliveryCost
      totalCost
      totalCount
      couponsDiscounts
      stores {
        edges {
          node {
            id
            productsCost
            deliveryCost
            totalCost
            totalCount
            totalCostWithoutDiscounts
            couponsDiscount
            products {
              id
              subtotal
              deliveryCost
              companyPackage {
                id
                rawId
              }
              selectPackage {
                id
                shippingId
              }
            }
          }
        }
      }
    }
  }
`;

const removeDeliveryMethodForProductMutation: MutationType<
  RemoveDeliveryMethodForProductMutationVariables,
  RemoveDeliveryMethodForProductMutationResponse,
> = basicMutation(mutation, 'removeDeliveryMethodFromCart');

export default removeDeliveryMethodForProductMutation;
