
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import router from "../router";

/**
 * 参数解析
 * https://github.com/koajs/bodyparser
 */
const mdKoaBody = bodyParser();
const mdRoute = router.routes();
const mdCors = cors({
    origin: '*',
    credentials: true,
    allowMethods: [ 'GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH' ]
});
const mdRouterAllowed = router.allowedMethods();

export default [
    mdKoaBody,
    mdCors,
    mdRoute,
    mdRouterAllowed
]
