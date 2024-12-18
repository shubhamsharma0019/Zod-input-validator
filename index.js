const zod = require('zod')
const express = require('express')
const app = express()

const schema = zod.array(zod.number());

app.use(express.json());

app.post('/health-checkup',function(req,res){
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney)
    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }else{
        res.send({
            response
        })

    }
    
})
app.listen(3000)