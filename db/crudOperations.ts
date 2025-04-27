import pool from "./db";

// CREATE
export async function createUser(name: string, email: string) {
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email]
  );
  return result.rows[0];
}

// READ
export async function getUserByEmail(email: string) {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
}

// UPDATE
export async function updateUserEmail(oldEmail: string, newEmail: string) {
  const result = await pool.query(
    "UPDATE users SET email = $1 WHERE email = $2 RETURNING *",
    [newEmail, oldEmail]
  );
  return result.rows[0];
}

// DELETE
export async function deleteUserByEmail(email: string) {
  const result = await pool.query(
    "DELETE FROM users WHERE email = $1 RETURNING *",
    [email]
  );
  return result.rows[0];
}
