import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

	/**
	 * sayHi to you
	 * @param name - your name
	 */
	public async sayHi(name: string) {
		return `hi, ${name}`;
	}
	public async queryMysql() {
		const model = this.ctx.mysql.StuDataDay;
		const result = await model.findById(1)
		return result;
	}
	public async queryMongo() {
		const model = this.ctx.model.TestModel;
		const result = await model.find({})
		return result;
	}
}
