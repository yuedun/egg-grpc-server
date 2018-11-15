import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
	nunjucks: {
		enable: true,
		package: 'egg-view-nunjucks',
	},
	mongoose: {
		enable: true,
		package: 'egg-mongoose',
	},
	sequelize: {
		enable: true,
		package: 'egg-sequelize',
	},
	validate: {
		enable: true,
		package: 'egg-validate',
	},
	cors: {
		enable: true,
		package: 'egg-cors',
	},
	grpc: {
		enable: true,
		package: 'egg-grpc',
	},
};

export default plugin;
