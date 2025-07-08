import { tournamentService } from "../services/tournamentService.js";

export const tournamentController = {

    async getAllTournaments(req, res) {
        try {
            const tournaments = await tournamentService.getAllTournaments();
            res.status(200).json(tournaments);
        } catch (error) {
            res.status(500).send({message: 'Internal server error'});
        }
    },

    async getTournament(req, res) {
        const id = parseInt(req.params.id);
        try {
            const tournament = await tournamentService.getTournament(id);
            res.status(200).json(tournament);
        } catch (error) {
            res.status(500).send({message: 'Internal server error'});
        }
    },

    async createTournament(req, res) {
        const name = req.body.name;
        try {
            const tournament = await tournamentService.createTournament(name);
            res.status(200).json(tournament);
        } catch (error) {
            res.status(500).send({message: 'Internal server error'});
        }
    },

    async updateTournament(req, res) {
        const id = parseInt(req.params.id);
        const properties = req.body;
        try {
            const tournament = await tournamentService.updateTournament(id, properties);
            res.status(200).json(tournament);
        } catch (error) {
            res.status(500).send({message: 'Internal server error'});
        }
    },

    async deleteTournament(req, res) {
        const id = parseInt(req.params.id);
        try {
            const msg = await tournamentService.deleteTournament(id);
            res.status(200).json(msg);
        } catch (error) {
            res.status(500).send({message: 'Internal server error'});
        }
    }

}
