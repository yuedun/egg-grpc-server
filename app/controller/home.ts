import { Controller } from 'egg';

export default class HomeController extends Controller {
	public async index() {
		const { ctx } = this;
		const client = ctx.grpc.helloworld.greeter;
		const result = await client.sayHello({ name: "这是grpc请求参数" });
		ctx.body = await ctx.service.test.sayHi(JSON.stringify(result));
	}
}
