import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {App} from '../App';
storiesOf("App", module)
  .add("with text", () => (
    <App originalValue={'Name'} />
  ))
