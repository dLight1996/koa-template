/*
 * @Author: your name
 * @Date: 2022-03-30 21:42:14
 * @LastEditTime: 2022-03-31 12:11:43
 * @LastEditors: 史建敏
 * @Description: 
 * @FilePath: /blogadmin/src/index.ts
 */
// @ts-nocheck
import Koa from 'koa'
import prisma from '../prisma'
import router from './router'
import middlewares from "./middlewares";
import compose from 'koa-compose'

const app = new Koa()

app.use(compose(middlewares))
app.listen(3000, ()=> {
    console.log(`app is starting at http://localhost:3000`)
})
app.on('error', (err, ctx) => {
    if (ctx) {
        ctx.body = {
            code: 9999,
            message: `程序运行时报错：${err.message}`
        };
    }
});
