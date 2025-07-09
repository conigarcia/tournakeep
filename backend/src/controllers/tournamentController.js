import tournamentService from "../services/tournamentService.js";

const tournamentController = {

    async getAllTournaments(req, res, next) {
        try {
            const tournaments = await tournamentService.getAllTournaments();
            res.status(200).json(tournaments);
        } catch (error) {
            next(error);
        }
    },

    async getTournament(req, res, next) {
        const id = parseInt(req.params.id);
        try {
            const tournament = await tournamentService.getTournament(id);
            res.status(200).json(tournament);
        } catch (error) {
            next(error);
        }
    },

    async createTournament(req, res, next) {
        const name = req.body.name;
        try {
            const tournament = await tournamentService.createTournament(name);
            res.status(200).json(tournament);
        } catch (error) {
            next(error);
        }
    },

    async updateTournament(req, res, next) {
        const id = parseInt(req.params.id);
        const properties = req.body;
        try {
            const tournament = await tournamentService.updateTournament(id, properties);
            res.status(200).json(tournament);
        } catch (error) {
            next(error);
        }
    },

    async deleteTournament(req, res, next) {
        const id = parseInt(req.params.id);
        try {
            const msg = await tournamentService.deleteTournament(id);
            res.status(200).json(msg);
        } catch (error) {
            next(error);
        }
    }

}

export default tournamentController;
