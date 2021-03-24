const {response,request}=require('express');

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
module.exports={
    usuarioGet,
    usuarioPut,
    usuarioPost,
    usuarioGetParams,
    usuarioGetParamsDes
}