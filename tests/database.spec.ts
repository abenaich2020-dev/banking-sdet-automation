import { test, expect } from '@playwright/test';
import { DatabaseHelper } from '../utils/database';

test.describe('Banking Application - Database Validation', () => {

  test('should validate customer accounts using SQL', () => {
    const database = new DatabaseHelper();

    database.createTables();

    // Create test data for customer 12212
    database.insertAccount(
      12345,
      12212,
      'CHECKING',
      1500.50
    );

    database.insertAccount(
      12346,
      12212,
      'SAVINGS',
      5000.00
    );

    // Query all accounts belonging to the customer
    const accounts = database.getAccountsByCustomerId(12212);

    // Validate the SQL query returned two accounts
    expect(accounts).toHaveLength(2);

    // Validate the account data
    expect(accounts[0]).toMatchObject({
      id: 12345,
      customer_id: 12212,
      account_type: 'CHECKING',
      balance: 1500.50,
    });

    expect(accounts[1]).toMatchObject({
      id: 12346,
      customer_id: 12212,
      account_type: 'SAVINGS',
      balance: 5000.00,
    });

    database.close();
  });

});