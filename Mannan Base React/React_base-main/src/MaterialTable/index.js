import React from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  Card,
  CardContent,
  Select,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  customPagination: {
    width: '50%',
    float: 'right'

  },
  cardPapper: {
    overflow: 'hidden',
    padding: '0 0 0 10px'
  }
}));


const CommonTable = () => {
  const handleChangePage = () => {

  }
  const handleChangeRowsPerPage = () => {

  }

  const classes = useStyles();

  return (
    <div className="tableLayout">
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Paper className={classes.cardPapper}>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
          <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100]}
          component="div"
          count={200}
          rowsPerPage={10}
          page={5}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          className={classes.customPagination}
        />
        </Paper>
        </CardContent> 
      </Card>
      <TableContainer
      component={Paper}
      className={` p-3 `}
    >
    
      <Table aria-label="a dense table" size="small">
          <TableHead>
            <TableRow>
                <TableCell
                  className="text-left text-capitalize"
                >
                  id
                </TableCell>
                <TableCell
                  className="text-left text-capitalize"
                >
                  name
                </TableCell>
                <TableCell
                  className="text-left text-capitalize"
                >
                  Age
                </TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell
                          className="text-left"
                        >
                        1
                        </TableCell>
                        <TableCell
                          className="text-left"
                        >
                        Khan
                        </TableCell>
                        <TableCell
                          className="text-left"
                        >
                        24
                        </TableCell>
                  </TableRow>
        </TableBody>
      </Table>
      
    </TableContainer>
    </div>
  )
}

export default CommonTable