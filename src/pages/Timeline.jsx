import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";  // Added import for useState and useEffect

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
              title={title} // Added title for iframe
            />
          ) : (
            <img
              src={gif}
              alt={title} // Added alt text for accessibility
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
   Timeline Page
================================ */
export default function Timeline() {
  const navigate = useNavigate();
  const startDate = new Date("2022-10-06"); // Add the starting date

  // 💕 Update time elapsed every second
  const [timeElapsed, setTimeElapsed] = useState({});
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      let diff = now - startDate; // difference in ms

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      diff -= years * (1000 * 60 * 60 * 24 * 365);

      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
      diff -= months * (1000 * 60 * 60 * 24 * 30);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);

      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);

      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);

      const seconds = Math.floor(diff / 1000);

      setTimeElapsed({ years, months, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

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
      date: "1 October 2022",
      title: "First (unofficial) Date",
      text: "Pasta, shy smiles, innocent flirting, and butterflies everywhere. (with bevu as therapist😂)" ,
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWo2bmZuM3B6Zm5rdzYwa3Q1cHplb2hyZjlqcnpuOGVuenNnaHdyYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XvZ8PJ4DSqzSM/giphy.gif",
    },
    {
      date: "06 October 2022",
      title: "Movie date 🎥💕",
      text: "The day we became us.",
      gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW9ubnJyeWF0OTFzY2wzZTk0OG0yaXZnNWU1eHZqMml6ajl6N3c2MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4JyOZjwqPL6PrdVC/giphy.gif",
    },
    {
      date: "10 January 2023",
      title: "First Badminton court date 🏸",
      text: "swinging rackets, missing shots, and raising competitive tension 😉.",
      gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmJ4MmhkdXM1NDR3a3V3ZXR5enF2c3BicDlwNGEweWF0enY4MzQyNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XSSTbYF0U4EeoQOvum/giphy.gif",
    },
        {
      date: "13 May 2023",
      title: "Very cute arcade date 🎮",
      text: "played air hockey, rode a motorcycle 🏍️, sat in a very cute rikshaw 🛺, and also ate mallu food 😋.",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenY4cnY4dDhyZ3V1c3Q0NjJwcHMwMzhnZG92MXQ1d2s4dGY5MGN0YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l41m4C8LdwICSCTjq/giphy.gif",
    },
        {
      date: "2 October 2023",
      title: "A day out in panjim 🛣️",
      text: " Went to Panjim, had yummy boba🧋, had an upset with mr. Manish 💅, but still had the best time 💖.",
      gif: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cTBobjIxMHNoYzZ2bWxpMGpmdTBwd3ZjM2Q0aHN0bmF1czU4dDc0ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/PR3GwBdyshd9LdiGb6/giphy.gif",
    },
        {
      date: "17 December 2023",
      title: "A day out to Salim Ali bird santuary 🐦",
      text: "roamed Chorao island, went to the bird park and had a very peaceful time there 😌🧘.",
      gif: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aXdrYnR2dzZyYjF1bnR2MTF4YzNlcTRuZXpodWZjazJmYm5rMmF0eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KG4uqXCvWexDtODxrQ/giphy.gif",
    },
        {
      date: "19 August 2024",
      title: "Date night to Margao 🏙️🌆",
      text: "Night out to mr DIY 🏗️🚧, played carrom at silver owl 🎱.",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3BicHF1a2hoZjM2dzkyam9yZzBwMXUyeThubnJ5eTQ2MzBtOHh1bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/43OKja0fROZxpFoQeg/giphy.gif",
    },
        {
      date: "25 November 2024",
      title: "A Date night to Navelim fair 🎡 ",
      text: "Evening out to have fun at Navelim, took photos of people and my qt, ate gobi manchurian, went on a very scary giant wheel 🎡😂.",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDR6bTh0aTVyNm0ydDlpMjgwOXExYmtiOXZlMDZnYXk4N3p4cXU0NiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26Ff9XEp3k0saNHjy/giphy.gif",
    },
       {
      date: "22 December 2024",
      title: "Sandipity Date night 🎭🎨 ",
      text: "Experienced Serendipity arts festival together 💓, got Jehovah’s Witnesses' pamphlet 😂.",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNndsZzN0NGpvMW04YXc4NGs2YWQwNDV4NWZreXQzMzdmb3prY3VwMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GINwWtxBkXgOs/giphy.gif",
    },
       {
      date: "12 April 2025",
      title: "A Date night to Margao 🌉 ",
      text: "A Date night Coinchis, and awesome dinner at Wise Fool filled with laughs 🍗.",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGwwMHAxaXE0dzE4M3FkMDE4eXpzdGNhOWl1OWw1cnl2NTZjOGE1cCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10xnAw9YM8IYLe/giphy.gif",
    },
     {
      date: "4 August 2025",
      title: "Gym Date 💪🏋️ ",
      text: "my qt's first gym day ever, was very nice seeing my qt during my workout, hate that trainer tho 😤.",
      gif: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cnh4ejdiamgyeG54c3U2a2V0cjM0OHZqbXphbGVjZTcybnA3emZwaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fIrK1VbYaW6m4/giphy.gif",
    },
     {
      date: "8 August 2025",
      title: "Stand up comedy show date 🤣 ",
      text: "Quick snacking at Expanse 🥪, leading to  hilarious comedy show at Kala Academy 😂🎭.",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGpwNHdoMG0wdHhqNjl3bmZ1bm4xcjZrMzhiMGwzeTJ6NjY2bTZudyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/frxVkRVdTqLVpDe8qI/giphy.gif",
    },
     {
      date: "1 October 2025",
      title: "Tanuki lunch date 🍣🍥 ",
      text: "Lunch at Tanuki leading to my introduction of my qt's favourite sushi and the best sushi every made 😋🍣 .",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejI4eXBtc2M1dnB6Y3M0enVveXV6c2lkdG8xc2xuNWpxcmZ0b2Z6biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nAM3WDEnZ07meZ2m7v/giphy.gif",
    },
     {
      date: "17 December 2025",
      title: "Serendipity arts festival date 🎭🎨 ",
      text: "A Date to Nanbai (yum pain au chocolat 🥐), exploring sandipity, eating yum Medalian food at the park 🥡.",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTlyajd3c3k0cW9kMTVwNHp1a2c4eDA4c3VuNThsYmU3bDU3aDMyeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/aNa6bujO91rSiWr2vC/giphy.gif",
    },
     {
      date: "24 January 2026",
      title: "Gulabi saree concert 🎶🎤",
      text: "Revisiting nanbai for the yummy coffee ☕🍵, filming super fun big guy reel 👯, Gulabi saree concert 🎶🎤.",
      gif: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bHoyeXJ3dzRsMDRnbmdzdHprM2NwMDBwbG1qbWh4dmsxdWxhc3lkeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YzXhAWxuHqDe7MBqQQ/giphy.gif",
    },
    {
      date: "Every Day",
      title: "Still in Love",
      text: "Choosing you again and again.",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnBveTByZ2RrcXBrMm12bXFsZHFoOGdnbXNwMWZ2NmRjdmgydTVtdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oriO0OEd9QIDdllqo/giphy.gif",
    },
  ]

 return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-rose-50 to-white relative overflow-hidden">
      {/* dreamy sparkles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,192,203,0.35),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,182,193,0.35),transparent_40%)] pointer-events-none" />
      
      {/* Adjusted Play Typing Game Button */}
      <button
        onClick={() => navigate("/typing-game")}
        className="absolute top-10 right-40 px-6 py-2 bg-pink-500 text-white font-bold rounded-full shadow-md hover:bg-pink-600 transition-colors"
      >
        Play Typing Game 💖
      </button>

      <div className="relative max-w-4xl mx-auto px-6 py-10 flex flex-col items-center gap-6 ">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
         className="absolute left-0 mb-6 text-pink-500 font-semibold hover:underline" 
        >
          ← Back
        </button>

        {/* Timeline Title */}
        <h2 className="text-4xl font-extrabold mb-14 text-center text-pink-600 drop-shadow-sm">
          Our Timeline 💞
        </h2>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 top-0 h-full w-1 bg-pink-200 rounded-full" />

          <div className="space-y-16">
            {events.map((e, i) => (
              <TimelineItem key={i} {...e} />
            ))}
          </div>
        </div>
        
        {/* 💕 Cute Time Counter */}
        <div className="text-center mt-24 flex flex-col items-center gap-6">
          <h3 className="text-4xl font-extrabold text-pink-600 drop-shadow-sm">
            Together Since 💖
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {timeElapsed.years !== undefined && (
              <>
                <CounterCard value={timeElapsed.years} label="Years" />
                <CounterCard value={timeElapsed.months} label="Months" />
                <CounterCard value={timeElapsed.days} label="Days" />
              </>
            )}
          </div>

          <p className="text-gray-700 mt-6 text-lg italic">
            I’m still choosing you 💗
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-pink-400 text-sm font-semibold mt-20 pb-6 animate-pulse">
        Made with love 💖 by your Cutie
      </footer>
    </div>
  );
}

// CounterCard Component (same as before)
function CounterCard({ value, label, emoji }) {
  return (
    <div className="bg-pink-50/90 backdrop-blur-lg shadow-lg rounded-3xl px-6 py-4 text-center animate-pulse hover:scale-105 transition-transform duration-300">
      <span className="text-3xl font-extrabold text-pink-600">{value}</span>
      <div className="mt-1 text-sm font-semibold text-pink-500 flex items-center justify-center gap-1">
        {emoji} {label}
      </div>
    </div>
  );
}
