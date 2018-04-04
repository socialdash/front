// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';
import { pathOr, isEmpty } from 'ramda';

import { Page } from 'components/App';
import { Container, Row, Col } from 'layout';
import { log, fromRelayError } from 'utils';
import { UpdateBaseProductMutation } from 'relay/mutations';

import Form from './Form';

import Menu from '../Menu';

type PropsType = {
  //
};

type StateType = {
  //
};

class EditProduct extends Component<PropsType, StateType> {
  state: StateType = {
    //
  };

  handleSave = (form: ?{}) => {
    if (!form) {
      return;
    }
    const {
      name,
      categoryId,
      seoTitle,
      seoDescription,
      shortDescription,
      fullDesc,
    } = form;
    const id = pathOr(null, ['me', 'baseProduct', 'id'], this.props);
    UpdateBaseProductMutation.commit({
      id,
      name: [{ lang: 'EN', text: name }],
      shortDescription: isEmpty(shortDescription) ? [] : [{ lang: 'EN', text: shortDescription }],
      longDescription: isEmpty(fullDesc) ? [] : [{ lang: 'EN', text: fullDesc }],
      categoryId,
      seoTitle: isEmpty(seoTitle) ? [] : [{ lang: 'EN', text: seoTitle }],
      seoDescription: isEmpty(seoDescription) ? [] : [{ lang: 'EN', text: seoDescription }],
      environment: this.context.environment,
      onCompleted: (response: ?Object, errors: ?Array<Error>) => {
        log.debug({ response, errors });
      },
      onError: (error: Error) => {
        log.debug({ error });
        const relayErrors = fromRelayError(error);
        log.debug({ relayErrors });
        const validationErrors = pathOr(null, ['100', 'messages'], relayErrors);
        if (validationErrors) {
          this.setState({ formErrors: validationErrors });
          return;
        }
        alert('Something going wrong :(');
      },
    });
  };

  render() {
    const baseProduct = pathOr(null, ['me', 'baseProduct'], this.props);
    return (
      <Container>
        <Row>
          <Col size={2}>
            <Menu
              activeItem=""
              switchMenu={() => {}}
            />
          </Col>
          <Col size={10}>
            <Form
              baseProduct={baseProduct}
              onSave={this.handleSave}
              validationErrors={this.state.formErrors}
              categories={this.context.directories.categories}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

EditProduct.contextTypes = {
  directories: PropTypes.object.isRequired,
  environment: PropTypes.object.isRequired,
};

export default createFragmentContainer(
  Page(EditProduct),
  graphql`
    fragment EditProduct_me on User
    @argumentDefinitions(productId: { type: "Int!" }) {
      baseProduct(id:$productId) {
        id
        rawId
        categoryId
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
  `,
);

/* categories {
  children {
    children {
      children {
        rawId
        name {
          lang
          text
        }
        getAttributes {
          id
          rawId
          name {
            lang
            text
          }
          valueType
          metaField {
            values
            translatedValues {
              lang
              text
            }
            uiElement
          }
        }
      }
    }
  }
} */
