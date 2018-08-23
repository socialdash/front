// @flow

import React from 'react';

import { HeaderResponsive, FooterResponsive, AppContext } from 'components/App';
import { Button } from 'components/common/Button';

import './StartSelling.scss';

const StartSelling = () => (
  <AppContext.Consumer>
    {({ environment }) => (
      <div>
        <HeaderResponsive environment={environment} withoutCategories />
        <div styleName="container">
          {/* <div styleName="block-1">
            <div styleName="map">
              <div styleName="title">
                Millions of shoppers are waiting
              </div>
              <div styleName="subtitle">wants to buy your goods right now!</div>
              <img
                // eslint-disable-next-line
                src={require('./img/01_customers.svg')}
                alt=""
                styleName="customers"
              />
            </div>
            <div styleName="shop">
              <a
                // eslint-disable-next-line
                href="/manage/wizard"
              >
                {' '}
              </a>
            </div>
          </div> */}
          <div styleName="block">
            <div styleName="map">
              <div styleName="title">Millions of shoppers are waiting</div>
              <div styleName="subtitle">wants to buy your goods right now!</div>
              <img
                // eslint-disable-next-line
                src={require('./img/01_customers.svg')}
                alt=""
                styleName="customers"
              />
            </div>
            <div styleName="shop">
              <a
                // eslint-disable-next-line
                href="/manage/wizard"
              >
                {' '}
              </a>
            </div>
          </div>
          <div styleName="block-2">
            <div styleName="wrapper">
              <div styleName="title">
                <b>
                  STORIQA IS YOUR DOOR<br />TO GLOBAL MARKET
                </b>
              </div>
              <div styleName="subtitle">
                Our goal is to guarantee the quality of experience and goods,
                for both buyers and sellers.
              </div>
              <div styleName="info-block">
                <div>
                  Storiqa is an online marketplace offering global access with
                  minimal financial borders and global transactional fees. We’re
                  committed to helping our sellers thrive. Our goal is to
                  guarantee the quality of experience and goods, for both buyers
                  and sellers.
                </div>
                <div>
                  Key platform features such as inclusive advertising and
                  promotion, sales analysis, book-keeping and direct customer
                  feedback make Storiqa ideal for entrepreneurs, small-scale
                  manufacturers, family businesses and makers of handmade
                  crafts.
                </div>
              </div>
            </div>
          </div>
          <div styleName="block-3">
            <div styleName="wrapper">
              <div styleName="title">
                <b>
                  WHY SHOULD YOU<br />TRY STORIQA
                </b>
              </div>
              <div styleName="subtitle">
                We deliver high quality services and support, including
                marketing assistance and sales advice.
              </div>
              <div styleName="blocksWrapper">
                <div styleName="block">
                  <img
                    // eslint-disable-next-line
                    src={require('./img/03_low_fee.svg')}
                    alt=""
                    className="Group-1320"
                  />
                  <div styleName="title">LOW FEE</div>
                  <div styleName="text">
                    It doesn’t take much to list your items and once you make a
                    sale, Storiqa’s transaction fee is just 5%.
                  </div>
                </div>
                <div styleName="block">
                  {}
                  <img
                    // eslint-disable-next-line
                    src={require('./img/03_24_7_customer.svg')}
                    alt=""
                  />
                  <div styleName="title">24/7 CUSTOMER SUPPORT</div>
                  <div styleName="text">
                    One of the most important aspects of running an online store
                    is clear and quick communication with customers. We provide
                    24/7 customer service and and online consultants in regional
                    languages.
                  </div>
                </div>
                <div styleName="block">
                  <img
                    // eslint-disable-next-line
                    src={require('./img/03_integrated_marketing_tools.svg')}
                    alt=""
                  />
                  <div styleName="title">INTEGRATED MARKETING TOOLS</div>
                  <div styleName="text">
                    We provide the marketing needed to boost sales, from
                    newsletters and CPA networks to paid advertising and many
                    more.
                  </div>
                </div>
                <div styleName="block">
                  <img
                    // eslint-disable-next-line
                    src={require('./img/03_payments.svg')}
                    alt=""
                  />
                  <div styleName="title">PAYMENTS IN CRYPTOCURRENCY</div>
                  <div styleName="text">
                    Sellers receive payment in the currency of their choosing,
                    including cryptocurrencies like STQ, Bitcoin, Ethereum and
                    others. These eliminate multiple bank transaction charges
                    and long waits to receive payments.
                  </div>
                </div>
                <div styleName="block">
                  <img
                    // eslint-disable-next-line
                    src={require('./img/03_powerful_tools.svg')}
                    alt=""
                  />
                  <div styleName="title">POWERFUL TOOLS</div>
                  <div styleName="text">
                    We offer an efficient, simple, and powerful set of sales
                    tools with a clear interface and thorough follow-up, all to
                    make your goods available globally.
                  </div>
                </div>
                <div styleName="block">
                  <img
                    // eslint-disable-next-line
                    src={require('./img/03_storiqa_fullfillment.svg')}
                    alt=""
                  />
                  <div styleName="title">STORIQA FULLFILLMENT CENTER</div>
                  <div styleName="text">
                    Bring your product to our center, the rest we will take care
                    yourselves: creating a product cards, preparing promotional
                    and marketing materials, processing orders, supporting
                    sales.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div styleName="block-4">
            <div styleName="wrapper">
              <div styleName="title">
                <b>
                  POWERFUL TOOLS<br />WHICH HELPS SELLERS
                </b>
              </div>
              <div styleName="subtitle">
                Spend less time managing your shop. Our tools will allow you to
                efficiently manage sales around the world
              </div>
              <div styleName="blocks">
                <div>
                  <div styleName="block">
                    <div styleName="title">
                      <img
                        // eslint-disable-next-line
                        src={require('./img/04_arrow.svg')}
                        alt=""
                      />
                      <span>CRM Analytics</span>
                    </div>
                    <div styleName="text">
                      Manage your store, sales, employees, warehouses in a
                      convenient interface anywhere in the world. Get statistics
                      and analytics online
                    </div>
                  </div>
                  <div styleName="block">
                    <div styleName="title">
                      <img
                        // eslint-disable-next-line
                        src={require('./img/04_arrow.svg')}
                        alt=""
                      />
                      <span>CPA networks</span>
                    </div>
                    <div styleName="text">
                      Use our CPA network in order to advertise your products
                      and increase sales
                    </div>
                  </div>
                  <div styleName="block">
                    <div styleName="title">
                      <img
                        // eslint-disable-next-line
                        src={require('./img/04_arrow.svg')}
                        alt=""
                      />
                      <span>Mobile Wallet</span>
                    </div>
                    <div styleName="text">
                      Track all cash inflows in a convenient mobile application,
                      convert and withdraw funds
                    </div>
                  </div>
                </div>
                <img
                  // eslint-disable-next-line
                  src={require('./img/04_imac.png')}
                  alt=""
                  styleName="imac"
                />
              </div>
            </div>
          </div>
          <div styleName="block-5">
            <div styleName="wrapper">
              <div styleName="title">
                <b>
                  LOW FEE AND HIGH<br />TRANSPARENCY
                </b>
              </div>
              <div styleName="items">
                <div styleName="itemBlock">
                  <div styleName="planName">Standart</div>
                  <div styleName="planDesc">
                    1 STQ = $0.03 per product per day
                  </div>
                  <div styleName="planPrice">1 STQ</div>
                  <div styleName="planItems">
                    <ul>
                      <li>
                        <span>Online shop with catalog</span>
                      </li>
                      <li>
                        <span>Hosting</span>
                      </li>
                      <li>
                        <span>Discount system</span>
                      </li>
                      <li>
                        <span>24/7 support</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div styleName="itemBlock">
                  <div styleName="planName">E-commerce</div>
                  <div styleName="planDesc">
                    2 STQ = $0.06 per product per day
                  </div>
                  <div styleName="planPrice">2 STQ</div>
                  <div styleName="planItems">
                    <ul>
                      <li>
                        <span>Online shop with catalog</span>
                      </li>
                      <li>
                        <span>Hosting</span>
                      </li>
                      <li>
                        <span>Discount system</span>
                      </li>
                      <li>
                        <span>24/7 support</span>
                      </li>
                      <li>
                        <span>Online card payments</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div styleName="itemBlock">
                  <div styleName="planName">Fulfillment</div>
                  <div styleName="planDesc">
                    3 STQ = $0.09 per product per day
                  </div>
                  <div styleName="planPrice">3 STQ</div>
                  <div styleName="planItems">
                    <ul>
                      <li>
                        <span>Online shop with catalog</span>
                      </li>
                      <li>
                        <span>Hosting</span>
                      </li>
                      <li>
                        <span>Discount system</span>
                      </li>
                      <li>
                        <span>24/7 support</span>
                      </li>
                      <li>
                        <span>Online card payments</span>
                      </li>
                      <li>
                        <span>Built-in telephone service</span>
                      </li>
                      <li>
                        <span>Chat</span>
                      </li>
                      <li>
                        <span>Mailing services</span>
                      </li>
                      <li>
                        <span>Callback</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div styleName="block-6">
            <div styleName="wrapper">
              <div styleName="title">
                <b>
                  FREQUENTLY<br />ASKED QUESTIONS
                </b>
              </div>
              <div styleName="subtitle">
                Here are some common questions about selling on Storiqa.
              </div>
              <div styleName="questions">
                <div styleName="question">
                  <label styleName="title" htmlFor="faq-cb-1">
                    <b>What is Storiqa marketlace?</b>
                  </label>
                  <div>
                    <input type="checkbox" id="faq-cb-1" />
                    <div styleName="text">
                      Storiqa is a platform based on Blockchain giving the
                      possibility to pay for the goods using cryptocurrency
                      (particularly, STQ token), you can create your own online
                      page there and provide a variety of goods you produce.
                    </div>
                  </div>
                </div>
                <div styleName="question">
                  <label styleName="title" htmlFor="faq-cb-2">
                    <b>
                      What kind of goods will I be able to sell on Storiqa
                      platform?
                    </b>
                  </label>
                  <div>
                    <input type="checkbox" id="faq-cb-2" />
                    <div styleName="text">
                      We will start with giving the possibility to sell goods
                      like clothes, accessories, decorations, designer stuff.
                      Later all the categories and a number of good possible for
                      selling will be widened. Also, we are planning to
                      implement the possibility to offer services using Storiqa
                      platform. Our main aim is to help small businesses to
                      enter the international market and overcome related
                      difficulties. Combining all possible benefits of many
                      marketplaces using one platform creates a comparative
                      advantage over other markets offers both for customers and
                      sellers. Decentralization and opportunities presented by
                      the use of cryptocurrency in the project can satisfy the
                      needs in speed, global market access and transaction
                      security.
                    </div>
                  </div>
                </div>
                <div styleName="question">
                  <label styleName="title" htmlFor="faq-cb-3">
                    <b>What countries will I be able to send my goods to?</b>
                  </label>
                  <div>
                    <input type="checkbox" id="faq-cb-3" />
                    <div styleName="text">
                      Our main target is a global market, but Storiqa
                      marketplace starting location will be South-East Asia.
                    </div>
                  </div>
                </div>
                <div styleName="question">
                  <label styleName="title" htmlFor="faq-cb-4">
                    <b>What currencies will I be able to sell my goods with?</b>
                  </label>
                  <div>
                    <input type="checkbox" id="faq-cb-4" />
                    <div styleName="text">
                      Storiqa gives an opportunity to sell goods to
                      cryptocurrency holders. This is a brand new market niche
                      where buyers are ready to purchase your stuff using
                      cryptocurrency. Initially, it will be possible to sell and
                      buy only using STQ but later we will add other popular
                      cryptocurrency (e.g. BTC, ETH) and we are also planning to
                      implement the option of paying with fiat money.
                    </div>
                  </div>
                </div>
                <div styleName="question">
                  <label styleName="title" htmlFor="faq-cb-5">
                    <b>
                      What is STQ token and how can I conver it to fiat
                      currency?
                    </b>
                  </label>
                  <div>
                    <input type="checkbox" id="faq-cb-5" />
                    <div styleName="text">
                      STQ is a token that is intended for internal operations
                      with goods and services in Storiqa marketpace. These are
                      the main fields of token usage:<br />1. Purchasing goods<br />2.
                      Marketplace services - Storiqa seller functionality and
                      new store slots are unlocked exclusively by payments made
                      in STQ tokens<br />3. Community services - community
                      members earn rewards in STQ token Our token is based on
                      ERC-20 standard and works on Ethereum network,
                      accordingly. You can always convert your STQ tokens to
                      other cryptocurrency or fiat money using exchanges and
                      exchangers.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div styleName="block-7">
            <div styleName="wrapper">
              <div styleName="title">
                <b>
                  READY TO OPEN<br />YOUR STORE?
                </b>
              </div>
              <div styleName="buttonWrapper">
                <Button
                  big
                  onClick={() => {
                    window.location = '/manage/wizard';
                  }}
                >
                  Start selling with Storiqa
                </Button>
              </div>
            </div>
            <img
              // eslint-disable-next-line
              src={require('./img/01_customers.svg')}
              alt=""
              styleName="customers"
            />
          </div>
        </div>
        <FooterResponsive />
      </div>
    )}
  </AppContext.Consumer>
);

export default StartSelling;
