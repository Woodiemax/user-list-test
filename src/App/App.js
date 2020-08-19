import React, { useEffect, useState } from "react";
import "./App.css";
import { userData, customData } from "../data";
import Table from "../Table/Table";
import SearchPanel from "../SearchPanel/SearchPanel";
import { search } from "../utils/utils";

function App() {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState([]);
  const [sort, setSort] = useState({
    sortType: "asc",
    sortField: null,
  });

  const onSort = (field) => {
    field = field.replace(/\s+/g, "");
    setData(
      sort.sortType === "asc"
        ? data.sort((a, b) => (b[field] > a[field] ? 1 : -1))
        : data.sort((a, b) => (a[field] > b[field] ? 1 : -1))
    );
    setSort({
      sortType: sort.sortType === "asc" ? "desc" : "asc",
      sortField: field,
    });
  };

  const visible = search(
    userData.map((user) => {
      return {
        ...user,
        type: customData.type[user.type],
        status: customData.status[user.status],
      };
    }),
    term
  );

  useEffect(() => {
    setData(userData);
  }, []);

  return (
    <div className="App">
      <SearchPanel onSearch={search} setTerm={setTerm} />
      <Table
        data={visible}
        onSort={onSort}
        sortField={sort.sortField}
        sortArrow={sort.sortType}
      />
    </div>
  );
}

export default App;
