
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
import { useState,useEffect,useCallback } from 'react';
import { useParams } from 'react-router';
import { allProductSelector } from '../../redux/selector/inventory.selector';
import { fetchInventoryDataAction } from '../../redux/actions/inventory.action';
import { useDispatch, useSelector } from 'react-redux';

const Inventory = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {token} = useParams();
  const [isLoading,setIsLoading] = useState(true);
  const productData = useSelector(allProductSelector);

  const getProductList = () => {
    const list = localStorage.getItem('lists');
    if(list){
      return JSON.parse(list);
    } else {
      return [];
    }
  }

  const [tableData,setTableData] = useState(getProductList());

  useEffect(() => {
    getProductData(); 
  },[]);

  const getProductData = useCallback(() => {
    dispatch(fetchInventoryDataAction(token)); 
  },[dispatch]);

  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(tableData));
  },[tableData])

  useEffect(()=>{
    setTableData(productData);
  })

  return(
    <Paper sx={{ wnameth: '100%'}} className={classes.root}>
      {/* <h1>Products</h1> */}
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
          <h1 className={classes.header}>Products</h1>
          </TableHead>
          <TableBody>
            <TableRow>
             <div className={classes.table}>
              {tableData.map((product,index) => {
                return( 
                  <TableRow className={classes.row} key={index}>
                    <TableCell className={classes.leftSide}>
                        <img alt="image" src={product.url} className={classes.image}></img>
                    </TableCell>
                    <TableCell className={classes.rightSide}>
                        <div>
                          <h1>{product.product_name}</h1>
                          <div>{product.description}</div>
                          <div>{product.type}</div>
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

export default Inventory;

const useStyles = makeStyles((theme) => ({
  root:{
      margin: "2rem 5rem",
      padding: "0rem 2rem",
      border: "solid 0.1rem blue",
  //    height:"100%",
  },
  header:{
     display:"flex",
     justifyContent:'center',
  },
  row:{
    border: "solid 0.1rem green",
  },
  image:{
    height: "10rem",
    width:"20rem",
  },
  leftSide:{
    width:"70%",
    left: "20%",
    position: "relative",
    padding: "0rem 2rem",
  },
  rightSide:{
    position: "relative",
    right: "-50%",
    // marginLeft: "15rem",
    padding: "0rem 2rem",
    width: "30%",
  }
}));
