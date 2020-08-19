export const search = (rows, term) => {
  const columns = rows[0] && Object.keys(rows[0]);

  if (term.length === 0) return rows;
  return rows.filter((row, i) => {
    return columns.some((column) => {
      if (column !== "id") {
        return (
          row[column].toString().toLowerCase().indexOf(term.toLowerCase()) > -1
        );
      } else return false;
    });
  });
};
