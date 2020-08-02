import axios from "axios";

export default {
  searchBooks: function (query) {
    return axios.post("/api/books/search/" + query)
  },
  getBooks: function () {
    return axios.get("/api/books");
  },
  saveBook: function (data) {
    return axios.post("/api/books", data);
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  }
};
