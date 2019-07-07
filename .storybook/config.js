import { configure, addDecorator } from '@storybook/react';

// Decorator
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

const loadStories = () => {
	const req = require.context('../src', true, /\.stories\.jsx?$/);
	req.keys().forEach(filename => req(filename));
};

// Decorators setup
addDecorator(withKnobs);
addDecorator(withA11y);

configure(loadStories, module);
