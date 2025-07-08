import db from '../config/db.js'

export const tournamentModel = {

    async getAllTournaments() {
        const result = await db.query(`
            select *
            from tournaments
            order by created_at desc
        `);

        return result.rows;
    },

    async getTournament(id) {
        const result = await db.query(`
            select *
            from tournaments
            where id = $1
        `, [id]);

        return result.rows[0];
    },

    async createTournament(name) {
        const result = await db.query(`
            insert into tournaments
            (name)
            values ($1)
            returning *
        `, [name]);

        return result.rows[0];
    },

    async updateTournament(query, values) {
        const result = await db.query(query, values);

        return result.rows[0];
    },

    async deleteTournament(id) {
        const result = await db.query(`
            delete from tournaments
            where id = $1
        `, [id]);

        return result.rowCount;
    }

}
