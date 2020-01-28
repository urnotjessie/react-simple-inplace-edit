// import React from 'react';
// import {App} from '../App';

// export default {
//   title: 'App',
//   component: App,
// };

// export const ToStorybook = () => <App originalValue={'Name'} />;

// ToStorybook.story = {
//   name: 'to Storybook',
// };


import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {App} from '../App';
storiesOf("App", module)
  .add("with text", () => (
    <App originalValue={'Name'} />
  ))
