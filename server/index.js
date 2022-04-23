const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

const PORT = 3000
const app = new Koa();

app.use(serve(path.join(__dirname, './public/static')));
app.listen(PORT);
