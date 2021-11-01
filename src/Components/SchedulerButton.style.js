import styled from "styled-components";

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
`

export function SchedulerButton () {
  return (
    <StyledButton>
      Schedule
    </StyledButton>
  )
}