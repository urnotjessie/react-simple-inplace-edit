import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {App} from '../App';

const onSubmit = (input: string): void => {
  console.log('update');
  window.alert(input);
}

storiesOf("App", module)
  .add("with text", () => (
    <App
      originalValue={'Name'}
      onSubmit={onSubmit}
      errorMessage={`Title can only contain these special characters: $ ! < > - _ ' , .`}
    />
  ))
