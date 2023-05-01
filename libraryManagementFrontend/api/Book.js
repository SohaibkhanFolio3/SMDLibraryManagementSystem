import request from "./client";

const addBook = async (book, auth_token) => {
  return await request("POST", "books/", book, auth_token);
};

const getBooks = async (auth_token) => {
  return await request("GET", "books/", {}, auth_token);
};

const deleteBook = async (book_id, auth_token) => {
  return await request("DELETE", `books/${book_id}/`, {}, auth_token);
};

const addMoreCopies = async (book_id, no_of_copies, auth_token) => {
  return await request(
    "POST",
    "add_more_copies/",
    { book_id, no_of_copies },
    auth_token
  );
};
export default { addBook, getBooks, deleteBook, addMoreCopies };
