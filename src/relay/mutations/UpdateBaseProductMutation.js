// @flow

import { graphql, commitMutation } from 'react-relay';
import { Environment } from 'relay-runtime';

const mutation = graphql`
  mutation UpdateBaseProductMutation($input: UpdateBaseProductInput!) {
    updateBaseProduct(input: $input) {
      id
      rawId
      category {
        rawId
      }
      storeId
      name {
        lang
        text
      }
      shortDescription {
        lang
        text
      }
      longDescription {
        lang
        text
      } 
      seoTitle { 
        lang
        text
      }
      seoDescription {
        lang
        text
      }
    }
  }
`;

type MutationParamsType = {
  id: number,
  name: Array<{ lang: string, text: string }>,
  shortDescription: Array<{ lang: string, text: string }>,
  longDescription: Array<{ lang: string, text: string }>,
  seoTitle: Array<{ lang: string, text: string }>,
  seoDescription: Array<{ lang: string, text: string }>,
  currencyId: number,
  categoryId: number,
  environment: Environment,
  onCompleted: ?(response: ?Object, errors: ?Array<Error>) => void,
  onError: ?(error: Error) => void,
};

const commit = (params: MutationParamsType) => commitMutation(params.environment, {
  mutation,
  variables: {
    input: {
      clientMutationId: '',
      id: params.id,
      name: params.name,
      shortDescription: params.shortDescription,
      longDescription: params.longDescription,
      seoTitle: params.seoTitle,
      seoDescription: params.seoDescription,
      currencyId: params.currencyId,
      categoryId: params.categoryId,
    },
  },
  onCompleted: params.onCompleted,
  onError: params.onError,
});

export default { commit };