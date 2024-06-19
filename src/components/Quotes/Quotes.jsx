import React from "react";
import { useEffect, useState } from "react";
import { quotes } from "../../../data/quotes.js";
import "./Quotes.css";

function Quotes() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const today = new Date();
    const quoteIndex = today.getDate() % quotes.length;
    setQuote(quotes[quoteIndex]);
  }, []);

  return (
    <div className="quoteOfTheDay">
      <h1>quote of the day</h1>
      <div className="quotes">
        <p>{quote.text}</p>
        <span>{quote.author}</span>
      </div>
    </div>
  );
}

export default Quotes;
