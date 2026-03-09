import promisePool from '../utils/database.js';


// TODO: lisää modelit ja muokkaa kontrollerit reiteille:
// GET /api/users/:id - get user by id
const findUserById = async (id) => {
  const sql = 'SELECT user_id, username, email, created_at FROM Users WHERE user_id = ?';
  const [rows] = await promisePool.execute(sql, [id]);
  return rows[0];
};

const putUserById = async (user) => {
  const {username, password, email, id} = user;
  const sql = 'UPDATE Users SET username = ?, password = ?, email = ? WHERE user_id = ?';
  const params = [username, password, email, id];
  try {
    const [result] = await promisePool.execute(sql, params);
    return result.affectedRows > 0;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

// Päivitä käyttäjän tiedot
const updateUserById = async (user) => {
  const {username, password, email, id} = user;
  const sql = 'UPDATE Users SET username = ?, password = ?, email = ? WHERE user_id = ?';
  const [result] = await promisePool.execute(sql, [username, password, email, id]);
  return result.affectedRows > 0;
};

// Poista käyttäjä
const removeUserById = async (id) => {
  const [result] = await promisePool.execute('DELETE FROM Users WHERE user_id = ?', [id]);
  return result.affectedRows > 0;
};


// GET /api/users - list all users
const listAllUsers = async () => {
  const sql = 'SELECT username, created_at FROM Users';
  const [rows] = await promisePool.query(sql);
  return rows;
};

// POST /api/users - add a new user
const addUser = async (user) => {
  const {username, password, email} = user;
  const sql = `INSERT INTO Users (username, password, email)
               VALUES (?, ?, ?)`;
  const params = [username, password, email];
  try {
    const [result] = await promisePool.execute(sql, params);
    return {user_id: result.insertId};
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

// Huom: virheenkäsittely puuttuu
const findUserByUsername = async (username) => {
  const sql = 'SELECT * FROM Users WHERE username = ?';
  const [rows] = await promisePool.execute(sql, [username]);
  return rows[0];
};

export {findUserByUsername, addUser, listAllUsers, findUserById, updateUserById, removeUserById, putUserById};
