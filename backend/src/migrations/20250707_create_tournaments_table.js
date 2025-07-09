import db from '../config/db.js';

export async function up() {
    try {
        await db.query(
            `create table if not exists tournaments (
                id serial primary key,
                name varchar(100) unique not null,
                created_at timestamp default current_timestamp
            )`
        );
    } catch (error) {
        console.log(error)
    }
}

export async function down() {
    try {
        await db.query('drop table if exists tournaments');
    } catch (error) {
        console.log(error)
    }
}

up()