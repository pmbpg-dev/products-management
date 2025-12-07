import { useState } from "react";
import "./Pagination.css";
import ResponsivePaginationComponent from "react-responsive-pagination";

function Pagination({ currentPage, setCurrentPage, totalPage }) {
  return (
    <div className="pagination_layout">
      <ResponsivePaginationComponent
        total={totalPage}
        current={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default Pagination;
