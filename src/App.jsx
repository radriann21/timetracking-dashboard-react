import { UserCard } from "./components/UserCard"
import { ReportContainer } from "./components/ReportContainer"   

function App() {
  return (
    <main className="max-w-full min-h-screen bg-very-dark-blue flex lg:items-center justify-center">
      <section className="w-full lg:w-[80%] h-[480px] flex items-center justify-between space-x-12 lg:p-0 px-4">
        <UserCard />
        <ReportContainer />
      </section>
    </main>
  )
}

export default App
