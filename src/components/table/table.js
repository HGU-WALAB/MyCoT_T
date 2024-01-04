import React from 'react';
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Fab 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const MyTable = () => {
  // Sample data
  const rows = [
    { id: 0, value: '87', label: 'Mandorle', icon: 'fa-user-circle' },
    // ...other rows
  ];

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 650, margin: 'auto', marginTop: 5 }}>
      <Fab color="primary" aria-label="add" sx={{ position: 'absolute', top: 90, left: 30, zIndex: 1 }}>
        <AddIcon />
      </Fab>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">VALUE</TableCell>
            <TableCell align="right">LABEL</TableCell>
            <TableCell align="right">ICON</TableCell>
            <TableCell align="right">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
              <TableCell align="right">{row.label}</TableCell>
              <TableCell align="right">{row.icon}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete" size="large">
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="edit" size="large">
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
