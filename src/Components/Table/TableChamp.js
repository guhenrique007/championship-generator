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
import { calculateGoals, calculatePoints, counterResults } from '../../helpers/calculate-points';
import { useGoals } from '../../context/Goals';

export function TableChamp() {
  const { participants } = useParticipant();
  const { table } = useTable();
  const { goals } = useGoals();

  return (
    <TableContainer component={Paper} sx={{maxWidth: 1000}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{backgroundColor: 'green', color: 'white', fontWeight: 600}}>
              Championship
            </TableCell>
            <TableCell>
              Played
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
              Points
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
              <TableCell>{table[participant].length}</TableCell>
              <TableCell>{(counterResults(table[participant], 'W'))}</TableCell>
              <TableCell>{(counterResults(table[participant], 'D'))}</TableCell>
              <TableCell>{(counterResults(table[participant], 'L'))}</TableCell>
              <TableCell>{calculateGoals(goals[participant], 'for')}</TableCell>
              <TableCell>{calculateGoals(goals[participant], 'against')}</TableCell>
              <TableCell>{calculateGoals(goals[participant], 'for') - calculateGoals(goals[participant], 'against')}</TableCell>
              <TableCell>{calculatePoints(table[participant])}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
