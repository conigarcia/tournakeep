import { Router } from "express";
import tournamentController from "../controllers/tournamentController.js";
import { createTournamentSchema, updateTournamentSchema } from "../schemas/tournamentSchema.js";
import validateData from "../middleware/validationMiddleware.js";

const router = Router();

router.get('/', tournamentController.getAllTournaments);
router.get('/:id', tournamentController.getTournament);
router.post('/', validateData(createTournamentSchema), tournamentController.createTournament);
router.patch('/:id', validateData(updateTournamentSchema), tournamentController.updateTournament);
router.delete('/:id', tournamentController.deleteTournament);

export default router;
