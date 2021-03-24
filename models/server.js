
const express=require('express');
require('dotenv').config();
const core=require('cors')
class server{

    constructor(){
        this.app=express();
        
        this.middlewares();
        this.port=process.env.PORT;
        this.listen();
        this.ruta='/principal';
        this.routes();
        
    }

    middlewares(){
        this.app.use(core())
        this.app.use(express.static('public'))
        //lectura y parseo del body
        this.app.use(express.json())
    }

    routes(){

        this.app.use(this.ruta,require('../routes/user')) //requiero el archivo de rutas en user

        /*
        this.app.get('/raiz',(req,res)=>{

            res.status(200).json(
                {
                    ok:true,
                    msg:"get API"
                }
            ).end();
        });


        this.app.put('/raiz',(req,res)=>{

            res.status(200).json(
                {
                    ok:true,
                    msg:"get API"
                }
            ).end();
        });




        this.app.post('/raiz',(req,res)=>{

            res.status(200).json(
                {
                    ok:true,
                    msg:"get API"
                }
            ).end();
        });


        this.app.delete('/raiz',(req,res)=>{

            res.status(200).json(
                {
                    ok:true,
                    msg:"get API"
                }
            ).end();
        });

*/
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Escuchando en el puerto '+this.port)
        });
    }
}
module.exports=server;

//npm install cors  protege el servidor 