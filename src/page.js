const createPage = function({ id, title, url, desc, rating }) {
  return {
    id,
    title,
    url,
    desc,
    rating,
    expanded: false
  };
};

export default {
  createPage
};
