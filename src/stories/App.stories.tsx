import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {App} from '../App';

const onSubmit = (): void => {
  window.alert('title updated!');
}

storiesOf("App", module)
  .add("In-place edit", () => (
    <App
      originalValue={'In-place edit title'}
      onSubmit={onSubmit}
      errorMessage={`Title can only contain these special characters: $ ! < > - _ ' , .`}
    />
  ))
