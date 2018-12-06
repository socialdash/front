import React from 'react';
import { storiesOf } from '@storybook/react';

import { Goods } from 'components/Goods';
import { text } from '@storybook/addon-knobs';

const label = 'Your name';
const defaultValue = 'Harry Potter';
const groupId = 'GROUP-ID1';
const value = text(label, defaultValue, groupId); 

const story = storiesOf('Goods', module)
story.addDecorator(withKnobs);

story.add('Default', () => (
    <Goods 
       rawId={1111}
       store={
        rawId: 2222,
       }
       name={[
        lang: "english",
        text: "book", 
       ]}
       currency="stq"
       variants={
        first: {
          rawId: 111,
          discount: 0,
          photoMain: "Harry Potter",
          cashback: 0,
          price: 1000000,
        },
        }
        rating={5}
    />
));
    

 

 
  

  