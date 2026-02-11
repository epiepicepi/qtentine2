import { useState, useEffect } from "react";
import { FaTrophy, FaRegClock, FaRedoAlt, FaStar } from "react-icons/fa"; // Import star icon

export default function TypingGame() {
  // List of messages to type
  const messages = [
    "crocodile road crosser",
    "Almeida is the worst school in Ponda",
    "i have the best husband ever",
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);  // Current message to type
  const [input, setInput] = useState("");  // User input
  const [isComplete, setIsComplete] = useState(false);  // Completion flag
  const [score, setScore] = useState(0);  // Score (number of correct messages)
  const [messageIndex, setMessageIndex] = useState(0);  // Index of current message
  const [startTime, setStartTime] = useState(null);  // Start time of the current message
  const [endTime, setEndTime] = useState(null);  // End time when the message is typed correctly
  const [timesTaken, setTimesTaken] = useState([]);  // Array of times taken to complete each message
  const [stars, setStars] = useState(0);  // Star rating for performance

  // Start a new message and reset input when a message is completed
  useEffect(() => {
    if (input === currentMessage && !isComplete) {
      const timeTaken = (endTime - startTime) / 1000; // Time in seconds
      setTimesTaken((prev) => [...prev, timeTaken]);
      setScore(score + 1);
      setIsComplete(true);
    }
  }, [input, currentMessage, endTime, startTime, isComplete]);

  // Handle input change and measure time taken
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (startTime === null && value !== "") {
      setStartTime(Date.now()); // Start timer when user starts typing
    }

    if (value === currentMessage && !isComplete) {
      setEndTime(Date.now()); // End timer when message is typed completely
    }
  };

  // Move to the next message after the current one is completed
  const nextMessage = () => {
    if (messageIndex < messages.length - 1) {
      setMessageIndex(messageIndex + 1);
      setCurrentMessage(messages[messageIndex + 1]);
      setInput("");
      setIsComplete(false);
      setStartTime(null);
      setEndTime(null);
    }
  };

  // Calculate stars based on time per message
  const calculateStars = () => {
    const totalTime = timesTaken.reduce((acc, time) => acc + time, 0);
    if (totalTime <= 10) {
      setStars(3); 
    } else if (totalTime <= 12) {
      setStars(2); 
    } else if (totalTime <= 15) {
      setStars(1); 
    } else {
      setStars(0); 
    }
  };

  // Calculate average time per message
  const averageTime = () => {
    const totalTime = timesTaken.reduce((acc, time) => acc + time, 0);
    return timesTaken.length ? (totalTime / timesTaken.length).toFixed(2) : 0;
  };

  // Render text with color feedback for correct/incorrect characters
  const renderText = () => {
    return currentMessage.split("").map((char, i) => {
      let colorClass = "";
      if (i < input.length) {
        colorClass = char === input[i] ? "text-green-500" : "text-red-500";
      }
      return (
        <span key={i} className={colorClass}>
          {char}
        </span>
      );
    });
  };

  useEffect(() => {
    if (messageIndex === messages.length) {
      calculateStars(); // Calculate stars when all messages are completed
    }
  }, [messageIndex, timesTaken]);

  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen bg-gradient-to-br from-pink-100 to-white py-8">
      <h1 className="text-4xl font-bold text-pink-600 mb-6 animate-pulse">Typing Game 💖</h1>

      {/* Displaying the current message with color feedback */}
      <p className="text-xl font-semibold text-center mb-6">{renderText()}</p>

      {/* Input box for typing */}
      {!isComplete ? (
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="border-2 border-pink-300 rounded-lg p-3 text-center w-full max-w-sm mt-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          autoFocus
          placeholder="Start typing..."
        />
      ) : (
        <>
          {/* Completion message and move to next */}
          <p className="text-pink-600 font-bold text-2xl animate-bounce mt-4">
            You typed it perfectly! 💖
          </p>
          {messageIndex < messages.length - 1 ? (
            <button
              onClick={nextMessage}
              className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-pink-600 mt-4 transition-all transform hover:scale-105"
            >
              Next Message
            </button>
          ) : (
            <div className="mt-6 p-6 bg-gradient-to-br from-pink-200 via-pink-100 to-white rounded-lg shadow-xl border-2 border-pink-300">
              <p className="text-2xl font-bold text-pink-600 mb-4 animate__animated animate__fadeIn animate__delay-1s">
                Game Over! 🎉 Here are your results:
              </p>
              <div className="mt-4 text-lg text-pink-500">
                <div className="flex items-center gap-2 mb-3">
                  <FaTrophy className="text-yellow-400 text-2xl" />
                  <p className="font-bold">Total Messages Typed: {score}</p>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <FaRegClock className="text-blue-500 text-2xl" />
                  <p className="font-bold">Average Time per Message: {averageTime()} seconds</p>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <FaRegClock className="text-blue-500 text-2xl" />
                  <p className="font-bold">Total Time Taken: {timesTaken.reduce((acc, time) => acc + time, 0)} seconds</p>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(3)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`text-yellow-400 text-5xl ${index < stars ? "fill-current" : ""}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => window.location.reload()}
                  className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-pink-600 mt-4 transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  <FaRedoAlt className="text-white text-lg" />
                  Restart Game
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
