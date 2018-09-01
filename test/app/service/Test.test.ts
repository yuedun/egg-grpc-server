import * as assert from 'assert';
import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';
//@ts-ignore
describe('test/app/service/Test.test.js', () => {
  let ctx: Context;
  //@ts-ignore
  before(async () => {
    ctx = app.mockContext();
  });
});
