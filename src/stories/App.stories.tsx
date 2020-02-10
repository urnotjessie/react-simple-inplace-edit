import { Meta, Story, Preview } from '@storybook/addon-docs/blocks';
import * as React from 'react';
import {App} from '../App';

const onSubmit = (): void => {
  window.alert('title updated!');
}

  export default {
    title: 'App',
  };

  export const story = () => (
    <App
      originalValue={'In-place edit title'}
      onSubmit={onSubmit}
      errorMessage={`Title can only contain these special characters: $ ! < > - _ ' , .`}
    />
  )