import React, {createContext, useState, useContext } from "react";

const ParticipantContext = createContext();

export default function ParticipantProvider({ children }) {
  const [participants, setParticipants] = useState([]);

  return (
    <ParticipantContext.Provider
      value={{
        participants,
        setParticipants
      }}
    >
      {children}
    </ParticipantContext.Provider>
  );
}

export function useParticipant() {
  const context = useContext(ParticipantContext);
  if(!context) throw new Error("useParticipant must be used within a ParticipantProvider")
  const { participants, setParticipants } = context;
  return { participants, setParticipants };
}