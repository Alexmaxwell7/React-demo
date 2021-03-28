import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

function Grid () {
    

const columns = [
  {
    field: 'Departments',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'Client',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
];

const rows = [
  {
    id: 1,
    first: '12',
    last: '180',
  },
  {
    id: 2,
    first: '24',
    last: '70',
  },
  {
    id: 3,
    first: '65',
    last: '8',
  },
  {
      id:4,
      first:'24',
      last:'8'
  }
];

const useStyles = makeStyles({
  root: {
    '& .super-app-theme--header': {
      backgroundColor: 'rgba(255, 7, 0, 0.55)',
    },
  },
});

  const classes = useStyles();

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default Grid;
