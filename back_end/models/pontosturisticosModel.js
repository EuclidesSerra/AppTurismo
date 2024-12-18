const mongoose = require('mongoose');

//require("dotenv").config();
//const MONGO_URI = process.env.MONGO_URI;

mongoose.connect("mongodb+srv://consulsierra:uYe7DappYuuVngy7@cluster0.hryrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

var Schema = mongoose.Schema;

const pontoturistico = new Schema ({

    cnpj        : { type:Number, required: true},
    nome       : { type:String, required: true},
    cep        : { type:Number },
    telefone   : { type:Number, required: true},
    endereco      : { type:String, required: true}
})

const PontoTuristicoModel = mongoose.model('pontosturisticos', pontoturistico);


module.exports = {PontoTuristicoModel}