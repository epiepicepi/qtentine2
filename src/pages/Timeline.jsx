import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { intervalToDuration } from "date-fns";

/* ===============================
   Timeline Item
================================ */
function TimelineItem({ date, title, text, gif }) {
  const isEmbed = gif.includes("giphy.com/embed");

  return (
    <div className="relative pl-14">
      {/* Cute pulsing dot */}
      <div className="absolute left-1 top-7 w-6 h-6 rounded-full bg-pink-500 ring-4 ring-pink-200 animate-pulse shadow-md">
        <span className="absolute inset-1 bg-white rounded-full" />
      </div>

      {/* Card */}
      <div className="floaty bg-white/80 backdrop-blur rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col md:flex-row gap-6">
        {/* GIF */}
        <div className="w-full md:w-[240px] rounded-2xl overflow-hidden ring-4 ring-pink-200 shadow-sm">
          {isEmbed ? (
            <iframe
              src={gif}
              className="w-full h-[220px]"
              allowFullScreen
              title={title}
            />
          ) : (
            <img
              src={gif}
              alt={title}
              className="w-full h-[220px] object-cover hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>

        {/* Text */}
        <div className="flex-1">
          <span className="inline-block mb-3 text-xs font-bold text-pink-700 bg-pink-200 px-4 py-1 rounded-full shadow-sm">
            {date}
          </span>

          <h3 className="text-2xl font-extrabold text-gray-800 tracking-tight">
            {title}
          </h3>

          <p className="text-gray-600 mt-2 leading-relaxed italic">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ===============================
   Counter Card
================================ */
function CounterCard({ value, label }) {
  return (
    <div className="bg-pink-50/90 backdrop-blur-lg shadow-lg rounded-3xl px-6 py-4 text-center hover:scale-105 transition-transform duration-300">
      <span className="text-3xl font-extrabold text-pink-600">
        {value ?? 0}
      </span>
      <div className="mt-1 text-sm font-semibold text-pink-500">
        {label}
      </div>
    </div>
  );
}

/* ===============================
   Timeline Page
================================ */
export default function Timeline() {
  const navigate = useNavigate();

  const startDate = new Date(2022, 9, 6); 
  // IMPORTANT:
  // Month is 0-indexed → 9 = October

  const [timeElapsed, setTimeElapsed] = useState(null);

  useEffect(() => {
    const updateDuration = () => {
      const duration = intervalToDuration({
        start: startDate,
        end: new Date(),
      });

      setTimeElapsed(duration);
    };

    updateDuration(); // run immediately
    const interval = setInterval(updateDuration, 1000);

    return () => clearInterval(interval);
  }, []);

  const events = [
    {
      date: "23 July 2022",
      title: "We First Met 🚌",
      text: "The day the most cutest person walked into my life, at almeida bus stand.",
      gif: "https://giphy.com/embed/7PXtc6MxYua8U",
    },
    {
      date: "6 September 2022",
      title: "First time I made brownies for you",
      text: "And you've never stopped loving them since 💗.",
      gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDY5ajlneHB3Zjdkdmd6cndoNjZtdno4YzV5ejQwd2t5d2ZyMnVkcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fea7YK6zxLFngRbH0B/giphy.gif",
    },
    {
      date: "06 October 2022",
      title: "Movie date 🎥💕",
      text: "The day we became us.",
      gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW9ubnJyeWF0OTFzY2wzZTk0OG0yaXZnNWU1eHZqMml6ajl6N3c2MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4JyOZjwqPL6PrdVC/giphy.gif",
    },
    {
      date: "Every Day",
      title: "Still in Love",
      text: "Choosing you again and again.",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnBveTByZ2RrcXBrMm12bXFsZHFoOGdnbXNwMWZ2NmRjdmgydTVtdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oriO0OEd9QIDdllqo/giphy.gif",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-rose-50 to-white relative overflow-hidden">
      
      {/* Typing Game Button */}
      <button
        onClick={() => navigate("/typing-game")}
        className="absolute top-10 right-40 px-6 py-2 bg-pink-500 text-white font-bold rounded-full shadow-md hover:bg-pink-600 transition-colors"
      >
        Play Typing Game 💖
      </button>

      <div className="relative max-w-4xl mx-auto px-6 py-10 flex flex-col items-center gap-6">

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute left-0 mb-6 text-pink-500 font-semibold hover:underline"
        >
          ← Back
        </button>

        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-14 text-center text-pink-600 drop-shadow-sm">
          Our Timeline 💞
        </h2>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-1 bg-pink-200 rounded-full" />

          <div className="space-y-16">
            {events.map((e, i) => (
              <TimelineItem key={i} {...e} />
            ))}
          </div>
        </div>

        {/* 💕 Accurate Time Counter */}
        <div className="text-center mt-24 flex flex-col items-center gap-6">
          <h3 className="text-4xl font-extrabold text-pink-600 drop-shadow-sm">
            Together Since 💖
          </h3>

          {timeElapsed && (
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <CounterCard value={timeElapsed.years} label="Years" />
              <CounterCard value={timeElapsed.months} label="Months" />
              <CounterCard value={timeElapsed.days} label="Days" />

            </div>
          )}

          <p className="text-gray-700 mt-6 text-lg italic">
            I’m still choosing you 💗
          </p>
        </div>
      </div>

      <footer className="text-center text-pink-400 text-sm font-semibold mt-20 pb-6 animate-pulse">
        Made with love 💖 by your Cutie
      </footer>
    </div>
  );
}
