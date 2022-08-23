import React, { useState, useEffect, useCallback } from 'react';
import CommonTable from "components/shared/common-table/CommonTable";
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/Common/Constant'

const UserTable = ({totalCount, pagination, setPagination, userList, handleDelete }) => {
  const [userData, setUserData] = useState([]);

  const keys = [
    "Id",
    "User Name",
    "Email",
    "Phone",
    "Website",
    "Action"
  ];

  const userTableData = useCallback(() => {
    if (userList.length) {
      return userList.map(user => {
        return [
          user.id,
          <div className="d-inline user-img">
            <span>{user.username}</span>
          </div>,
          user.email,
          user.phone,
          user.website,
          <div className="MuiButtonGroup-root">
            <Link to={`${ROUTES.EDIT_USER_PATH}/${btoa(JSON.stringify(user.id))}`} className="btn btn-primary mr-2">View</Link>
            <button  onClick={() => handleDelete(user)} className="btn btn-danger">
              Delete
            </button>
          </div>
        ];
      });
    }
    else {
      return [];
    }
  },[userList, handleDelete]);

  useEffect(() => {
    let userRowData = userTableData(userList);
    if (JSON.stringify(userRowData) !== JSON.stringify(userData)) {
      setUserData(userRowData);
    }
  }, [userTableData, userList, userData])

  return (
    <CommonTable totalCount={totalCount} customPagination={pagination}
    setCustomPagination={setPagination} data={userData} keys={keys} />
  )
}

export default UserTable