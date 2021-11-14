import styled from "styled-components";
import { RowFixture } from "./RowFixture/RowFixture";
import { useFixture } from '../../context/Fixtures';

const StyledTable = styled.table`
  width: 100px;
  height: 50px;
  border-spacing: 0px;
`

export function TableFixtures () {
  const { fixtures } = useFixture();

  return (
    <>
      {fixtures.map((matches, i) => (
        <div>
          <span>Round {i} </span>
          <StyledTable key={i}>
            {matches.map((match, j) => (
              <RowFixture teamA={match[0]} teamB={match[1]} key={j}></RowFixture>
            ))}
          </StyledTable>
        </div>
      ))}
    </>
  )
}