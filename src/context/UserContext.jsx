/* eslint-disable react/prop-types */
import { useReducer, useEffect, createContext } from "react"; 
import { UserReducer } from "./UserReducer";
import { getUserData } from "../services/getUserData";

const UserContext = createContext({});
const initialState = {
  user: {
    name: '',
    username: '',
    avatar: '',
    report: []
  },
  actualView: 'weekly'
}

const UserProvider = ({ children }) => {

  const [state, dispatch] = useReducer(UserReducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData()
        dispatch({ type: 'UPDATE_USER', payload: data })
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])

  return (
    <UserContext.Provider value={ {...state, dispatch} }>
      {children}
    </UserContext.Provider>
  )

}

export { UserContext, UserProvider }