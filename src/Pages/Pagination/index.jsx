import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components";

const LIMIT = 10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);

  useEffect(() => {
    fetchProduct();
  }, [currentPage]);

  const fetchProduct = async () => {
    const data =
      await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT
      }&select=title,price,description,thumbnail,discountPercentage
`);
    const result = await data.json();
    setProducts(result.products);

    setNoOfPages(
      Math.floor(result?.total / LIMIT) + (result?.total % LIMIT ? 1 : 0),
    );
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {products?.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>

      <div className="p-10 cursor-pointer">
        {currentPage > 0 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          >
            Prev
          </span>
        )}

        {[...Array(noOfPages)]?.map((_, i) => (
          <span
            className={`text-xl p-2 ${
              i === currentPage && "font-bold underline"
            }`}
            onClick={() => setCurrentPage(i)}
          >
            {i + 1}
          </span>
        ))}

        {currentPage < noOfPages - 1 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          >
            Next
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
