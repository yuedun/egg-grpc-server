'use strict';
import { DefaultConfig } from './config.default';

export default () => {
	const config: DefaultConfig = {};

	// add your config here
	config.middleware = [];

	config.view = {
		defaultViewEngine: 'nunjucks',
	};

	return config;
};
