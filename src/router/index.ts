/*
 * @Author: your name
 * @Date: 2022-03-31 12:08:21
 * @LastEditTime: 2022-03-31 12:22:53
 * @LastEditors: 史建敏
 * @Description: 
 * @FilePath: /blogadmin/src/router/index.ts
 */
import Router from 'koa-router'
import routesList from './routes'
import {IItem} from "./type";
const router = new Router()

routesList.forEach(({path, method, controller}:IItem)=>{
   router[method](path, controller);
})


export default router