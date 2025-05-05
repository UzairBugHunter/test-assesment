import { Pool } from "pg";
import { postgresConfig } from "../data/testData"; // Adjust if testData path changes

// Initialize PostgreSQL pool using connection string
const pool: Pool = new Pool({
  connectionString: postgresConfig.connectionString,
});

// Optional: Handle unexpected connection errors
pool.on("error", (err) => {
  console.error("Unexpected error on idle PostgreSQL client", err);
  process.exit(-1);
});

export default pool;
