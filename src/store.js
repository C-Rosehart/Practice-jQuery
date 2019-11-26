import page from "./page";

const pages = [];
let adding = false;
let error = null;
let filter = 0;

const findById = function(id) {
  return this.pages.find(currentPage => currentPage.id === id);
};

const setError = function(error) {
  this.error = error;
};

const addPage = function(bookmark) {
  try {
    this.pages.push(page.createPage(bookmark));
    console.log(this.pages);
  } catch (e) {
    console.log(e.message);
  }
};

const findAndDelete = function(id) {
  this.pages = this.pages.filter(currentPage => currentPage.id !== id);
};

const toggleExpandedView = function() {
  this.pages = this.pages.filter(currentPage => !currentPage.expanded);
};

export default {
  pages,
  adding,
  error,
  filter,
  findById,
  setError,
  addPage,
  findAndDelete,
  toggleExpandedView
};
