import ReactPaginate from 'react-paginate';

function Pagination({ onChangePage, itemsLength }) {
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
        />
    );
}

export default Pagination;
