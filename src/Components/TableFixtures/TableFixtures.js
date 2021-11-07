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
    <StyledTable>
      {fixtures.map((match, i) => (
        <RowFixture teamA={match[0]} teamB={match[1]} key={i}></RowFixture>
      ))}
    </StyledTable>
  )
}