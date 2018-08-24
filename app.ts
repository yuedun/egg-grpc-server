import { Application } from 'egg';

export default (app: Application) => {
	app.beforeStart(async () => {
		app.logger.info("启动egg服务");
	});
}