import { tournamentModel } from "../models/tournamentModel.js";

export const tournamentService = {

    async getAllTournaments() {
        return tournamentModel.getAllTournaments();
    },

    async getTournament(id) {
        const tournament = await tournamentModel.getTournament(id);
        if (!tournament) throw new Error("Tournament not found");
        return tournament;
    },

    async createTournament(name) {
        const tournament = await tournamentModel.createTournament(name);
        if (!tournament) throw new Error("Could not create tournament");
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
        if (!tournament) throw new Error("Could not update tournament");
        return tournament;        
    },

    async deleteTournament(id) {
        const result = await tournamentModel.deleteTournament(id);
        if (result == 0) throw new Error("Could not delete tournament");
        return {message: 'Tournament deleted successfully'};
    }

}
