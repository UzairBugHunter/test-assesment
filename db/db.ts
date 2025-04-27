import { Pool } from "pg";
import { dbConfig } from "../data/testData"; // Adjust path if needed

const pool = new Pool({
  connectionString: dbConfig.connectionString,
});

export default pool;
