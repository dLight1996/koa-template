/*
 * @Author: your name
 * @Date: 2022-03-31 12:16:38
 * @LastEditTime: 2022-03-31 12:18:20
 * @LastEditors: 史建敏
 * @Description: 
 * @FilePath: /blogadmin/src/router/routes.ts
 */

import controllers from '../controllers';
import {IItem, IMethod} from "./type";


const routerList: IItem[] = [
    {
        path: '/',
        method: IMethod.Get,
        controller: controllers.rootPath
    }
]

export default routerList