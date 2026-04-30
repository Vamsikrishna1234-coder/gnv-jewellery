import { useState } from "react";

const useSearch = (items) => {
  const [query, setQuery] = useState("");

  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return { query, setQuery, filtered };
};

export default useSearch;