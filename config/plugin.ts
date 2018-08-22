import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
	// static: true,
	// nunjucks: {
	//   enable: true,
	//   package: 'egg-view-nunjucks',
	// },
	grpc: {
		enable: true,
		package: 'egg-grpc',
	},
}
export default plugin;
