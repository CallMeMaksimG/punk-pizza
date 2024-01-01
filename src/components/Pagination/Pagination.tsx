import ReactPaginate from 'react-paginate';

type TPaginationProps = {
    currentPage: number;
    onChangePage: (page: number) => void;
};

const Pagination: React.FC<TPaginationProps> = ({
    currentPage,
    onChangePage,
}) => {
    return (
        <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={4}
            previousLabel="<"
            renderOnZeroPageCount={null}
            forcePage={currentPage - 1}
        />
    );
};

export default Pagination;
