'use strict';
import { EggAppConfig, PowerPartial } from 'egg';

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
	mongoose: {
		client: {
			url: string;
			options: any;
		}
	};
	mongooseDebug: boolean;
}

export default (appInfo: EggAppConfig) => {
	const config = {} as PowerPartial<EggAppConfig> & BizConfig;

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1534916691102_9753';

	// add your config here
	config.middleware = ['notfoundHandler', 'errorHandler'];

	config.security = {
		csrf: {
			enable: false,
		},
		domainWhiteList: ['http://127.0.0.1:8002', 'http://127.0.0.1:9528/'],
		/**
		 * 禁用methodnoallow，对OPTIONS放行
		 */
		methodnoallow: {
			enable: false,
		},
	};
	return config;
};
