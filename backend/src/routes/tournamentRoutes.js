import { Router } from "express";
import { tournamentController } from "../controllers/tournamentController.js";

const router = Router();

router.get('/', tournamentController.getAllTournaments);
router.get('/:id', tournamentController.getTournament);
router.post('/', tournamentController.createTournament);
router.patch('/:id', tournamentController.updateTournament);
router.delete('/:id', tournamentController.deleteTournament);

export default router;
