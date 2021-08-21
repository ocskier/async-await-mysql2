class Controller {
  constructor(db) {
    this.db = db;
  }
  getAllAuthors = () => this.db.execute('SELECT * FROM authors');
  addAnAuthor = (author) => {
    return this.db.execute('INSERT INTO authors(name,city) VALUES (?, ?)', [
      author.name,
      author.city,
    ]);
  };
}

module.exports = Controller;
