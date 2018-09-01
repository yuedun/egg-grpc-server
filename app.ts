import { Application } from 'egg';
import * as _ from "lodash";

export default (app: Application) => {
	app.beforeStart(async () => {
		// mongoose查询输出
		let username = _.find(app.config.developerInfo, { hostName: process.env.USERNAME || process.env.USER });
		if (app.config.mongoose.DEBUG && username) {
			(<any>app).mongoose.set("debug", true);	
		}
	});
}