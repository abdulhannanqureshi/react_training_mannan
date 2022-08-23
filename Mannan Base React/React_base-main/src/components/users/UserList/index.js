import React, { useEffect, useState } from 'react'
import UserTable from './UserTable'
import { isDialogOpen } from 'utils/Common/CommonService'

const UserList = props => {
  const defaultPagination = {
    page: 1,
    limit: 10,
    orderBy: "DESC",
    username: ''
  };

  const [loaded, setLoaded] = useState(true)
  // const [rowData, setRowData] = useState([])
  const [pagination, setPagination] = useState(defaultPagination)
  // const [filterParams, setFilterParams] = useState({})

  const { userAction } = props.stores.actions
  const { users, count } = props.stores.states.userReducer

  useEffect(() => {
    if(loaded) {
      userAction.setUsers()
      setLoaded(false)
    }
  },[userAction, loaded])

  const setPage = (page) => {
    setPagination({ ...pagination, page });
    userAction.setUsers({ ...pagination, page });
  };

  const handleDelete = (user) => {
    isDialogOpen.onNext({
      open: true,
      data: {
        message: "Are you sure?",
        title: "Confirmation"
      },
      cancelText: "Cancel",
      confirmText: "Okay",
      onCancel: () => isDialogOpen.onNext(false),
      onConfirm: () => deleteUser(user)
    });
  };

  const deleteUser = (user) => {
    userAction.deleteUser(user)
    isDialogOpen.onNext(false)
  }

  const handleChange = (e) => {
    setPagination({ ...pagination, [e.target.name]: e.target.value });
    if(e.keyCode === 13) handleSearch()
  }

  const handleSearch = () => {
    userAction.setUsers({ ...pagination, page: 1 });
  }

  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div>
              <div className="row">
                <div className="col-md-6">
                  <input type="text" className="form-control" name="username" placeholder="Search by username" onKeyUp={handleChange} />
                </div>
                <div className="col-md-6">
                  <button className="btn btn-success" type="button" onClick={handleSearch}>Search</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-right">
            <button className="btn btn-primary">Export</button>
          </div>
        </div>
        <UserTable
          totalCount={count}
          pagination={pagination}
          setPagination={setPage}
          userList={users}
          handleDelete={handleDelete}
        ></UserTable>
      </div>
    </div>
  )
}

export default UserList