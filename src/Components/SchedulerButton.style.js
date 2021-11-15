import styled from "styled-components";
import { sortFixtures } from "../scripts/sortFixtures";
import { useParticipant } from "../context/Participants";
import { useFixture } from '../context/Fixtures';

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
`

export function SchedulerButton () {
  const { participants } = useParticipant();
  const { setFixtures } = useFixture();

  return (
    <div>
      {
        participants.length > 1 ?
          <StyledButton onClick={e => {
            const fixturesSorted = sortFixtures(participants);
            setFixtures(fixturesSorted);
          }}>
            Schedule
          </StyledButton>
        : <></>
      }
    </div>
  )
}