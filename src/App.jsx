import { UserCard } from "./components/UserCard"
import { ReportContainer } from "./components/ReportContainer"   

function App() {
  return (
    <main className="max-w-full min-h-screen bg-very-dark-blue flex items-center justify-center">
      <section className="w-full lg:w-[80%] h-full lg:h-[480px] flex lg:flex-row flex-col lg:space-x-12 lg:p-0 p-4">
        <UserCard />
        <ReportContainer />
      </section>
    </main>
  )
}

export default App
