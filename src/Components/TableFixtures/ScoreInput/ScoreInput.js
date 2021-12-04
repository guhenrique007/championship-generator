import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useTable } from "../../../context/Table";
import { useGoals } from "../../../context/Goals"; 

const StyledInput = styled.input`
  width: 29px;
  height: 44px;
  text-align: center;
`;

export function ScoreInput (team) {
  const inputRef = useRef(null);
  const { table, setTable } = useTable();
  const { goals, setGoals } = useGoals();

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
      
      const tempGoals = goals;
      // const currentGoalsForTeamA = goals[teamA] && goals[teamA].for ? ;
      // const currentGoalsForTeamB = goals[teamB] && goals[teamB].for ? goals[teamB].for : [];
      // const currentGoalsAgainstTeamA = goals[teamA] && goals[teamA].against ? goals[teamA].against : [];
      // const currentGoalsAgainstTeamB = goals[teamB] && goals[teamB].against ? goals[teamB].against : [];

      // tempGoals[teamA] = {
      //   for: currentGoalsForTeamA,
      //   against: currentGoalsAgainstTeamA,
      // } ;
      // tempGoals[teamB] = { 
      //   for: currentGoalsForTeamB,
      //   against: currentGoalsAgainstTeamB,
      // };
      try {
        tempGoals[teamA].for[roundNumber] = teamAElement.value;
        tempGoals[teamA].against[roundNumber] = teamBElement.value;
      } catch {
        tempGoals[teamA] = { for: [], against: []}
        tempGoals[teamA].for[roundNumber] = teamAElement.value
        tempGoals[teamA].against[roundNumber] = teamBElement.value
      }

      try {
        tempGoals[teamB].for[roundNumber] = teamBElement.value;
        tempGoals[teamB].against[roundNumber] = teamAElement.value;
      } catch {
        tempGoals[teamB] = { for: [], against: []}
        tempGoals[teamB].for[roundNumber] = teamBElement.value
        tempGoals[teamB].against[roundNumber] = teamAElement.value
      }


      setGoals({...tempGoals})
      console.log(tempGoals)
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