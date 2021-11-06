import styled from "styled-components";

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

const VersusCell = styled(TableCell)`
  min-width: 10px;
`;

export function RowFixture () {
  return (
    <TableRow>
      <TableCell>team a</TableCell>
      <VersusCell>X</VersusCell>
      <TableCell>team b</TableCell>
    </TableRow>
  )
}