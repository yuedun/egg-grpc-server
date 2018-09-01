export default (options, app) => {
	return async function notfoundHander(ctx, next) {
		await next();
		if (ctx.status === 404 && !ctx.body) {
			if (ctx.acceptJSON) {//希望接收json
				ctx.body = { error: 'Not Found1' };
			} else {
				ctx.body = '<h1>Page Not Found</h1>';
			}
		}
	};
};
