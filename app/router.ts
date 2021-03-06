import { Application } from 'egg';

export default (app: Application) => {
	const { router, controller } = app;
	router.get('/', controller.home.index);
	router.get('/test', controller.home.test);
	router.get('/mongo', controller.home.testMong);
};
