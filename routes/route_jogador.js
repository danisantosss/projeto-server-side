import express from "express";
import {jogador} from "../controller/controller_jogador.js";

let router = express.Router()
router.get('/jogador', jogador.all)
router.post('/jogador', jogador.create)
router.put('/jogador/:codigo_jogador', jogador.update)
router.delete('/jogador/:codigo_jogador', jogador.delete)
router.get('/jogador/:nome_jogador', jogador.buscar)

export {router}