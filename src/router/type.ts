import {Context, Next} from "koa";

export enum IMethod {
    Get = 'get',
    POST = 'post'
}

export interface IItem {
    path: string
    method: IMethod
    controller: (ctx: Context, next: Next) => void
}