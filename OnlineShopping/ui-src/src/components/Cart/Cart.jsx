import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from "@material-ui/core/styles";
import { flexbox } from '@mui/system';

const columns = [
  { name: 'name', label: 'Name', minWnameth: 170 },
  { name: 'code', label: 'ISO\u00a0Code', minWnameth: 100 },
  {
    name: 'population',
    label: 'Population',
    minWnameth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    name: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWnameth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    name: 'density',
    label: 'Density',
    minWnameth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),

  { name: 1, code: 'Snow', population: 'Jon', size: 35, density: 3287263 },
  { name: 2, code: 'Lannister', population: 'Cersei', size: 42,density: 3287263 },
  { name: 3, code: 'Lannister', population: 'Jaime', size: 45,density: 3287263 },
  { name: 4, code: 'Stark', population: 'Arya', size: 16,density: 3287263 },
  { name: 5, code: 'Targaryen', population: 'Daenerys', size: null ,density: 3287263},
  { name: 6, code: 'Melisandre', population: 'Jaime', size: 150,density: 3287263 },
  { name: 7, code: 'Clifford', population: 'Ferrara', size: 44,density: 3287263 },
  { name: 8, code: 'Frances', population: 'Rossini', size: 36,density: 3287263},
  { name: 9, code: 'Roxie', population: 'Harvey', size: 65,density: 3287263 },
];

const data = [
    { field: 'id', headerName: 'ID', 
      description: 'This column has a value getter and is not sortable.',
      width: 70 },
    { field: 'firstName', headerName: 'First name', 
      description: 'This column has a value getter and is not sortable.',
      width: 130 },
    { field: 'lastName', headerName: 'Last name', 
      description: 'This column has a value getter and is not sortable.',
      width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      description: 'This column has a value getter and is not sortable.',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
];

export default function Cart() {
  const [psize, setPsize] = React.useState(0);
  const [rowsPerPsize, setRowsPerPsize] = React.useState(10);
  const classes = useStyles();

  const handleChangePsize = (event, newPsize) => {
    setPsize(newPsize);
  };

  const handleChangeRowsPerPsize = (event) => {
    setRowsPerPsize(+event.target.value);
    setPsize(0);
  };

  return (
    <Paper sx={{ wnameth: '100%'}} className={classes.root}>
      {/* <h1>Products</h1> */}
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
          <h1 style={{marginLeft:"1%"}}>Products</h1>
          </TableHead>
          <TableBody>
            <TableRow>
            <div className={classes.table}>
                {data.map((product) => {
                    return(
                    <TableRow className={classes.row}>
                        <TableCell className={classes.leftSide}>
                            <img alt="image"></img>
                        </TableCell>
                        <TableCell className={classes.rightSide}>
                            <div>
                                <h1>{product.field}</h1>
                                <div>{product.headerName}</div>
                                <div>{product.description}</div>
                            </div>
                        </TableCell>
                    </TableRow>
                    )
                })}
            </div>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPsizeOptions={[5,10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPsize={rowsPerPsize}
        psize={psize}
        onPsizeChange={handleChangePsize}
        onRowsPerPsizeChange={handleChangeRowsPerPsize}
      /> */}
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
    root:{
        margin: "2%",
    //    height:"100%",
    },
    table:{
    //   width: "100%",
    },
    row:{
  
    },
    leftSide:{
      width:"60%",
    },
    rightSide:{
      width: "50%",
    }
}));
