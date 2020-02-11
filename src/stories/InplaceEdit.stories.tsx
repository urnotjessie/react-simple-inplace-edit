import {Preview, Props, Title} from '@storybook/addon-docs/blocks';
import * as React from 'react';
import {InplaceEdit} from '../InplaceEdit';

const onSubmit = (): void => {
  window.alert('title updated!');
}

export default {
  title: 'In-place edit component',
  component: InplaceEdit,
};

export const story = () => (
  <InplaceEdit
    originalValue={'Click to edit'}
    onSubmit={onSubmit}
    errorMessage={`Title can only contain these special characters: $ ! < > - _ ' , .`}
  />
)