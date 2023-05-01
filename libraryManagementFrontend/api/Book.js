import request from "./client";

const addBook = async (book, auth_token) => {
  return await request("POST", "books/", book, auth_token);
};

const getBooks = async (auth_token) => {
  return await request("GET", "books/", {}, auth_token);
};

export default { addBook, getBooks };
