import sqldb from 'better-sqlite3';

const db = sqldb('/var/db/app.db');

db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS users ( 
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    image_count INTEGER DEFAULT 0
  );  
`);

// This will add the column to your CURRENT app.db if it's missing
try {
  db.exec(`ALTER TABLE users ADD COLUMN image_count INTEGER DEFAULT 0`);
  console.log("Column 'image_count' added to 'users' table.");
} catch (error) {
  // This error typically means the column already exists, which is fine.
  if (error.message.includes('duplicate column name')) {
    console.log("'image_count' column already exists in 'users' table.");
  } else {
    // For any other error, log it, as it might be a different issue.
    console.error("Error altering 'users' table:", error);
  }
}

export default db;
