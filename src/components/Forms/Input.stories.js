import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Input } from 'components/Forms';
import OnChangeDecorator from '../../../.storybook/OnChangeDecorator';

storiesOf('Forms/Input', module)
  .add('Default', () => (
    <OnChangeDecorator>
      <Input
        id="some_id"
        label="Input"
      />
    </OnChangeDecorator>
  ))
  .add('with error', () => (
    <Input
      id="some_id2"
      label="Input"
      value="test"
      onChange={action('text-change')}
      errors={['Some error text']}
    />
  ));