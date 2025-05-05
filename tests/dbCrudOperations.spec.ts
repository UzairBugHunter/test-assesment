import { test, expect } from "@playwright/test";
import {
  createUser,
  getUserByEmail,
  updateUserEmail,
  deleteUserByEmail,
} from "../db/crudOperations";

test.describe("Database CRUD Operations", () => {
  let testName: string;
  let testEmail: string;
  let updatedTestEmail: string;

  test.beforeEach(async () => {
    // 🔁 Generate unique user data per test run
    const randomSuffix = Math.floor(Math.random() * 100000);
    testName = `Uzair_${randomSuffix}`;
    testEmail = `uzair_${randomSuffix}@example.com`;
    updatedTestEmail = `uzair_updated_${randomSuffix}@example.com`;

    // 🧹 Pre-test cleanup to avoid duplicates
    try {
      await deleteUserByEmail(testEmail);
      await deleteUserByEmail(updatedTestEmail);
    } catch (error) {
      console.info("ℹ️ No existing user to delete, continuing test...");
    }
  });

  test.describe("@db", () => {
    test("Basic CRUD Flow", async ({ browserName }): Promise<void> => {
      // ✅ Run only on Chromium for stability
      test.skip(
        browserName !== "chromium",
        "This DB test only runs on Chromium."
      );

      // 🟢 CREATE
      const createdUser = await createUser(testName, testEmail);
      console.info("✅ Created User:", createdUser);
      expect(createdUser.name).toBe(testName);
      expect(createdUser.email).toBe(testEmail);

      // 🔵 READ
      const fetchedUser = await getUserByEmail(testEmail);
      console.info("📥 Fetched User:", fetchedUser);
      expect(fetchedUser?.email).toBe(testEmail);

      // 🟠 UPDATE
      const updatedUser = await updateUserEmail(testEmail, updatedTestEmail);
      console.info("🔁 Updated User:", updatedUser);
      expect(updatedUser.email).toBe(updatedTestEmail);

      // 🔴 DELETE
      const deletedUser = await deleteUserByEmail(updatedTestEmail);
      console.info("🗑️ Deleted User:", deletedUser);
      expect(deletedUser.email).toBe(updatedTestEmail);
    });
  });
});
