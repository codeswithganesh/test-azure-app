const express=require('express');
const app=express();


const PORT=process.env.PORT||3000;

app.get('/',(rq,res)=>{
    res.send('Hello Test deployment');
});

app.listen(PORT,()=>{
    console.log('server is runnning on the port');
});