import { useState } from "react";
import { useFetch } from "./hooks";
import { API, PAGINATION } from "./constants";
import type { Project } from "./types";
import { Table } from "./Table";
import { Pagination } from "./Pagination";

export const App = () => {
  const { data, isLoading, error } = useFetch<Project[]>(API.GET_PROJECTS);
  const [page, setPage] = useState(PAGINATION.PAGE);
  const [size, setSize] = useState(PAGINATION.SIZE);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Unable to fetch data.</div>;
  if (!data.length) return <div>No data found.</div>;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSizeChange = (newSize: number) => {
    setSize(newSize);
  };

  const paginatedData = data.slice((page - 1) * size, page * size);

  return (
    <div className="table-container">
      <Table data={paginatedData} />
      <Pagination
        page={page}
        size={size}
        totalCount={data.length}
        handlePageChange={handlePageChange}
        handleSizeChange={handleSizeChange}
      />
    </div>
  );
};
