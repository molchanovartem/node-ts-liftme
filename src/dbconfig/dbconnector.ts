import { Pool } from 'pg';

export default new Pool ({
    max: 20,
    connectionString: 'postgres://postgres:pass@localhost:5433/todos',
    idleTimeoutMillis: 30000
});