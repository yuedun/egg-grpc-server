import { DefaultConfig } from './config.default';

export default () => {
	const config: DefaultConfig = {};
	config.grpc = {
		endpoint: 'localhost:50051',
		// dir: 'app/proto', // proto files dir, relative path
		// property: 'grpc', // default attach to `ctx.grpc.**`
		// loadOpts: { convertFieldsToCamelCase: true, }, // message field case: `string user_name` -> `userName`
	};
	return config;
};
