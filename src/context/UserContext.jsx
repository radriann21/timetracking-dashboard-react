/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react"; 
import { getUserData } from "../services/getUserData";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData()
        setUser(data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )

}

export { UserContext, UserProvider }