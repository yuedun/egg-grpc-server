export default (options, app) => {
    return async function errorHandler(ctx, next) {
        try {
            await next();
        } catch (err) {
            // 注意：自定义的错误统一处理函数捕捉到错误后也要 `app.emit('error', err, this)`
            // 框架会统一监听，并打印对应的错误日志
            app.emit('error', err, ctx);
            // 自定义错误时异常返回的格式

            const status = err.status || 500;
            if (status === 422) {
                // validate参数验证错误信息
                ctx.helper.errMsg(err.errors);
            } else {
                ctx.helper.errMsg(err.message);
            }
            ctx.status = status;
            //err.stack作为错误详细信息发送到邮件，短信等终端
            if (app.config.env !== 'local') {
                const stack = (err.stack.match(/[^\n]+\n[^\n]+\n[^\n]+/) || [err.stack])[0]; //截取3行即可
                ctx.helper.dingdingMsg(`【${app.config.env}, ${process.env.USERDOMAIN}】：${stack}`); //发送钉钉信息
            }
        }
    };
};
