const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const ADODB = require('node-adodb');
const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=Recipe.mdb;Jet OLEDB:Database Password=peifangbi;');

app.use(cors());
app.use(bodyParser());

app.use(async ctx => {
    const fields = Object.keys(ctx.request.body).join(',')
    const values = Object.values(ctx.request.body).reduce((prev, curr) =>  typeof curr === "string" ? curr = `${prev}"${curr}",` : prev + curr + ",", "")
    const query = `INSERT INTO peiFang (${fields}) VALUES (${values.substring(0, values.length - 1)})`
    try {
        await connection.execute(query)
        ctx.status = 200
    } catch (e) {
        console.log(e)
        ctx.status = 500
    }    
});

app.listen(3000);