const conn = require('./db/connection');
const Controller = require('./db/controller');

let controller;

const init = async () => {
  try {
    const db = await conn;
    console.log('Connected to db!');
    controller = new Controller(db);
    const [authorRows, fields] = await controller.getAllAuthors();
    console.table(authorRows);
    const author = { name: 'Craig Buckler', city: 'Exmouth' };
    const [authorRes] = await controller.addAnAuthor(author);
    console.log(authorRes.insertId);
    db.end();
  } catch (err) {
    console.log('This went wrong: ', err);
  }
};

init();
