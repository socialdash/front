// @flow

import React, { PureComponent } from 'react';
import { map, find, propEq, pathOr, head } from 'ramda';

import { Icon } from 'components/Icon';
import { Row, Col } from 'layout';
import { Link } from 'found';
import { convertSrc } from 'utils';

import './Stores.scss';

type PropsType = {
  store: {
    name: Array<{
      lang: string,
      text: string,
    }>,
    rawId: number,
    id: string,
    productsCount: number,
    logo: ?string,
  },
};

class StoreRow extends PureComponent<PropsType> {
  render() {
    const { store } = this.props;
    const lang = 'EN';
    // $FlowIgnoreMe
    const name = pathOr(null, ['text'], find(propEq('lang', lang), store.name));
    // $FlowIgnoreMe
    const baseProduct = pathOr(null, ['baseProducts', 'edges'], store);
    const storeId = store.rawId;
    const { productsCount } = store;
    return (
      <div styleName="store" key={store.id}>
        <Row>
          <Col size={6}>
            <div styleName="storeData">
              <div styleName="storeLogo" data-test="storeLink">
                {store.logo ? (
                  <img src={convertSrc(store.logo, 'small')} alt="img" />
                ) : (
                  <Icon type="camera" size="32" />
                )}
              </div>
              <div styleName="storeInfo">
                <div styleName="storeName">{name}</div>
                <div styleName="storeAdd">
                  <span>97,5% reviews</span>
                  {productsCount && (
                    <span styleName="productsCount">{productsCount} goods</span>
                  )}
                </div>
              </div>
              <div styleName="storeElect">
                <Icon type="heart" size="32" />
              </div>
            </div>
          </Col>
          <Col size={6}>
            {baseProduct && (
              <div styleName="productsData">
                <div styleName="productsWrap">
                  {map(baseProductNode => {
                    const baseProductId = baseProductNode.rawId;
                    const products = pathOr(
                      [],
                      ['products', 'edges'],
                      baseProductNode,
                    );
                    const product = head(products);
                    const photoMain = pathOr(
                      null,
                      ['node', 'photoMain'],
                      product,
                    );
                    return (
                      <Link
                        key={baseProductId}
                        to={`/store/${storeId}/products/${baseProductId}`}
                        styleName="productFoto"
                        data-test="productLink"
                      >
                        <div styleName="productFotoWrap">
                          {photoMain ? (
                            <img
                              src={convertSrc(photoMain, 'small')}
                              alt="img"
                            />
                          ) : (
                            <Icon type="camera" size="32" />
                          )}
                        </div>
                      </Link>
                    );
                  }, map(baseProductItem => baseProductItem.node, baseProduct))}
                </div>
              </div>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default StoreRow;
