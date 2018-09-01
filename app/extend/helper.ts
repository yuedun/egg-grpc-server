
/**
 * 统一封装返回的数据格式
 *
 * @export
 */
export function resData(data = '') {
	this.ctx.body = {
		code: 0,
		data,
		msg: '',
	};
}

/**
 * 统一封装返回的数据格式
 * @export
 * @param {string} [msg=''] 错误说明
 * @param {number} [code=1] 可选参数，可以自定义值，默认1
 */
export function errMsg(msg = '未知错误', code = 1) {
	this.ctx.body = {
		code,
		data: null,
		msg,
	};
}

/**
 * 钉钉机器人发送错误通知
 *
 * @export
 * @param {string} data
 */
export function dingdingMsg(data: string) {
	this.ctx.curl('https://oapi.dingtalk.com/robot/send?access_token=xxx', {
		method: 'POST',
		headers: {
			'accept': 'text/plain;charset=utf-8;',
			'Content-Type': 'application/json',
		},
		data: {
			msgtype: 'text',
			text: { content: data },
		},
		dataType: 'text',
	});
}
