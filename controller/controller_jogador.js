import connect from "../config/connection.js";

let jogador = {}
const con = await connect()

jogador.all = async function(req, res){
    try {
        let jogadores = await con.query("SELECT * FROM jogador")
        res.send(jogadores)
    } catch(e){
        console.log("Erro: ", e)
    }
}

jogador.create = async function(req, res){
    try {
        let jogador = req.body
        let sql = "INSERT INTO jogador (codigo_jogador,nome_jogador, habilidade_principal) VALUES (?, ?, ?);"
        let values = [jogador.codigo_jogador, jogador.nome_jogador, jogador.habilidade_principal]
        let result = await con.query(sql, values) 
        res.send({
            status: "Inserção efetuada com sucesso!",
            result: result
        })
    } catch(e){
        console.log("Erro ao inserir dados", e)
    }
}

jogador.update = async function(req, res){
    try{
        let codigo = req.params.codigo_jogador
        let jogador = req.body
        let sql = "UPDATE jogador SET codigo_jogador=?, nome_jogador=?, habilidade_principal=? WHERE codigo_jogador=?;"
        let values = [jogador.codigo_jogador, jogador.nome_jogador, jogador.habilidade_principal, codigo]
        let result = await con.query(sql, values)
        res.send({
            status: "Jogador " + jogador.nome_jogador + " atualizado com sucesso!",
            result: result
        })
    }catch(e){
        console.log("Erro ao atualizar registro tabela Jogador ", e)
    }
}

jogador.delete = async function(req, res){
    try{
        let codigo = req.params.codigo_jogador
        let sql = "DELETE FROM jogador WHERE codigo_jogador=?;"
        let result = await con.query(sql, [codigo])
        res.send({
            status: "A exclusão do Jogador " + codigo + " foi efetuada com sucesso!",
            result: result
        })
    } catch(e){
        console.log("Erro ao excluir um registro da tabela Jogador ", e)
    }
}

jogador.buscar = async function(req, res){
    try {
        let nome = req.params.nome_jogador
        let sql = "SELECT * FROM jogador WHERE nome_jogador=?;"
        let result = await con.query(sql, [nome])
        res.send({
            status:  "Jogadores encontrados: ",
            result: result
        })
    } catch(e){
        console.log("Erro ao buscar um jogador ", e)
    }
}

export {jogador}