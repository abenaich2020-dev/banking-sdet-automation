import Database from 'better-sqlite3';

export class DatabaseHelper {
  private db: Database.Database;

  constructor() {
    this.db = new Database(':memory:');
  }

  createTables(): void {
    this.db.exec(`
      CREATE TABLE accounts (
        id INTEGER PRIMARY KEY,
        customer_id INTEGER NOT NULL,
        account_type TEXT NOT NULL,
        balance REAL NOT NULL
      );
    `);
  }

  insertAccount(
    id: number,
    customerId: number,
    accountType: string,
    balance: number
  ): void {
    const statement = this.db.prepare(`
      INSERT INTO accounts (
        id,
        customer_id,
        account_type,
        balance
      )
      VALUES (?, ?, ?, ?)
    `);

    statement.run(id, customerId, accountType, balance);
  }

  getAccountById(id: number) {
    const statement = this.db.prepare(`
      SELECT *
      FROM accounts
      WHERE id = ?
    `);

    return statement.get(id);
  }

  close(): void {
    this.db.close();
  }

  getAccountsByCustomerId(customerId: number) {
    const statement = this.db.prepare(`
      SELECT *
      FROM accounts
      WHERE customer_id = ?
    `);

    return statement.all(customerId);
  }
}