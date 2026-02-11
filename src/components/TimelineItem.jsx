export default function TimelineItem({ date, title, text, gif }) {

  // detect if it is a giphy page embed or direct gif
  const isEmbed = gif.includes("giphy.com/embed")

  return (
    <div className="mb-10">

      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">

        {/* GIF AREA */}
        <div className="w-[520px] rounded-xl overflow-hidden shadow">

          {isEmbed ? (
            <iframe
              src={gif}
              width="100%"
              height="240"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={gif}
              className="w-full h-[240px] object-cover"
              alt="memory gif"
            />
          )}

        </div>

        {/* TEXT */}
        <div className="border-l-4 border-pink-300 pl-4 w-full">

          <p className="text-sm text-pink-500">
            {date}
          </p>

          <h3 className="text-xl font-semibold mt-1">
            {title}
          </h3>

          <p className="text-gray-700 mt-1">
            {text}
          </p>

        </div>

      </div>

    </div>
  )
}
