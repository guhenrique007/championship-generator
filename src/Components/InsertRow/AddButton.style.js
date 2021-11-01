import styled from "styled-components";
import { useTeam } from "../../context/Team";

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: aquamarine;
`
export function AddButton () {
  const { team } = useTeam();

  return (
    <StyledButton
    onClick={e => console.log(team)}
    >
      +
    </StyledButton>
  )
}
