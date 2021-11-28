import React, {createContext, useState, useContext } from "react";

const FixtureContext = createContext();

export default function FixtureProvider({ children }) {
  const [fixtures, setFixtures] = useState([]);

  return (
    <FixtureContext.Provider
      value={{
        fixtures,
        setFixtures
      }}
    >
      {children}
    </FixtureContext.Provider>
  );
}

export function useFixture() {
  const context = useContext(FixtureContext);
  if(!context) throw new Error("useFixture must be used within a FixtureProvider")
  const { fixtures, setFixtures } = context;
  console.log(fixtures)
  return { fixtures, setFixtures };
}