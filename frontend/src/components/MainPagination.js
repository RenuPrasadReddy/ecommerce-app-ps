import React from 'react';
import Pagination from 'react-js-pagination';
import { useState } from 'react';

function MainPagination({handlePagination}) {

  const [activePage, setActivePage] = useState(1);

  function handlePageChange(page) {
    // console.log("page=", page);
    setActivePage(page);
    handlePagination(page)
  }
  return (
    <div className="row justify-center">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={100}
          totalItemsCount={1024}
          pageRangeDisplayed={10}
          onChange={handlePageChange}
        />
      </div>
  )
}

export default MainPagination;