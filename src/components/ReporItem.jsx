/* eslint-disable react/prop-types */
export const ReportItem = ({ item, actualView }) => {

  const colorMap = {
    "Work": "bg-work-light-red",
    "Play": "bg-play-soft-blue",
    "Study": "bg-study-light-red",
    "Exercise": "bg-exercise-lime-green",
    "Social": "bg-social-violet",
    "Self Care": "bg-self-care-soft-orange"
  }

  const colorClass = colorMap[item.title] || ''

  return (
    <article className="relative w-full h-fit lg:h-full my-5 lg:my-0 rounded-lg bg-dark-blue text-white font-global">
    <section className={`relative w-full h-20 rounded-t-lg ${colorClass} overflow-hidden`}>
      <img src={item.icon} className="absolute top-0 right-4 h-10 w-10 z-0" alt={item.title} />
    </section>
    <section className="relative w-full h-full p-4 z-10 bg-dark-blue rounded-lg -mt-12">
      <div className="w-full flex items-center justify-between">
        <h3>{item.title}</h3>
        <div className="flex items-center space-x-1">
          <span className="w-1 h-1 rounded-full bg-white"></span>
          <span className="w-1 h-1 rounded-full bg-white"></span>
          <span className="w-1 h-1 rounded-full bg-white"></span>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-3xl font-normal lg:text-5xl mb-2">{item.timeframes[actualView].current}hrs</h3>
        <span className="text-sm text-pale-blue">Last Time - {item.timeframes[actualView].previous}hrs</span>
      </div>
    </section>
  </article>
  )
}