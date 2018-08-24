import { Controller } from 'egg';

interface HelloRequest {
	name: string;
}
interface HelloReply {
	message: string;
}
interface Greeter {
	sayHello(params: HelloRequest): HelloReply;
	sayHello2(params: HelloRequest): HelloReply;
	sayHello3(params: HelloRequest): HelloReply;
}
export default class HomeController extends Controller {
	public async index() {
		const { ctx } = this;
		const client: Greeter = ctx.grpc.helloworld.greeter;
		const result = await client.sayHello({ name: "这是grpc请求参数" });
		ctx.body = await ctx.service.test.sayHi(JSON.stringify(result));
	}
}
