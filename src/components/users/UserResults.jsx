import { useEffect, useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import UserContext, { UserProvider } from "../../context/UserContext";
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'

function UserResults() {

  const {users, isLoading, fetchUsers} = useContext(GithubContext)

    useEffect(() => {
    fetchUsers();
  }, []);

  if(!isLoading){
    return (
      <div className='grid gird-cols-1 gap-8 xl:grid-cols-4 ld:gird-cols-3 md:grid-cols-2'>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
      </div>
  )
  } else {
      return<Spinner />
  }

}

export default UserResults
