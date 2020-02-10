import {Preview, Props, Title} from '@storybook/addon-docs/blocks';
import * as React from 'react';
import {App} from '../App';

const onSubmit = (): void => {
  window.alert('title updated!');
}

export default {
  title: 'In-place edit component',
  component: App,
};

export const story = () => (
  <App
    originalValue={'Click to edit'}
    onSubmit={onSubmit}
    errorMessage={`Title can only contain these special characters: $ ! < > - _ ' , .`}
  />
)