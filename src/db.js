import Dexie from 'dexie';

// Define the database
const db = new Dexie('todoDB');

// Define the schema
db.version(1).stores({
    tasks: '++id, title, priority', 
});

export default db;
