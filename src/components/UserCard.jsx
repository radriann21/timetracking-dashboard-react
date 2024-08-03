import { useContext } from "react";
import { UserContext } from "../context/UserContext";   

export const UserCard = () => {

  const { user, dispatch } = useContext(UserContext)

  const handleView = (e) => {
    let viewName = e.target.value
    dispatch({ type: 'UPDATE_VIEW', payload: viewName  })
  }

  return (
    <article className="w-full lg:w-[420px] h-fit flex flex-col rounded-lg bg-dark-blue">
      <section className="w-full h-[70%] bg-custom-blue rounded-lg p-6">
        <section>
          <img className="h-16 w-16 rounded-full border-2 border-white" src={user.avatar} alt="avatar of user" />
          <section className="mt-8">
            <div>
              <span className="font-global text-pale-blue">Report by</span>
              <h3 className="font-global text-white text-2xl lg:text-4xl">{user.name}</h3>
              <span className="font-global text-pale-blue text-sm">@{user.username}</span>
            </div>
          </section>
        </section>
      </section>

      <section className="w-full h-full p-6">
        <ul className="flex justify-center lg:justify-start flex-row lg:flex-col gap-6">
          <li className="font-global text-pale-blue transition-colors duration-300 ease-in hover:text-white cursor-pointer">
            <button onClick={handleView} value="daily">Daily</button>
          </li>
          <li className="font-global text-pale-blue transition-colors duration-300 ease-in hover:text-white cursor-pointer">
            <button onClick={handleView} value="weekly">Weekly</button>
          </li>
          <li className="font-global text-pale-blue transition-colors duration-300 ease-in hover:text-white cursor-pointer">
           <button onClick={handleView}  value="monthly">Monthly</button>
          </li>
        </ul>
      </section>

    </article>
  )
}