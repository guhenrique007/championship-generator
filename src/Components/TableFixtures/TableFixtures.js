import styled from "styled-components";
import { RowFixture } from "./RowFixture/RowFixture";

const StyledTable = styled.table`
  width: 100px;
  height: 50px;
  border-spacing: 0px;
`

export function TableFixtures () {
  return (
    <StyledTable>
      <RowFixture></RowFixture>
    </StyledTable>
  )
}