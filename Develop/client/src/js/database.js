import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const textDb = await openDB('Jate', 1);
  const txt = textDb.transaction('Jate','readwrite');
  const store = txt.objectStore('Jate');
  const request = store.put({ id: 1, Jate: content});
  const result = request;
  console.log('?? did it work?', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('get everything from database');
  const textDb = await openDB('Jate', 1);
  const txt = textDb.transaction('Jate', 'readonly');
  const store = txt.objectStore('Jate');
  const request = store.getAll();
  const result = await result;
  console.log('result.value', result);
  return result;
};

initdb();
