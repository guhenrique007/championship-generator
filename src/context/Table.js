import React, {createContext, useState, useContext } from "react";

const TableContext = createContext();

// Context for championship table
export default function TableProvider({ children }) {
  const [table, setTable] = useState({});

  return (
    <TableContext.Provider
      value={{
        table,
        setTable
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

export function useTable() {
  const context = useContext(TableContext);
  if(!context) throw new Error("useTable must be used within a ScoreProvider")
  const { table, setTable } = context;
  return { table, setTable };
}