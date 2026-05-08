import { useState, useMemo } from "react";

const useSearch = (products) => {

  /* SEARCH */
  const [query, setQuery] = useState("");

  /* TEMP FILTERS */
  const [metal, setMetal] = useState("All");
  const [ornament, setOrnament] = useState("All");
  const [weight, setWeight] = useState("All");
  const [price, setPrice] = useState("All");

  /* APPLIED FILTERS */
  const [appliedFilters, setAppliedFilters] = useState({
    metal: "All",
    ornament: "All",
    weight: "All",
    price: "All",
  });

  const filtered = useMemo(() => {

    let result = [...products];

    const {
      metal,
      ornament,
      weight,
      price,
    } = appliedFilters;

    /* SEARCH TEXT */
    if (query.trim()) {
      result = result.filter((item) =>
        item.name?.toLowerCase().includes(query.toLowerCase())
      );
    }

    /* METAL FILTER */
    if (metal !== "All") {
      result = result.filter(
        (item) =>
          item.metal &&
          item.metal?.toLowerCase() === metal.toLowerCase()
      );
    }

    /* ORNAMENT FILTER */
    if (ornament !== "All") {
      result = result.filter(
        (item) =>
          item.category &&
          item.category?.toLowerCase() === ornament.toLowerCase()
      );
    }

    /* WEIGHT FILTER */
    result = result.filter((item) => {

      const w = parseFloat(item.weight);

      if (weight === "Below 10g") return w < 10;

      if (weight === "10g-20g")
        return w >= 10 && w <= 20;

      if (weight === "20g-30g")
        return w >= 20 && w <= 30;

      if (weight === "30g-50g")
        return w >= 30 && w <= 50;

      if (weight === "50g-70g")
        return w >= 50 && w <= 70;

      if (weight === "70g-100g")
        return w >= 70 && w <= 100;

      if (weight === "100g-400g")
        return w >= 100 && w <= 400;

      return true;
    });

    /* PRICE FILTER */
    if (price === "0-50000") {
      result = result.filter(
        (item) => item.price <= 50000
      );
    }

    if (price === "50000-200000") {
      result = result.filter(
        (item) =>
          item.price > 50000 &&
          item.price <= 200000
      );
    }

    if (price === "200000+") {
      result = result.filter(
        (item) => item.price > 200000
      );
    }

    return result;

  }, [query, products, appliedFilters]);

  return {

    query,
    setQuery,

    filtered,

    /* TEMP FILTERS */
    metal,
    setMetal,

    ornament,
    setOrnament,

    weight,
    setWeight,

    price,
    setPrice,

    /* APPLY FILTERS */
    appliedFilters,
    setAppliedFilters,
  };
};

export default useSearch;