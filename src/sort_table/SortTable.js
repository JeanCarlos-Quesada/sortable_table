import React from "react";
import queryString from "query-string";
import "./sort_table.css";

const SortTable = ({ columnsNames, rows, max = 2 }) => {
  const [state, saveState] = React.useState({
    page: 1,
    maxPage: 1,
    maxPaginator: 10,
    rows: [],
    filterRows: [],
    lastSortColumn: 0,
  });

  React.useEffect(() => {
    init();
  }, []);

  const init = () => {
    /*Get the page in the URL*/
    let { page } = queryString.parse(window.location.search);

    let tmp = [...rows];
    let min = 0;
    let maxPage = 1;
    /*Get the page and set the min for the splice*/
    if (page !== undefined) {
      page = parseInt(page);
      state.page = page;
      min = max * page - max;
    }

    /*Filter the array by page number*/
    if (max < tmp.length) {
      tmp = tmp.splice(min, max);
      maxPage = rows.length / max;
    }

    state.filterRows = tmp;
    state.rows = [...rows];
    state.maxPage = maxPage;
    state.maxPaginator = page ? (page === maxPage ? page : page + 9) : 10;
    saveState({ ...state });
  };

  /*Next page on the table*/
  const next = () => {
    if (state.page < state.maxPage) {
      let tmp = [...state.rows];
      tmp = tmp.splice(max * state.page, max);

      state.filterRows = tmp;
      state.page += 1;

      saveState({ ...state });

      changeURL();
    }
  };

  /*Previous page on the table*/
  const previous = () => {
    if (state.page > 1) {
      let tmp = [...state.rows];
      let previousPage = max * (state.page - 1) - max;
      tmp = tmp.splice(previousPage, max);

      state.filterRows = tmp;
      state.page -= 1;

      saveState({ ...state });

      changeURL();
    }
  };

  /*Sort table when the user do click in the column title*/
  const onSort = (column) => {
    let tmp = [...state.rows];

    /*Calculate the type of sort*/
    tmp =
      state.lastSortColumn === column
        ? reverseSort(tmp, column)
        : sort(tmp, column);

    state.rows = [...tmp];

    /*Calculate items for page*/
    if (max < tmp.length) {
      let min = max * state.page - max;
      tmp = tmp.splice(min, max);
    }

    state.lastSortColumn = state.lastSortColumn === column ? -1 : column;
    state.filterRows = tmp;
    saveState({ ...state });
  };

  /*Sort items by table column*/
  const sort = (rows, column) => {
    rows = rows.sort((a, b) => {
      if (a[column] < b[column]) {
        return -1;
      }
      if (b[column] < a[column]) {
        return 1;
      }
      return 0;
    });

    return rows;
  };

  /*Reverse sort items by table column*/
  const reverseSort = (rows, column) => {
    rows = rows.sort((a, b) => {
      if (a[column] > b[column]) {
        return -1;
      }
      if (b[column] > a[column]) {
        return 1;
      }
      return 0;
    });

    return rows;
  };

  /*Change the items on the table by page (when the user do click un the paginator number)*/
  const changePagePaginator = (page) => {
    let tmp = [...state.rows];
    let min = 0;
    /*Get the page and set the min for the splice*/
    if (page !== undefined) {
      page = parseInt(page);
      state.page = page;
      min = max * page - max;
    }

    /*Filter the array by page number*/
    if (max < tmp.length) {
      tmp = tmp.splice(min, max);
    }

    state.filterRows = tmp;

    saveState({ ...state });

    changeURL();
  };

  /*Change the url with the current page of the table*/
  const changeURL = () => {
    changeMaxPaginator();

    /*Set the new page number to the URL*/
    let url = window.location.pathname;
    url = `${url}?page=${state.page}`;
    window.history.replaceState("", "", url);
  };

  const changeMaxPaginator = async () => {
    state.maxPaginator = state.page + 9;
    saveState({ ...state });
  };

  /*Return the ul with the pages number*/
  const pages = () => {
    let currentPage = state.maxPaginator - 9;
    let paginator = [];

    if (currentPage > (state.maxPage - 9)) {
      currentPage = state.maxPage - 9;
    }

    while (state.maxPage >= currentPage && currentPage <= state.maxPaginator) {
      const aux = currentPage;
      paginator.push(
        <li
          className={`${state.page == aux && "active"}`}
          onClick={() => {
            changePagePaginator(aux);
          }}
          key={`paginator_page_${currentPage}`}
        >
          {currentPage}
        </li>
      );
      currentPage += 1;
    }

    return <ul>{paginator}</ul>;
  };

  return (
    <div className='default-style-sort-table'>
      <table>
        <thead>
          <tr>
            {columnsNames.map((item, index) => {
              return (
                <th
                  onClick={() => {
                    onSort(index);
                  }}
                  key={`sort_table_column_${item}`}
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {state.filterRows.map((item, index) => {
            return (
              <tr key={`sort_table_row_${item}_${index}`}>
                {item.map((row, index) => {
                  return (
                    <td key={`sort_table_row_value_${row}_${index}`}>{row}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='paginator'>
        <button onClick={previous}>{`<`}</button>
        {pages()}
        <button onClick={next}>{`>`}</button>
      </div>
    </div>
  );
};

export default SortTable;
