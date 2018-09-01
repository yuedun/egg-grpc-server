'use strict';

import { app, assert } from 'egg-mock/bootstrap';

// @ts-ignore
describe('test/app/controller/home.test.ts', () => {
	//@ts-ignore
	it('should GET /', async () => {
		const result = await app.httpRequest().get('/').expect(200);
		//@ts-ignore
		assert(result.text === 'hi, egg');
	})
});
