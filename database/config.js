const mongoose=require('mongoose');

const dbConection=async()=>{
        try{
          await  mongoose.connect(process.env.MONGODB_CNN,{
            useCreateIndex:true,
            useFindAndModify:false,
            useNewUrlParser:true,
            useUnifiedTopology:true
          }) 
          console.log('exito en la conexion de datos')
        }catch(error){
            throw new Error('Error a la hora de iniciar la base de datos')
        }
}


module.exports={
    dbConection
}