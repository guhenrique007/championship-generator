import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useTable } from "../../../context/Table";

const StyledInput = styled.input`
  width: 29px;
  height: 44px;
  text-align: center;
`;

export function ScoreInput (team) {
  const inputRef = useRef(null);
  const { table, setTable} = useTable();

  const [score, setScore] = useState("");

  useEffect(
    () => {
      const parentEl = inputRef.current.parentElement;
      const teams = parentEl.id.split('~');
      const teamA = teams[0];
      const teamB = teams[1];
      const childrenElements = parentEl.children;
      const teamAElement = [...childrenElements].find(c => c.id === teamA);
      const teamBElement = [...childrenElements].find(c => c.id === teamB);
      const roundElement = parentEl.parentElement;
      const roundNumber = roundElement.id.replace('round~','')
      
      if(!teamAElement?.value || !teamBElement?.value) return;

      console.log(teamAElement.value , teamBElement.value)
      console.log(table)
      if(teamAElement.value > teamBElement.value) {
        const tempTable = table; 
        tempTable[teamA][roundNumber] = 'W'
        tempTable[teamB][roundNumber] = 'L'
        setTable({...tempTable})
      } else if (teamAElement.value < teamBElement.value) {
        const tempTable = table; 
        tempTable[teamA][roundNumber] = 'L'
        tempTable[teamB][roundNumber] = 'W'
        setTable({...tempTable})
      } else {
        const tempTable = table; 
        tempTable[teamA][roundNumber] = 'D'
        tempTable[teamB][roundNumber] = 'D'
        setTable({...tempTable})
      }

      console.log('after', table)
    },
    [score]
  );

  return (
    <StyledInput id={team.id} ref={inputRef}
    onBlur={e => setScore(e.target.value)}>
    </StyledInput>
  )
}