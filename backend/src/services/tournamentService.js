import { ERROR_MESSAGES } from "../constants/error-messages.js";
import tournamentModel from "../models/tournamentModel.js";
import CustomError from "../utils/customError.js";

const tournamentService = {

    async getAllTournaments() {
        return tournamentModel.getAllTournaments();
    },

    async getTournament(id) {
        const tournament = await tournamentModel.getTournament(id);
        if (!tournament) throw new CustomError(ERROR_MESSAGES.TOURNAMENT_NOT_FOUND, 404);
        return tournament;
    },

    async createTournament(name) {
        const tournament = await tournamentModel.createTournament(name);
        if (!tournament) throw new CustomError(ERROR_MESSAGES.INTERNAL_SERVER_ERROR, 500);
        return tournament;
    },

    async updateTournament(id, properties) {
        const fields = Object.keys(properties);
        const values = Object.values(properties);
        values.push(id);

        const setClause = fields.map((key, idx) => `${key} = $${idx + 1}`);
        const query = `
            update tournaments
            set ${setClause.join(", ")}
            where id = $${values.length}
            returning *
        `

        const tournament = await tournamentModel.updateTournament(query, values);
        if (!tournament) throw new CustomError(ERROR_MESSAGES.TOURNAMENT_NOT_FOUND, 404);
        return tournament;        
    },

    async deleteTournament(id) {
        // falta manejo de errores: ver si existe el tournament, ver si el usuario tiene permiso
        const result = await tournamentModel.deleteTournament(id);
        if (result == 0) throw new CustomError(ERROR_MESSAGES.INTERNAL_SERVER_ERROR, 500);
        return {message: 'Tournament deleted successfully'};
    }

}

export default tournamentService;
