import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select, boolean } from '@storybook/addon-knobs';
import Terminal from './terminal.jsx';

const stories = storiesOf('Terminal', module);

stories.add('Terminal', () => (
  <Terminal>
    {text('Terminal text', 'test test test')}
  </Terminal>
));
