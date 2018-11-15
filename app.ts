import { Application } from 'egg';
import * as _ from "lodash";

export default (app: Application) => {
	app.beforeStart(async () => {
		// mongoose查询输出
		if (app.config.mongoose.DEBUG) {
			(<any>app).mongoose.set("debug", true);	
		}
	});
}