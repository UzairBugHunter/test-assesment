import pool from "./db";

/**
 * Insert a new user into the database.
 * @param name - User's full name
 * @param email - User's email address
 * @returns Created user object
 */
export async function createUser(
  name: string,
  email: string
): Promise<{ name: string; email: string }> {
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email]
  );
  return result.rows[0];
}

/**
 * Fetch a user by their email.
 * @param email - Email to search for
 * @returns User object or undefined
 */
export async function getUserByEmail(
  email: string
): Promise<{ name: string; email: string } | undefined> {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
}

/**
 * Update a user's email address.
 * @param oldEmail - Current email
 * @param newEmail - New email to update
 * @returns Updated user object
 */
export async function updateUserEmail(
  oldEmail: string,
  newEmail: string
): Promise<{ name: string; email: string }> {
  const result = await pool.query(
    "UPDATE users SET email = $1 WHERE email = $2 RETURNING *",
    [newEmail, oldEmail]
  );
  return result.rows[0];
}

/**
 * Delete a user by email.
 * @param email - Email of user to delete
 * @returns Deleted user object
 */
export async function deleteUserByEmail(
  email: string
): Promise<{ name: string; email: string }> {
  const result = await pool.query(
    "DELETE FROM users WHERE email = $1 RETURNING *",
    [email]
  );
  return result.rows[0];
}
