import { useNavigate } from "react-router-dom"

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-4">

      <h1 className="text-5xl font-bold text-pink-600 mb-6 text-center">
        Our Love Story 💖
      </h1>



      <p className="mb-10 text-gray-600 text-lg text-center max-w-md">
        A little timeline of us, our memories, and all the moments  
        that made me fall in love with you.
      </p>

      <button
        onClick={() => navigate("/timeline")}
        className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-xl text-lg transition shadow-lg"
      >
        Open Timeline
      </button>

   <footer className="text-center text-pink-400 text-sm font-semibold mt-20 pb-6 animate-pulse">
  Made with love 💖 by your Shanu
</footer>

    </div>
  )
}
