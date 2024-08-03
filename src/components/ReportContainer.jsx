import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { ReportItem } from "./ReporItem";

export const ReportContainer = () => {
  
  const { user, actualView } = useContext(UserContext);

  if (!user || !actualView) {
    return <h1>Cargando...</h1>;
  }

  const report = user.report || [];
  
  return (
    <section className="w-full h-full gap-10 grid grid-cols-1 lg:grid-cols-3 lg:grid-row-2">
      {
        report.length == 0
        ? (<h1>cargando...</h1>)
        : ( report.map((item, index) => <ReportItem key={index} item={item} actualView={actualView} />) )
      }
    </section>
  )
}