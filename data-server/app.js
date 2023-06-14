const Koa =require('koa');
const KoaRouter = require('koa-router');
const bodyParser = require("koa-bodyparser");
const cors =require('@koa/cors')
const fs = require('fs');
const path =require("path")
const app = new Koa();

const router= new KoaRouter();
router.get("/dic",(ctx,next)=>{
    // console.log(ctx.request.query)
    const {key}=ctx.request.query;
    // console.log(key)
    const data = fs.readFileSync(path.resolve(__dirname,"data.json"),{encoding:"utf8"});
    const jsonData=JSON.parse(data);
    if(key){
        ctx.body= jsonData[key] || []
    } else{
        ctx.body=jsonData
    }
})
app.use(cors({
    allowedMethods:['GET','POST'],
    origin:(ctx)=>{
        // console.log(ctx.header.origin);
        return true
    },
    allowHeaders:['Content-Type','Authorization']
}))
app.use(bodyParser())

app.use(router.routes())
app.use(router.allowedMethods())



app.listen(4000,()=>{
    console.log('successfully!')
})
