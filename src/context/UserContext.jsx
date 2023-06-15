import { createContext, useState, useEffect } from 'react';

const UserContext = createContext()

export const UserProvider = ({children}) => {
      const [users, setUsers] = useState([])
      const [isLoading, setLoading] = useState(true)

          useEffect(() => {
            fetchUsers()
            }, [])

        const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,
        {headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })

      const data = await response.json();
      setUsers(data)
      setLoading(false)
    }

    return (
        <UserContext.Provider
            value={{users,isLoading}}
        >{children}</UserContext.Provider>
    )
}

export default UserContext