const filterProducts = (products, query) => {
  return products.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
};

export default filterProducts;