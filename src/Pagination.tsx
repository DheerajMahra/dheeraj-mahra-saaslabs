import { PAGINATION } from "./constants";

type Props = {
  page: number;
  size: number;
  totalCount: number;
  handlePageChange: (newPage: number) => void;
  handleSizeChange: (newSize: number) => void;
};

export const Pagination = ({
  page,
  size,
  totalCount,
  handlePageChange,
  handleSizeChange
}: Props) => {
  const totalPages = Math.ceil(totalCount / size);

  const handlePreviousPage = () => {
    handlePageChange(page - 1);
  };

  const handleNextPage = () => {
    handlePageChange(page + 1);
  };

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPageSize = Number(e.target.value);
    handleSizeChange(selectedPageSize);
    // Reset table to first page when page size changes
    // to correctly run paginated data logic
    handlePageChange(1);
  };

  return (
    <div className="pagination">
      <div className="pagination__chips">
        <button disabled={page === 1} onClick={handlePreviousPage}>
          Previous
        </button>
        <button disabled={page === totalPages} onClick={handleNextPage}>
          Next
        </button>
      </div>
      <div className="pagination__sizer">
        <select value={size} onChange={handlePageSizeChange}>
          {PAGINATION.SIZER.map(size => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
