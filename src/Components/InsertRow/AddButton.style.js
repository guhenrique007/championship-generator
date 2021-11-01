import styled from "styled-components";
import { useTeam } from "../../context/Team";
import { useParticipant } from "../../context/Participants";

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: aquamarine;
`
export function AddButton () {
  const { team } = useTeam();
  const { participants, setParticipants} = useParticipant();

  return (
    <StyledButton
    onClick={e => {
      if(team && !participants.includes(team)) {
        setParticipants([...participants, team])}
      }
    }
    >
      +
    </StyledButton>
  )
}
