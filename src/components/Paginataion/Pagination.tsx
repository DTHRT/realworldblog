import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

interface Props {
  pageCount: number;
  handlePageClick: (event: any) => void;
}
const Pagination: React.FC<Props> = ({ pageCount, handlePageClick }) => {
  return (
    <ReactPaginate
      className={styles.Pagination}
      pageCount={pageCount}
      previousLinkClassName={styles.Pagination__prev}
      previousLabel=""
      nextLinkClassName={styles.Pagination__next}
      nextLabel=""
      activeLinkClassName={styles.Pagination__activelink}
      pageLinkClassName={styles.Pagination__link}
      pageRangeDisplayed={5}
      marginPagesDisplayed={0}
      renderOnZeroPageCount={null}
      onPageChange={handlePageClick}
    />
  );
};

export default Pagination;
