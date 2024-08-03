/* eslint-disable react/prop-types */
export const ReportItem = ({ item, actualView }) => {
  return (
    <article className="w-full h-full rounded-lg flex flex-col p-4 bg-dark-blue text-white font-global">
      <div className="w-full flex items-center justify-between">
        <h3>{item.title}</h3>
        <div className="flex items-center space-x-1">
          <span className="w-1 h-1 rounded-full bg-white"></span>
          <span className="w-1 h-1 rounded-full bg-white"></span>
          <span className="w-1 h-1 rounded-full bg-white"></span>
        </div>
      </div>
      <section className="mt-12">
        <h3 className="text-3xl font-normal lg:text-5xl mb-2">{item.timeframes[actualView].current}hrs</h3>
        <span className="text-sm text-pale-blue">Last Time - {item.timeframes[actualView].previous}hrs</span>
      </section>
    </article>
  )
}