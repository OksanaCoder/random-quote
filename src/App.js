// App.js
import React, { useEffect, useState } from "react";
import "./App.css";
import { generateQuotes } from "./api/index.js";
import TweetButton from "./components/TweetBtn";

function App() {
  const [quote, setQuote] = useState({});
  const [background, setBackground] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await generateQuotes();
        setQuote(data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchData();
    fetchRandomColor();
  }, []);

  const handleClick = () => {
    const fetchData = async () => {
      try {
        const data = await generateQuotes();
        setQuote(data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchData();
    fetchRandomColor();
  };
  const fetchRandomColor = () => {
    const colors = ["red", "pink", "green", "orange", "blue", "black"];
    const randomBag = colors[Math.floor(Math.random() * colors.length)];
    setBackground(randomBag);
  };
  const tweetText = "Check out this amazing content!";
  const tweetUrl = "https://your-app-url.com";

  return (
    <div className="wrapper" style={{ background: `${background}` }}>
      <div className="quote-box">
        <h1 className="text" style={{ color: `${background}` }}>
          " {quote?.quote}
        </h1>
        <p className="author align-right">{quote?.author}</p>
        <div className="flex-wrapper">
          <TweetButton text={tweetText} url={tweetUrl} />{" "}
          <button
            onClick={handleClick}
            style={{
              background: `${background}`,
              border: "none",
              padding: "10px 20px",
              color: "#fff",
            }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
