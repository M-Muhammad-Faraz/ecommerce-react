import React from "react";

const Pagination = ({ productsPerPage, paginate, totalProducts }) => {
  const pageNumbers = [];

  for (
    let index = 1;
    index < Math.ceil(totalProducts / productsPerPage) + 1;
    index++
  ) {
    pageNumbers.push(index);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((item, index) => {
        return (
          <li key={index} className="page-item">
            <a
              className="page-link"
              onClick={(e) => {
                e.preventDefault();
                paginate(item);
              }}
              href="!#"
            >
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
