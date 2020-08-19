import React from "react";
import { tHead } from "../data";

import "./Table.css";
import { Arrow } from "../Arrow/Arrow";

const Table = ({ data, onSort, sortArrow, sortField }) => {
  return (
    <>
      {data && data.length ? (
        <table className="table">
          <thead>
            <tr>
              {data &&
                tHead.columns.map((headItem) => {
                  return (
                    <th
                      className="thead"
                      key={headItem.columnKey}
                      onClick={() => {
                        const { filter } = headItem;
                        if (filter && filter.sort) {
                          onSort(headItem.columnKey);
                        }
                      }}
                    >
                      {headItem.columnName}
                      {sortField === headItem.columnKey ? (
                        <Arrow sortArrow={sortArrow} />
                      ) : null}
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.sites ? item.sites + " site" : 0}</td>
                <td className="type-color">{item.type}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Совпадений нет</div>
      )}
    </>
  );
};
export default Table;
