import { Application } from 'egg';
import * as _ from "lodash";

export default (app: Application) => {
	app.beforeStart(async () => {
		// mongoose查询输出
		if (app.config.mongooseDebug) {
			(<any>app).mongoose.set("debug", true);	
		}
	});
}