import { MongoClient } from "mongodb";

//Função para conectar o Node ao banco de dados
export default async function conectarAoBanco(stringConexao) { 
    //async -> Alguma parte da função demorará um pouco para poder dar um resultado 
    //export default -> 
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao); //A variávl recebe a função como valor 
        console.log("Conectando ao cluste do banco de dados...");
        await mongoClient.connect(); //Tenta conectar o código ao banco de dadoos 
        console.log("Conectando ao MongoDB Atlas com sucesso!"); //Caso a conexão com o banco de dados dê certo, ele vai exibir esse console.

        return mongoClient;
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro); //Caso ocorra algum erro na conexão com o banco de dados
        process.exit();//Termina o processo de tentar conectar com o banco
    }
}