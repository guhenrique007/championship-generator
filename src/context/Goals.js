import React, {createContext, useState, useContext } from "react";

const GoalsContext = createContext();

// Context for championship goals
export default function GoalsProvider({ children }) {
  const [goals, setGoals] = useState({});

  return (
    <GoalsContext.Provider
      value={{
        goals,
        setGoals
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
}

export function useGoals() {
  const context = useContext(GoalsContext);
  if(!context) throw new Error("useGoals must be used within a ScoreProvider")
  const { goals, setGoals } = context;
  return { goals, setGoals };
}