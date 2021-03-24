const {Router}=require('express');//Funcion Router
const router=Router();

router.get('/raiz',require('../controllers/usuarios').usuarioGet); //cada ruta requiere su respuesta en el controlador de usuarios
router.put('/raiz/:id',require('../controllers/usuarios').usuarioPut);
router.post('/raiz/:nombre/:apellido',require('../controllers/usuarios').usuarioPost);
router.get('/raizparams',require('../controllers/usuarios').usuarioGetParams)
router.get('/raizparamsdes',require('../controllers/usuarios').usuarioGetParamsDes)
/*
router.put('/raiz',(req,res)=>{

    res.status(200).json(
        {
            ok:true,
            msg:"get API"
        }
    ).end();
});




router.post('/raiz',(req,res)=>{

    res.status(200).json(
        {
            ok:true,
            msg:"get API"
        }
    ).end();
});

router.delete('/raiz',(req,res)=>{

    res.status(200).json(
        {
            ok:true,
            msg:"get API"
        }
    ).end();
});
*/


module.exports=router;