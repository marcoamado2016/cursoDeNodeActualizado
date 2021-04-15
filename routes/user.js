const {Router}=require('express');//Funcion Router
const { check } = require('express-validator');
const router=Router();

router.get('/raiz',require('../controllers/usuarios').usuarioGet); //cada ruta requiere su respuesta en el controlador de usuarios
router.put('/raiz/:id',require('../controllers/usuarios').usuarioPut);
router.post('/raiz/:nombre/:apellido',require('../controllers/usuarios').usuarioPost);
router.get('/raizparams',require('../controllers/usuarios').usuarioGetParams)
router.get('/raizparamsdes',require('../controllers/usuarios').usuarioGetParamsDes)
router.post('/mongo',
    [
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('password','El password tiene un minimo de 6 caracteres').isLength({min:6}),
        check('correo','El correo no es valido').isEmail(),
        check('rol','No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE'])
    ],  require('../controllers/usuarios').usuarioMongo)

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