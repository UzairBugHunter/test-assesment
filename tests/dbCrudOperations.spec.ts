import { test, expect } from '@playwright/test';
import { createUser, getUserByEmail, updateUserEmail, deleteUserByEmail } from '../db/crudOperations';

test.describe('Database CRUD Operations', () => {
  let testName: string;
  let testEmail: string;
  let updatedTestEmail: string;

  test.beforeEach(async () => {
    // Generate random name and email before every test
    const randomSuffix = Math.floor(Math.random() * 100000);
    testName = `Uzair_${randomSuffix}`;
    testEmail = `uzair_${randomSuffix}@example.com`;
    updatedTestEmail = `uzair_updated_${randomSuffix}@example.com`;

    try {
      // Clean up if somehow data already exists
      await deleteUserByEmail(testEmail);
      await deleteUserByEmail(updatedTestEmail);
    } catch (error) {
      console.log('No user found to delete, moving forward.');
    }
  });

  test('Basic CRUD Flow', async ({ browserName }) => {
    test.skip(browserName !== 'chromium', 'This DB test only runs on Chromium.');

    // CREATE
    const createdUser = await createUser(testName, testEmail);
    console.log('Created User:', createdUser);
    expect(createdUser.name).toBe(testName);
    expect(createdUser.email).toBe(testEmail);

    // READ
    const fetchedUser = await getUserByEmail(testEmail);
    console.log('Fetched User:', fetchedUser);
    expect(fetchedUser.email).toBe(testEmail);

    // UPDATE
    const updatedUser = await updateUserEmail(testEmail, updatedTestEmail);
    console.log('Updated User:', updatedUser);
    expect(updatedUser.email).toBe(updatedTestEmail);

    // DELETE
    const deletedUser = await deleteUserByEmail(updatedTestEmail);
    console.log('Deleted User:', deletedUser);
    expect(deletedUser.email).toBe(updatedTestEmail);
  });

});
