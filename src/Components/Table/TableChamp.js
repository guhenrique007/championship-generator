import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParticipant } from "../../context/Participants";
import { useTable } from '../../context/Table';
import { calculatePoints } from '../../helpers/calculate-points';

export function TableChamp() {
  const { participants } = useParticipant();
  const { table } = useTable();

  return (
    <TableContainer component={Paper} sx={{maxWidth: 1000}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{backgroundColor: 'green', color: 'white', fontWeight: 600}}>
              Championship
            </TableCell>
            <TableCell>
              Points
            </TableCell>
            <TableCell>
              Won
            </TableCell>
            <TableCell>
              Drawn
            </TableCell>
            <TableCell>
              Lost
            </TableCell>
            <TableCell>
              GF
            </TableCell>
            <TableCell>
              GA
            </TableCell>
            <TableCell>
              GD
            </TableCell>
            <TableCell>
              Played
            </TableCell>
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
              <TableCell>{calculatePoints(table[participant])}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
