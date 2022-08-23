import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { count } from 'utils/Common/CommonService'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));


const CommonTable = ({ totalCount, customPagination, setCustomPagination, data, keys }) => {
  const classes = useStyles();
  const setPage = (_, value) => {
    setCustomPagination(value)
  }
  const [isLoaded, setLoaded] = useState(false)
  useEffect(() => {
    if(!isLoaded && !totalCount) setLoaded(true)
  }, [isLoaded, totalCount])
  return (
    <div className="mt-5 commonTable">
      <table className="table">
        <thead>
          <tr>
            {keys.map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((column, index) => (
            <tr key={index}>
              {column.map((key, i) => (
                <td className="align-middle" key={i}>{key}</td>
              ))}
            </tr>
          ))}
          {isLoaded ? (
            <tr className="text-center">
              <td colSpan={keys.length}>No record available</td>
            </tr>
          ) : null}
        </tbody>
      </table>
      <div className={classes.root}>
        <Pagination count={count(totalCount, customPagination.limit)} page={customPagination.page} onChange={setPage} color="primary" />
      </div>
    </div>
  )
}

export default CommonTable