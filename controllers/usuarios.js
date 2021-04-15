const {response,request}=require('express');
const Usuarios=require('../models/usuario')
const bcryptjs=require('bcryptjs');
const { validationResult } = require('express-validator');
const usuarioGet=(req=request,res=response)=>{
    const {nombre,apellido}=req.body;
    res.status(200).json({
        ok:true,
        msg:"usuarios get",
        nombre,
        apellido
    });
}

const usuarioGetParams=(req=request,res=response)=>{
    const query=req.query;
    res.status(200).json({
        ok:true,
        msg:"usuarios get",
        query
    });
}

const usuarioGetParamsDes=(req=request,res=response)=>{
    const {saludo='sin saludo',nombre='sin nombre',apikey='sin key',page=10,limit=15}=req.query;
    res.status(200).json({
        ok:true,
        msg:"usuarios get",
        saludo,
        nombre,
        apikey,
        page,
        limit
    });
}
const usuarioPut=(req,res=response)=>{
    const {id}=req.params;
    res.status(200).json({
        ok:true,
        msg:" usuarios put",
        id
    })
}

const usuarioPost=(req,res=response)=>{
    let nombre=req.params.nombre;
    let apellido=req.params.apellido;
    res.status(200).json({
        ok:true,
        msg:"usuario post",
        apellido,
        nombre
    })
}
const usuarioMongo=async(req=require,res=response)=>{
    let {nombre,correo,password,rol}=req.body;
    //const usuario=new Usuarios(body);
    const usuario=new Usuarios({nombre,correo,password,rol});
    /**
     * 1-verficar si el correo existe
     * 2-Encriptar la contraseña
     * 3-Guardar en la ase de daots
     */
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors})
    }
    const salt=bcryptjs.genSaltSync(10)
    //validar que el correo exista
    const validarEmail=await Usuarios.findOne({correo});
    
    if(validarEmail){
        return res.status(400).json({error:'Este correo ya existe'})
    }
    //Encriptar la contraseña

    usuario.password=bcryptjs.hashSync(password,salt);

    //Guardar la contraseña

    await usuario.save();


    res.status(200).json({
        nombre,correo,password,rol
    })
/**
 * instalar para encriptar la contraseña
 * npm i bcryptjs
 * instalar la validacion con  npm install express-validator
 */

}
module.exports={
    usuarioGet,
    usuarioPut,
    usuarioPost,
    usuarioGetParams,
    usuarioGetParamsDes,
    usuarioMongo
}