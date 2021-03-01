import pool from '../dbconfig/dbconnector';

class TodosController {
    public async get(req: any, res: any) {
        try {
            // const client = await pool.connect();

            const sql = "SELECT * FROM todo";
            const { rows } = await pool.query(sql);
            const todos = rows;

            // pool.release();

            res.send(todos);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

export default TodosController;