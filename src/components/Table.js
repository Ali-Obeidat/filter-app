import { Fragment } from 'react';
import { useState } from 'react';


function Table({ data, config, keyFn }) {
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 10
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage

  const records = data.slice(firstIndex, lastIndex)
  const pagesNumber = Math.ceil(data.length / recordsPerPage)
  const numbers = [...Array(pagesNumber + 1).keys()].slice(1)
  console.log(numbers);

  const nextPage = () => {
    if (currentPage < pagesNumber) {
      console.log(currentPage, pagesNumber);
      setCurrentPage(currentPage + 1)
    }

  }
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }

  }

  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = records.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <>
      <div className='flex justify-center' >
        <table className="table-auto border-spacing-2 w-3/4">
          <thead>
            <tr className="border-b-2">{renderedHeaders}</tr>
          </thead>
          <tbody>{renderedRows}</tbody>


        </table>
      </div>

      <div className='m-2'>
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px">
            <li>
              <button
                onClick={prevPage}
                href="#"
                className="px-3 py-2 ml-0 leading-tight text-gray-500
             bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100
              hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
               dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
            </li>
            {numbers.map((n, i) => {
              return <li>
                <button
                  onClick={() => setCurrentPage(n)}
                  key={i}
                  className={`px-3 py-2 leading-tight
                border
                 border-gray-300 hover:bg-gray-100
                  hover:text-gray-700 dark:bg-gray-800
                   dark:border-gray-700 dark:text-gray-400
                    dark:hover:bg-gray-700 dark:hover:text-white
                    ${currentPage === n ? 'bg-blue-50 text-blue-600' : ' text-gray-500 bg-white'} `}>{n}</button>
              </li>
            })}


            <li>
              <button
                onClick={nextPage}
                className="px-3
             py-2 leading-tight text-gray-500
              bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </>





  );
}

export default Table;
