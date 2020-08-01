import axios from "axios";

export default {
  getBooks: function() {
    return axios.get("/api/books");
  },
  saveBook: function(data) {
    return axios.post("/api/books", data);
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
