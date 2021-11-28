import styled from "styled-components";
import { useTeam } from "../../context/Team";
import { useParticipant } from "../../context/Participants";
import { useTable } from "../../context/Table";

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
`
export function AddButton () {
  const { team } = useTeam();
  const { participants, setParticipants} = useParticipant();
  const { table, setTable} = useTable();

  return (
    <StyledButton
    onClick={e => {
      if(team && !participants.includes(team)) {
        setParticipants([...participants, team])}
        const teamObj = {[team]: []};
        setTable({...table, ...teamObj})
      }
    }
    >
      +
    </StyledButton>
  )
}
