import { useState, useEffect } from "react"

export const UserCard = () => {

  const [userData, setUserData] = useState({})

  useEffect(() => {
    fetch("/user.json")
      .then(res => res.json())
      .then(data => setUserData(data));
  }, [])

  return (
    <article className="w-[260px] h-fit flex flex-col rounded-lg bg-dark-blue">
      <section className="w-full h-[70%] bg-custom-blue rounded-lg p-6">
        <section>
          <img className="h-16 w-16 rounded-full border-2 border-white" src={userData.avatar} alt="avatar of user" />
          <section className="mt-8">
            <div>
              <span className="font-global text-pale-blue">Report by</span>
              <h3 className="font-global text-white text-4xl">{userData.name}</h3>
              <span className="font-global text-pale-blue text-sm">@{userData.username}</span>
            </div>
          </section>
        </section>
      </section>

      <section className="w-full h-full p-6">
        <ul className="flex flex-row lg:flex-col gap-6">
          <li className="font-global text-pale-blue transition-colors duration-300 ease-in hover:text-white cursor-pointer">Daily</li>
          <li className="font-global text-pale-blue transition-colors duration-300 ease-in hover:text-white cursor-pointer">Weekly</li>
          <li className="font-global text-pale-blue transition-colors duration-300 ease-in hover:text-white cursor-pointer">Monthly</li>
        </ul>
      </section>

    </article>
  )
}