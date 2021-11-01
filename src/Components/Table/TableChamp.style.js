import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParticipant } from "../../context/Participants";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const rows = [
  // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  'Palmeiras'
];

export function TableChamp() {
  const { participants, setParticipants} = useParticipant();

  return (
    <TableContainer component={Paper} sx={{maxWidth: 600}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Equipes:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {participants.map((participant) => (
            <TableRow
              key={participant}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {participant}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
