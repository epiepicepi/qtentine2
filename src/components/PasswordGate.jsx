import { useState, useEffect } from "react"

export default function PasswordGate({ children }) {

  const REAL_PASSWORD = "06-10"      // ← your secret word
  const HINT = "our anniversary date in DD-MM 😘" // ← change to your hint

  const [input, setInput] = useState("")
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState(false)
  const [showHint, setShowHint] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("love_unlocked") === "true") {
      setUnlocked(true)
    }
  }, [])

  const checkPassword = () => {
    if (input.toLowerCase() === REAL_PASSWORD.toLowerCase()) {
      localStorage.setItem("love_unlocked", "true")
      setUnlocked(true)
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  if (unlocked) return children

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6">

      <h2 className="text-4xl mb-6 font-bold text-pink-600">
        Secret Place 💌
      </h2>

      <p className="mb-4 text-gray-600">
        Enter our special password
      </p>

      <input
        type="password"
        className="border p-3 rounded-xl mb-4 w-64 text-center"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === "Enter" && checkPassword()}
      />

      <button
        onClick={checkPassword}
        className="bg-pink-500 text-white px-6 py-2 rounded-xl mb-2"
      >
        Unlock 💖
      </button>

      {/* NEW HINT BUTTON */}
      <button
        onClick={() => setShowHint(!showHint)}
        className="text-sm text-pink-400 underline"
      >
        check hint
      </button>

      {showHint && (
        <p className="mt-2 text-pink-500 italic">
          Hint: {HINT}
        </p>
      )}

      {error && (
        <p className="text-red-400 mt-3">
          Nope… try the important date to us 😠
        </p>
      )}

    </div>
  )
}
