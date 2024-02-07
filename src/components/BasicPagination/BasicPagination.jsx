import Pagination from "@mui/material/Pagination";

export default function BasicPagination({ currentPage, setCurrentPage }) {
	return <Pagination count={3} page={currentPage} onChange={setCurrentPage} />;
}
