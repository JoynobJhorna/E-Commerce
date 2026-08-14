import React, { useEffect, useState } from 'react';
import Card from './Card'

import ReactPaginateModule from 'react-paginate';
const ReactPaginate = ReactPaginateModule?.default ?? ReactPaginateModule


const Paginate = ({ itemsPerPage ,Product}) => {
  const items =  Product
function Items({ currentItems }) {
  return (
    <div className='flex flex-wrap justify-between gap-y-10'>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item.id}>
            <Card
              key={item.id}
              imgConsle={item.thumbnail}
              percentage={item.discountPercentage}
              title={item.title}
              price={item.price}
              disprice={(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)}
              review={item.reviews?.length || 0}
              rating={item.rating}
            />
          </div>
        ))}
    </div>
  );
}
 const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
   <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        previousLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="flex justify-start w-full mt-6 gap-2"
        pageClassName="inline-block"
        pageLinkClassName="px-6.25 py-0.5  cursor-pointer bg-black text-white "
        // activeClassName="bg-white text-white"
        // pageRangeDisplayed={6}
      />
    </>
  )
}

export default Paginate
