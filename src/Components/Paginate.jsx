import React, { useEffect, useState } from 'react';
import Card from './Card'

import ReactPaginateModule from 'react-paginate';
import { useSelector } from 'react-redux';
const ReactPaginate = ReactPaginateModule?.default ?? ReactPaginateModule

 

const Paginate = ({ itemsPerPage }) => {
  const data = useSelector(state => state.products?.value || [])
  const items = Array.isArray(data) ? data : [];
  const safeItemsPerPage = Number(itemsPerPage) || 6;

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

  const endOffset = itemOffset + safeItemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / safeItemsPerPage) || 1;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * safeItemsPerPage) % items.length;
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
      />
    </>
  )
}

export default Paginate
