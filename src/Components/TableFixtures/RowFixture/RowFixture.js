import styled from "styled-components";
import { ScoreInput } from "../ScoreInput/ScoreInput";

const TableRow = styled.tr`
  width: 100px;
  height: 50px;
  border:1px solid black;
`;

const TableCell = styled.td`
  border: 1px solid green;
  padding: 15px;
  min-width: 200px;
`;

const TableCell2 = styled(TableCell)`
  text-align: right;
`

const VersusCell = styled(TableCell)`
  min-width: 10px;
`;

export function RowFixture ({teamA, teamB}) {
  return (
    <TableRow id={teamA+'~'+teamB}>
      <TableCell>{teamA}</TableCell>     
      <ScoreInput id={teamA}></ScoreInput>
      <VersusCell>X</VersusCell>
      <ScoreInput id={teamB}></ScoreInput>
      <TableCell2>{teamB}</TableCell2>
    </TableRow>
  )
}