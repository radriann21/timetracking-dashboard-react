import { UserCard } from "./components/UserCard"

function App() {
  return (
    <main className="max-w-full min-h-screen bg-very-dark-blue flex items-center justify-center">
      <section className="w-[70%] h-[480px] flex items-center justify-between">
        <UserCard />
      </section>
    </main>
  )
}

export default App
