import React from "react";
import queryString from "query-string";
import "./sort_table.css";

const SortTable = ({ columnsNames, rows, max = 1 }) => {
  const [state, saveState] = React.useState({
    page: 1,
    maxPage: 1,
    rows: [],
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

    state.rows = tmp;
    state.maxPage = maxPage;
    saveState({ ...state });
  };

  /*Next page on the table*/
  const next = () => {
    if (state.page < state.maxPage) {
      let tmp = [...rows];
      tmp = tmp.splice(max * state.page, max);

      state.rows = tmp;
      state.page += 1;

      saveState({ ...state });

      changeURL();
    }
  };

  /*Previous page on the table*/
  const previous = () => {
    if (state.page > 1) {
      let tmp = [...rows];
      let previousPage = max * (state.page - 1) - max;
      tmp = tmp.splice(previousPage, max);

      state.rows = tmp;
      state.page -= 1;

      saveState({ ...state });

      changeURL();
    }
  };

  /*Sort table when the user do click in the column title*/
  const onSort = (column) => {
    let tmp = [...rows];

    /*Calculate the type of sort*/
    tmp =
      state.lastSortColumn === column
        ? reverseSort(tmp, column)
        : sort(tmp, column);

    /*Calculate items for page*/
    if (max < tmp.length) {
      let min = max * state.page - max;
      tmp = tmp.splice(min, max);
    }

    state.lastSortColumn = state.lastSortColumn === column ? -1 : column;
    state.rows = tmp;
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

  /*Return the ul with the pages number*/
  const pages = () => {
    let currentPage = 1;
    let paginator = [];

    while (state.maxPage >= currentPage) {
      const aux = currentPage;
      paginator.push(
        <li
          className={`${state.page == aux && 'active'}`}
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

  /*Change the items on the table by page (when the user do click un the paginator number)*/
  const changePagePaginator = (page) => {
    let tmp = [...rows];
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

    state.rows = tmp;

    saveState({ ...state });

    changeURL();
  };

  /*Change the url with the current page of the table*/
  const changeURL = () => {
    /*Set the new page number to the URL*/
    let url = window.location.pathname;
    url = `${url}?page=${state.page}`;
    window.history.replaceState("", "", url);
  };

  return (
    <div className="default-style-sort-table">
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
          {state.rows.map((item) => {
            return (
              <tr key={`sort_table_row_${item}`}>
                {item.map((row) => {
                  return <td key={`sort_table_row_value_${row}`}>{row}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="paginator">
        <button onClick={previous}>{`<`}</button>
        {pages()}
        <button onClick={next}>{`>`}</button>
      </div>
    </div>
  );
};

export default SortTable;
