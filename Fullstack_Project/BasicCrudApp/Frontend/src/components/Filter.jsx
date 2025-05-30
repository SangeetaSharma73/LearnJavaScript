import React, { useState } from "react";

function Filter({ data, setFilteredData }) {
  const [search, setSearch] = useState("");

  const handleFilter = (e) => {
    const value = e.target.value;
    setSearch(value);
    const filtered = data.filter((p) =>
      p.category.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filtered);
  };

  return (
    <div className="m-4">
      <input
        type="text"
        value={search}
        onChange={handleFilter}
        placeholder="Filter by Category"
        className="p-2 border border-gray-400 rounded"
      />
    </div>
  );
}

export default Filter;
