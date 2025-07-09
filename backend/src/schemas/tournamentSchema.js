import { z } from 'zod';

export const tournamentSchema = z.object({
    id: z.number(),
    name: z.string().min(1, 'Tournament name too short').max(100, 'Tournament name too long'),
    createdAt: z.string().datetime(),
});

export const createTournamentSchema = tournamentSchema.omit({
    id: true,
    createdAt: true
});

export const updateTournamentSchema = z.object({
    name: z.string().min(1, 'Tournament name too short').max(255, 'Tournament name too long').optional(),
});
