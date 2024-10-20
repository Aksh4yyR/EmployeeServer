const jsonServer=require('json-server') //import json-server
const empServer=jsonServer.create()
const router=jsonServer.router("db.json")
const middleware=jsonServer.defaults()
const PORT=3000 || process.env.PORT

empServer.use(middleware)
empServer.use(router)

empServer.listen(PORT,()=>{
    console.log(`EMP server is running at port ${PORT} and waiting for client request!!!`);
    
})