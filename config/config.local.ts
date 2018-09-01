'use strict';
import { BizConfig, DefaultConfig } from './config.default';

export default () => {
	const config = {} as DefaultConfig & BizConfig;

	// 服务器日志默认地址~/logs/
	config.logger = {
		// level: 'INFO',//输出到文件的日志等级，生产默认INFO
		consoleLevel: 'DEBUG', //控制台输出等级
	};
	// add your config here
	config.middleware = ['notfoundHandler', 'errorHandler'];

	config.view = {
		defaultViewEngine: 'nunjucks',
		mapping: {
			njk: 'nunjucks',
		},
		defaultExtension: '.njk',
	};
	config.grpc = {
		endpoint: 'localhost:50051',
		// dir: 'app/proto', // proto files dir, relative path
		// property: 'grpc', // default attach to `ctx.grpc.**`
		// loadOpts: { convertFieldsToCamelCase: true, }, // message field case: `string user_name` -> `userName`
	};

	return config;
};
