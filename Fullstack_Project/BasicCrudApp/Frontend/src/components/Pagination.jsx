import React, { useState } from "react";

function Pagination({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 4;
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const currentItems = data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data.length / itemPerPage);

  const goToPage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div>
        {currentItems.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            style={{
              fontWeight: currentPage === index + 1 ? "bold" : "normal",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
