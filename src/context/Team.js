import React, {createContext, useState, useContext } from "react";

const TeamContext = createContext();

export default function TeamProvider({ children }) {
  const [team, setTeam] = useState('');

  return (
    <TeamContext.Provider
      value={{
        team,
        setTeam
      }}
    >
      {children}
    </TeamContext.Provider>
  );
}

export function useTeam() {
  const context = useContext(TeamContext);
  if(!context) throw new Error("useTeam must be used within a TeamProvider")
  const { team, setTeam } = context;
  return { team, setTeam };
}